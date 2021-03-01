package model

import "be/server/store"

type User struct {
	ID        uint32 `json:"id"`
	Username  string `json:"username"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Mobile    string `json:"mobile"`
	IsAdmin   bool   `json:"is_admin"`
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
