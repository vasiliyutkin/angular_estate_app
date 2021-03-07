package model

import (
	"be/server/store"
)

type User struct {
	ID        uint32 `json:"id"`
	Username  string `json:"username"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Mobile    string `json:"mobile"`
	IsAdmin   bool   `json:"isAdmin"`
}

func userFromStore(u *store.User) *User {
	return &User{
		ID:        u.ID,
		Username:  u.Username,
		Firstname: u.Firstname,
		Lastname:  u.Lastname,
		Mobile:    u.Mobile,
		IsAdmin:   u.IsAdmin,
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
