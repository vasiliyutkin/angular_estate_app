package api

type AuthData struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Firstname string `json:"firstName"`
	Lastname  string `json:"lastName"`
	Mobile    string `json:"mobile"`
}
