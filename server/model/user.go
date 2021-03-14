package model

import (
	"be/server/store"
	"log"
)

type User struct {
	ID        uint32 `json:"id"`
	Username  string `json:"username"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Mobile    string `json:"mobile"`
	IsAdmin   bool   `json:"isAdmin"`
	Enabled   bool   `json:"enabled"`
}

func userFromStore(u *store.User) *User {
	return &User{
		ID:        u.ID,
		Username:  u.Username,
		Firstname: u.Firstname,
		Lastname:  u.Lastname,
		Mobile:    u.Mobile,
		IsAdmin:   u.IsAdmin,
		Enabled:   u.Enabled,
	}
}

func (m *Model) GetUsers() ([]*User, error) {
	us, err := m.store.GetUsers()
	if err != nil {
		return nil, err
	}

	var users []*User
	for _, u := range us {
		users = append(users, userFromStore(u))
	}

	return users, nil
}

func (m *Model) GetUser(id uint32) (*User, error) {
	u, err := m.store.GetUser(id)
	if err != nil {
		log.Printf("get user %d: %v", id, err)
		return nil, ErrUserNotExists
	}

	return userFromStore(u), nil
}
