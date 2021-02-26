package model

import (
	"fmt"
	"golang.org/x/crypto/bcrypt"
)

func (m *Model) SignIn(username, password string) (*User, error) {
	u, err := m.store.GetUserByName(username)
	if err != nil {
		return nil, fmt.Errorf("get user %q: %w", username, err)
	}

	if err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(password)); err != nil {
		return nil, fmt.Errorf("wrong password for user %q: %w", username, err)
	}

	return &User{
		ID:       u.ID,
		Username: u.Username,
		IsAdmin:  u.IsAdmin,
	}, err
}

func (m *Model) SignUp(username, password string) (*User, error) {
	hashed, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("hashing password: %w", err)
	}

	u, err := m.store.CreateUser(username, string(hashed))
	if err != nil {
		return nil, fmt.Errorf("create user %q: %w", username, err)
	}
	return &User{
		ID:       u.ID,
		Username: u.Username,
		IsAdmin:  u.IsAdmin,
	}, err
}
