package api

type User struct {
	ID        uint32 `json:"id"`
	Username  string `json:"username"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Mobile    string `json:"mobile"`
	IsAdmin   bool   `json:"isAdmin"`
	Enabled   bool   `json:"enabled"`
}
