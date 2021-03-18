package mailer

import (
	"encoding/base64"
	"io"
)

const lineLength = 76

type lineBreaker struct {
	line [lineLength]byte
	used int
	out  io.Writer
}

var nl = []byte("\r\n")

func (l *lineBreaker) Write(b []byte) (n int, err error) {
	if l.used+len(b) < lineLength {
		copy(l.line[l.used:], b)
		l.used += len(b)
		return len(b), nil
	}
	n, err = l.out.Write(l.line[0:l.used])
	if err != nil {
		return
	}
	excess := lineLength - l.used
	l.used = 0
	n, err = l.out.Write(b[0:excess])
	if err != nil {
		return
	}
	n, err = l.out.Write(nl)
	if err != nil {
		return
	}
	return l.Write(b[excess:])
}

func (l *lineBreaker) Close() (err error) {
	if l.used > 0 {
		_, err = l.out.Write(l.line[0:l.used])
		if err != nil {
			return
		}
		_, err = l.out.Write(nl)
	}
	return
}

func Base64(out io.Writer, data []byte) error {
	breaker := &lineBreaker{out: out}
	b64 := base64.NewEncoder(base64.StdEncoding, breaker)
	if _, err := b64.Write(data); err != nil {
		return err
	}
	b64.Close()
	breaker.Close()
	return nil
}
