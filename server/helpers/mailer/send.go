package mailer

import (
	"bytes"
	"fmt"
	"log"
	"net/smtp"
)

var (
	host     = "smtp.gmail.com"
	port     = "587"
	username = "annalexestate@gmail.com"
	password = "AnnaAlex2021"
	sender   = "Estate Management Team <annalexestate@gmail.com>"
)

type Sender struct {
	auth smtp.Auth
}

func New() *Sender {
	return &Sender{auth: auth()}
}

func (s *Sender) Send(m *Message) error {
	m.From = sender

	buf := new(bytes.Buffer)
	content, err := Wrap(m)
	if err != nil {
		return err
	}
	if err := WriteHeader(buf, m, content.Header()); err != nil {
		return err
	}
	if err := content.WriteTo(buf); err != nil {
		return err
	}

	return smtp.SendMail(fmt.Sprintf("%s:%s", host, port), s.auth, username, m.To, buf.Bytes())
}

func (s *Sender) Debug(m *Message) {
	log.Println("sending disabled, would send:")
	log.Printf("From: %v", sender)
	log.Printf("To: %v", m.To)
	if len(m.CC) > 0 {
		log.Printf("Cc: %v", m.CC)
	}
	if len(m.BCC) > 0 {
		log.Printf("Bcc: %v", m.BCC)
	}
	for i, a := range m.Attachments {
		log.Printf("Attachment %d: %s Size: %d", i+1, a.Name, len(a.Bytes))
	}
	for i, a := range m.Assets {
		log.Printf("Assets %d: %s Size: %d", i+1, a.Name, len(a.Bytes))
	}
	log.Printf("Body: %s", string(m.Body))
}
