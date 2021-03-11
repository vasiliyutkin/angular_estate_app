package mailer

import (
	"fmt"
	"log"
	"net/smtp"
)

const (
	authUsername = "annalexestate@gmail.com"
	authPassword = "AnnaAlex2021"
)

type loginAuth struct {
	username, password string
}

func LoginAuth() smtp.Auth {
	return &loginAuth{authUsername, authPassword}
}

func (a *loginAuth) Start(server *smtp.ServerInfo) (string, []byte, error) {
	return "LOGIN", []byte{}, nil
}

func (a *loginAuth) Next(fromServer []byte, more bool) ([]byte, error) {
	log.Println(string(fromServer))
	if more {
		switch string(fromServer) {
		case "Username:":
			return []byte(a.username), nil
		case "Password:":
			return []byte(a.password), nil
		default:
			return nil, fmt.Errorf("unknown fromServer: %s", fromServer)
		}
	}
	return nil, nil
}
