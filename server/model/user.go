package model

type User struct {
	ID       uint32 `json:"id"`
	Username string `json:"username"`
	IsAdmin  bool   `json:"is_admin"`
}
