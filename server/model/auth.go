package model

import (
	"be/server/store"
	"fmt"
	"log"
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

func (a *AuthData) validate(checkPassword bool) error {
	a.Username = strings.ToLower(strings.TrimSpace(a.Username))
	a.Password = strings.TrimSpace(a.Password)

	if a.Username == "" {
		return ErrUsernameIsEmpty
	}

	if checkPassword && a.Password == "" {
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
	if err := a.validate(true); err != nil {
		return nil, err
	}

	u, err := m.store.GetUserByName(a.Username)
	if err != nil {
		log.Printf("get user %q: %v", a.Username, err)
		return nil, ErrUserNotExists
	}

	if !u.Enabled {
		return nil, ErrRegistrationNotFinished
	}

	if err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(a.Password)); err != nil {
		log.Printf("wrong password for user %q: %v", a.Username, err)
		return nil, ErrWrongPassword
	}

	return userFromStore(u), nil
}

func (m *Model) SignUp(a *AuthData) (*User, error) {
	if err := a.validate(true); err != nil {
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

	exists, err = m.store.LinkExists(u.ID)
	if err != nil {
		return nil, fmt.Errorf("check if link for user %s exists: %w", a.Username, err)
	}
	if exists {
		return nil, ErrRegistrationLinkExists
	}

	userLink, err := m.store.GenerateUserLink(u.ID)
	if err != nil {
		return nil, fmt.Errorf("generate user link for %q for confirmation registration: %w", a.Username, err)
	}

	if err := m.sendRegistrationLink(userLink, u.Firstname, u.Lastname); err != nil {
		return nil, fmt.Errorf("send link for %q for confirmation registration: %w", a.Username, err)
	}

	return userFromStore(u), nil
}

func (m *Model) ConfirmRegistration(link string) error {
	userID, err := m.store.EvaluateUserLink(link)
	if err != nil {
		log.Printf("get user link %q: %v", link, err)
		return ErrUserLinkExpired
	}

	user, err := m.store.EnableUser(userID)
	if err != nil {
		return err
	}

	m.SendSMS(userFromStore(user))
	return err
}

func (m *Model) ConfirmForgotPassword(link string) (uint32, error) {
	userID, err := m.store.EvaluateUserLink(link)
	if err != nil {
		log.Printf("get user link %q: %v", link, err)
		return 0, ErrUserLinkExpired
	}

	return userID, nil
}

func (m *Model) ForgotPassword(a *AuthData) error {
	if err := a.validate(false); err != nil {
		return err
	}

	u, err := m.store.GetUserByName(a.Username)
	if err != nil {
		log.Printf("get user %q: %v", a.Username, err)
		return ErrUserNotExists
	}

	if !u.Enabled {
		return ErrRegistrationNotFinished
	}

	exists, err := m.store.LinkExists(u.ID)
	if err != nil {
		return fmt.Errorf("check if link for user %s exists: %w", a.Username, err)
	}
	if exists {
		return ErrPasswordChangeLinkExists
	}

	userLink, err := m.store.GenerateUserLink(u.ID)
	if err != nil {
		return fmt.Errorf("generate user link for %q for reset password: %w", a.Username, err)
	}

	if err := m.sendForgotPasswordLink(userLink, u.Firstname, u.Lastname); err != nil {
		return fmt.Errorf("send link for %q for reset password: %w", a.Username, err)
	}

	return nil
}

func (m *Model) ResetPassword(a *AuthData) (*User, error) {
	if err := a.validate(true); err != nil {
		return nil, err
	}

	u, err := m.store.GetUserByName(a.Username)
	if err != nil {
		log.Printf("get user %q: %v", a.Username, err)
		return nil, ErrUserNotExists
	}

	if !u.Enabled {
		return nil, ErrRegistrationNotFinished
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
