package model

import (
	"be/server/helpers/mailer"
	"be/server/store"
	"fmt"
	"log"
	"net/url"
	"path"
	"strings"

	"golang.org/x/crypto/bcrypt"
)

type AuthData struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Mobile    string `json:"mobile"`
}

func (a *AuthData) validate() error {
	a.Username = strings.ToLower(strings.TrimSpace(a.Username))
	a.Password = strings.TrimSpace(a.Password)

	if a.Username == "" {
		return ErrUsernameIsEmpty
	}

	if a.Password == "" {
		return ErrPasswordIsEmpty
	}

	return nil
}

func (a *AuthData) toStoreUser(s string) *store.User {
	return &store.User{
		Username:  a.Username,
		Password:  s,
		Firstname: a.Firstname,
		Lastname:  a.Lastname,
		Mobile:    a.Mobile,
	}
}

func (m *Model) Login(a *AuthData) (*User, error) {
	if err := a.validate(); err != nil {
		return nil, err
	}

	u, err := m.store.GetUserByName(a.Username)
	if err != nil {
		log.Printf("get user %q: %v", a.Username, err)
		return nil, ErrUserNotExists
	}

	if err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(a.Password)); err != nil {
		log.Printf("wrong password for user %q: %v", a.Username, err)
		return nil, ErrWrongPassword
	}

	return userFromStore(u), nil
}

func (m *Model) SignUp(a *AuthData) (*User, error) {
	if err := a.validate(); err != nil {
		return nil, err
	}

	exists, err := m.store.UserExits(a.Username)
	if err != nil {
		return nil, fmt.Errorf("check if username %s exists: %w", a.Username, err)
	}
	if exists {
		return nil, ErrUserExists
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(a.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("hashing password: %w", err)
	}

	u, err := m.store.CreateUser(a.toStoreUser(string(hashed)))
	if err != nil {
		return nil, fmt.Errorf("create user %q: %w", a.Username, err)
	}

	userLink, err := m.store.GenerateUserLink(u)
	if err != nil {
		return nil, fmt.Errorf("generate user link for %q for confirmation registration: %w", a.Username, err)
	}

	if err := m.sendRegistrationLink(userLink, u.Firstname, u.Lastname); err != nil {
		return nil, fmt.Errorf("send link for %q for confirmation registration: %w", a.Username, err)
	}

	return userFromStore(u), nil
}

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

func (m *Model) ConfirmRegistration(link string) error {
	userID, err := m.store.EvaluateUserLink(link)
	if err != nil {
		log.Printf("get user link %q: %v", link, err)
		return ErrUserLinkExpired
	}

	err = m.store.EnableUser(userID)
	return err
}

func (m *Model) ResetPassword(a *AuthData) (*User, error) {
	if err := a.validate(); err != nil {
		return nil, err
	}

	u, err := m.store.GetUserByName(a.Username)
	if err != nil {
		log.Printf("get user %q: %v", a.Username, err)
		return nil, ErrUserNotExists
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(a.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("hashing password: %w", err)
	}

	if err := m.store.UpdatePassword(u.ID, string(hashed)); err != nil {
		return nil, fmt.Errorf("update password: %w", err)
	}

	return userFromStore(u), nil
}
