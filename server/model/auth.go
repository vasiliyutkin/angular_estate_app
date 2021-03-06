package model

import (
	"fmt"
	"log"
	"strings"

	"golang.org/x/crypto/bcrypt"
)

type AuthData struct {
	Username string `json:"username"`
	Password string `json:"password"`
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

	u, err := m.store.CreateUser(a.Username, string(hashed))
	if err != nil {
		return nil, fmt.Errorf("create user %q: %w", a.Username, err)
	}
	return userFromStore(u), nil
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
