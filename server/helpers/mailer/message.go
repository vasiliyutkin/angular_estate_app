package mailer

import (
	"crypto/rand"
	"fmt"
	"io"
	"mime/multipart"
	"mime/quotedprintable"
	"net/http"
	"net/textproto"
	"sort"
	"strings"

	"github.com/h2non/filetype"
	"github.com/h2non/filetype/types"
	"jaytaylor.com/html2text"
)

const (
	encodingBase64          = "base64"
	encoding8Bit            = "8bit"
	encodingQuotedPrintable = "quoted-printable"
	multipartMixed          = "multipart/mixed"
	multipartRelated        = "multipart/related"
	multipartAlternative    = "multipart/alternative"
)

type Message struct {
	From        string
	To          []string
	CC          []string
	BCC         []string
	Subject     string
	Body        []byte
	Attachments []*File
	Assets      []*File
}

type File struct {
	Name  string
	Bytes []byte
}

func (m *Message) AddAttachment(name string, b []byte) {
	m.Attachments = append(m.Attachments, &File{
		Name:  name,
		Bytes: b,
	})
}

func (m *Message) AddAsset(name string, b []byte) {
	m.Assets = append(m.Assets, &File{
		Name:  name,
		Bytes: b,
	})
}

type Block interface {
	WriteTo(io.Writer) error
	Header() textproto.MIMEHeader
}

type raw struct {
	Encoding    string
	Type        string
	Description string
	Disposition string
	Bytes       []byte
	ContentID   string
}

func (m raw) Header() textproto.MIMEHeader {
	h := make(textproto.MIMEHeader)
	h.Set("Content-Transfer-Encoding", m.Encoding)
	h.Set("Content-Type", m.Type)
	if m.Description != "" {
		h.Set("Content-Description", m.Description)
	}
	if m.Disposition != "" {
		h.Set("Content-Disposition", m.Disposition)
	}
	if m.ContentID != "" {
		h.Set("Content-ID", "<"+m.ContentID+">")
	}
	return h
}

func (m raw) WriteTo(w io.Writer) error {
	switch m.Encoding {
	case encodingBase64:
		return Base64(w, m.Bytes)
	case encodingQuotedPrintable:
		q := quotedprintable.NewWriter(w)
		defer q.Close()
		_, err := q.Write(m.Bytes)
		return err
	default:
		_, err := w.Write(m.Bytes)
		return err
	}
}

type mixed struct {
	boundary string
	Blocks   []Block
}

func (m mixed) Header() textproto.MIMEHeader {
	h := make(textproto.MIMEHeader)
	h.Set("Content-Type", fmt.Sprintf("%s; boundary=%q", multipartMixed, m.boundary))
	return h
}

func (m mixed) WriteTo(w io.Writer) error {
	mp := multipart.NewWriter(w)
	defer mp.Close()
	if err := mp.SetBoundary(m.boundary); err != nil {
		return err
	}
	for _, block := range m.Blocks {
		p, err := mp.CreatePart(block.Header())
		if err != nil {
			return err
		}
		if err := block.WriteTo(p); err != nil {
			return err
		}
	}
	return nil
}

type related struct {
	boundary string
	Blocks   []Block
}

func (m related) Header() textproto.MIMEHeader {
	h := make(textproto.MIMEHeader)
	h.Set("Content-Type", fmt.Sprintf("%s; boundary=%q", multipartRelated, m.boundary))
	return h
}

func (m related) WriteTo(w io.Writer) error {
	mp := multipart.NewWriter(w)
	defer mp.Close()
	if err := mp.SetBoundary(m.boundary); err != nil {
		return err
	}
	for _, block := range m.Blocks {
		p, err := mp.CreatePart(block.Header())
		if err != nil {
			return err
		}
		if err := block.WriteTo(p); err != nil {
			return err
		}
	}
	return nil
}

type alternative struct {
	boundary string
	Blocks   []Block
}

func (m alternative) Header() textproto.MIMEHeader {
	h := make(textproto.MIMEHeader)
	h.Set("Content-Type", fmt.Sprintf("%s; boundary=%q", multipartAlternative, m.boundary))
	return h
}

func (m alternative) WriteTo(w io.Writer) error {
	mp := multipart.NewWriter(w)
	defer mp.Close()
	if err := mp.SetBoundary(m.boundary); err != nil {
		return err
	}
	for _, block := range m.Blocks {
		p, err := mp.CreatePart(block.Header())
		if err != nil {
			return err
		}
		if err := block.WriteTo(p); err != nil {
			return err
		}
	}
	return nil
}

func RandomBoundary() string {
	var buf [30]byte
	_, err := io.ReadFull(rand.Reader, buf[:])
	if err != nil {
		panic(err)
	}
	return fmt.Sprintf("%x", buf[:])
}

var Boundary = RandomBoundary

func Wrap(msg *Message) (Block, error) {
	return wrapMixed(msg)
}

func wrapMixed(msg *Message) (Block, error) {
	rel, err := wrapRelated(msg)
	if err != nil {
		return nil, err
	}
	if len(msg.Attachments) == 0 {
		return rel, nil
	}
	var mix mixed
	mix.boundary = Boundary()
	mix.Blocks = append(mix.Blocks, rel)
	for _, a := range msg.Attachments {
		mix.Blocks = append(mix.Blocks, raw{
			Encoding:    encodingBase64,
			Type:        fmt.Sprintf("%s; name=%q", detect(a.Bytes), a.Name),
			Description: a.Name,
			Disposition: fmt.Sprintf("attachment; filename=%q; size=%d", a.Name, len(a.Bytes)),
			Bytes:       a.Bytes,
		})
	}
	return mix, nil
}

func wrapRelated(msg *Message) (Block, error) {
	alt, err := wrapAlternative(msg)
	if err != nil {
		return nil, err
	}
	if len(msg.Assets) == 0 {
		return alt, nil
	}
	var rel related
	rel.boundary = Boundary()
	rel.Blocks = append(rel.Blocks, alt)
	for _, a := range msg.Assets {
		rel.Blocks = append(rel.Blocks, raw{
			Encoding:    encodingBase64,
			Type:        fmt.Sprintf("%s; name=%q", detect(a.Bytes), a.Name),
			Description: a.Name,
			Disposition: fmt.Sprintf("inline; filename=%q; size=%d", a.Name, len(a.Bytes)),
			Bytes:       a.Bytes,
			ContentID:   a.Name,
		})
	}
	return rel, nil
}

func wrapAlternative(msg *Message) (Block, error) {
	contentType := detect(msg.Body)
	if strings.HasPrefix(contentType, "text/html") {
		plain, err := html2text.FromString(string(msg.Body), html2text.Options{PrettyTables: true})
		if err != nil {
			return nil, err
		}
		var alt alternative
		alt.boundary = Boundary()
		alt.Blocks = append(alt.Blocks, raw{
			Encoding: encoding8Bit,
			Type:     detect([]byte(plain)),
			Bytes:    []byte(plain),
		})
		alt.Blocks = append(alt.Blocks, raw{
			Encoding: encoding8Bit,
			Type:     contentType,
			Bytes:    msg.Body,
		})
		return alt, nil
	}
	/*
		if msg.ContentType != "" {
			return raw{
				Encoding: encodingQuotedPrintable,
				Type:     msg.ContentType,
				Bytes:    msg.Body,
			}, nil
		}
	*/
	return raw{
		Encoding: encoding8Bit,
		Type:     contentType,
		Bytes:    msg.Body,
	}, nil
}

func detect(data []byte) string {
	kind, err := filetype.Match(data)
	if err != nil || kind == types.Unknown {
		return http.DetectContentType(data)
	}
	return kind.MIME.Value
}

func header(m *Message, content textproto.MIMEHeader) textproto.MIMEHeader {
	h := make(textproto.MIMEHeader)
	h.Set("To", strings.Join(m.To, ","))
	if len(m.CC) > 0 {
		h.Set("Cc", strings.Join(m.CC, ","))
	}
	h.Set("Subject", m.Subject)
	if enc := content.Get("Content-Transfer-Encoding"); enc != "" {
		h.Set("Content-Transfer-Encoding", enc)
	}
	h.Set("Content-Type", content.Get("Content-Type"))
	h.Set("From", sender)
	//h.Set("Return-Path", from.Address)
	h.Set("MIME-Version", "1.0")
	return h
}

func WriteHeader(w io.Writer, m *Message, content textproto.MIMEHeader) error {
	h := header(m, content)

	var keys []string
	for k := range h {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	for _, k := range keys {
		for _, v := range h[k] {
			fmt.Fprintf(w, "%s: %s\r\n", k, v)
		}
	}
	fmt.Fprintf(w, "\r\n")
	return nil
}
