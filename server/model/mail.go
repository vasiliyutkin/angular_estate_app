package model

import (
	"be/server/helpers/mailer"
	"fmt"
	"io/ioutil"
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
			<style>
				body {
					display: flex;
					flex-direction: column;
					color: #101;
					align-items: center;
				}
				.wrapper>* {
					margin-bottom: 8px;
				}
				.wrapper {
					display: flex;
					flex-direction: column;
					width: 600px;
				}
				.signature {
					margin-top: 16px;
				}
			</style>
		</head>
		<body>
			<div class="wrapper">
				<img src="cid:image.png" width="100%%"/>
				<div>Dear %s %s,</div>
				<div>thanks for your interest!</div>
				<div>To confirm your registration please click <a href="%s">>>here<<</a></div>
				
				<div class="signature">
					<i>
						Regards<br>
						Estate Management Team
					<i>
				</div>
			</div>
		</body>
		</html>
	`, firstName, lastName, u.String())

	msg := &mailer.Message{
		To:      to,
		Subject: subject,
		Body:    []byte(message),
	}

	b, err := ioutil.ReadFile("server/model/image.png")
	if err != nil {
		return err
	}
	msg.AddAsset("image.png", b)

	if m.debugMode {
		log.Println(u.String())
		mailer.New().Debug(msg)
		return nil
	}

	return mailer.New().Send(msg)
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
			<style>
				body {
					display: flex;
					flex-direction: column;
					color: #101;
					align-items: center;
				}
				.wrapper>* {
					margin-bottom: 8px;
				}
				.wrapper {
					display: flex;
					flex-direction: column;
					width: 600px;
				}
				.signature {
					margin-top: 16px;
				}
			</style>
		</head>
		<body>
			<div class="wrapper">
				<img src="image.png" width="100%%"/>
				<div>Dear %s %s,</div>
				<div>you have made request to reset your password.</div>
				<div>Please click the link to reset your password <a href="%s">>>here<<</a></div>
				
				<div class="signature">
					<i>
						Regards<br>
						Estate Management Team
					<i>
				</div>
			</div>
		</body>
		</html>
	`, firstName, lastName, u.String())

	msg := &mailer.Message{
		To:      to,
		Subject: subject,
		Body:    []byte(message),
	}

	b, err := ioutil.ReadFile("server/model/image.png")
	if err != nil {
		return err
	}
	msg.AddAsset("image.png", b)

	if m.debugMode {
		log.Println(u.String())
		mailer.New().Debug(msg)
		return nil
	}

	return mailer.New().Send(msg)
}
