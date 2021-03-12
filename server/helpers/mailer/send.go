package mailer

import (
	"bytes"
	"fmt"
	"log"
	"mime/quotedprintable"
	"net/smtp"
	"strings"
)

func Send(to []string, subject, message string, debugMode bool) error {
	bodyMessage := WriteHTMLEmail(to, subject, message)

	msg := "From: " + "annalexestate@gmail.com" + "\n" +
		"To: " + strings.Join(to, ",") + "\n" +
		"Subject: " + subject + "\n" + bodyMessage

	if debugMode {
		log.Println(msg)
		return nil
	}

	err := smtp.SendMail(
		"smtp.gmail.com:587",
		LoginAuth(),
		"annalexestate@gmail.com",
		to,
		[]byte(msg))
	if err != nil {
		log.Println(err)
		return nil
	}
	return nil
}

func WriteEmail(dest []string, contentType, subject, bodyMessage string) string {

	header := make(map[string]string)
	/*
		header["From"] = "annalexestate@gmail.com"

		receipient := ""
		for _, user := range dest {
			receipient = receipient + user
		}

		header["To"] = receipient
		header["Subject"] = subject
	*/
	header["MIME-Version"] = "1.0"
	header["Content-Type"] = fmt.Sprintf("%s; charset=\"utf-8\"", contentType)
	header["Content-Transfer-Encoding"] = "quoted-printable"
	header["Content-Disposition"] = "inline"

	message := ""

	for key, value := range header {
		message += fmt.Sprintf("%s: %s\r\n", key, value)
	}

	var encodedMessage bytes.Buffer

	finalMessage := quotedprintable.NewWriter(&encodedMessage)
	finalMessage.Write([]byte(bodyMessage))
	finalMessage.Close()

	message += "\r\n" + encodedMessage.String()

	return message
}

func WriteHTMLEmail(dest []string, subject, bodyMessage string) string {
	return WriteEmail(dest, "text/html", subject, bodyMessage)
}

func WritePlainEmail(dest []string, subject, bodyMessage string) string {
	return WriteEmail(dest, "text/plain", subject, bodyMessage)
}
