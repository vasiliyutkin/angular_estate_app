package model

import (
	"be/server/helpers/mailer"
	"fmt"
	"log"
	"net/url"
	"path"
)

func (m *Model) sendRegistrationLink(userLink, firstName, lastName string) error {
	u, err := url.Parse(m.baseURL)
	if err != nil {
		return err
	}
	u.Path = path.Join(u.Path, "api", "auth", "confirm")
	u.RawQuery = fmt.Sprintf("s=%s", userLink)

	to := []string{
		"soloviov28@gmail.com",
		"vasiliyutkin13121991@gmail.com",
	}

	subject := "Confirm your registration"

	message := fmt.Sprintf(`
		<!DOCTYPE HTML PULBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
		<html>
		<head>
			<meta http-equiv="content-type" content="text/html"; charset=ISO-8859-1">
		</head>
		<body>
			Dear %s %s,<br>
			<br>

			thanks for your interest!<br>
			To confirm your registration please click <a href="%s">here</a><br>
			<br>
			<br>

			<div class="moz-signature">
				<i>
					Regards<br>
					Dron & Dron<br>
				<i>
			</div>
		</body>
		</html>
	`, firstName, lastName, u.String())

	if m.debugMode {
		log.Println(u.String())
	}

	return mailer.Send(to, subject, message, m.debugMode)
}

func (m *Model) sendForgotPasswordLink(userLink, firstName, lastName string) error {
	u, err := url.Parse(m.baseURL)
	if err != nil {
		return err
	}
	u.Path = path.Join(u.Path, "api", "auth", "forgot-password")
	u.RawQuery = fmt.Sprintf("s=%s", userLink)

	to := []string{
		"soloviov28@gmail.com",
		"vasiliyutkin13121991@gmail.com",
	}

	subject := "Reset password"

	message := fmt.Sprintf(`
		<!DOCTYPE HTML PULBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
		<html>
		<head>
			<meta http-equiv="content-type" content="text/html"; charset=ISO-8859-1">
		</head>
		<body>
			Dear %s %s,<br>
			<br>

			you have made request to reset your password.<br>
			Please click the link to reset your password <a href="%s">here</a><br>
			<br>
			<br>

			<div class="moz-signature">
				<i>
					Regards<br>
					Dron & Dron<br>
				<i>
			</div>
		</body>
		</html>
	`, firstName, lastName, u.String())

	if m.debugMode {
		log.Println(u.String())
	}

	return mailer.Send(to, subject, message, m.debugMode)
}
