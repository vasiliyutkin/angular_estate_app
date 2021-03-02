package model

import (
	"fmt"
	"log"
	"strings"

	"golang.org/x/crypto/bcrypt"
)

func (m *Model) Login(username, password string) (*User, error) {
	username = strings.ToLower(username)
	u, err := m.store.GetUserByName(username)
	if err != nil {
		return nil, fmt.Errorf("get user %q: %w", username, err)
	}

	if err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(password)); err != nil {
		log.Printf("wrong password for user %q: %v", username, err)
		return nil, ErrWrongPassword
	}

	return userFromStore(u), nil
}

func (m *Model) SignUp(username, password string) (*User, error) {
	username = strings.ToLower(username)

	exists, err := m.store.UserExits(username)
	if err != nil {
		return nil, fmt.Errorf("check if username %s exists: %w", username, err)
	}
	if exists {
		return nil, ErrUserExists
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("hashing password: %w", err)
	}

	u, err := m.store.CreateUser(username, string(hashed))
	if err != nil {
		return nil, fmt.Errorf("create user %q: %w", username, err)
	}
	return userFromStore(u), nil
}
