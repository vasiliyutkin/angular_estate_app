package model

type Error struct {
	Code uint32 `json:"code"`
	Text string `json:"text"`
}

func (e Error) Error() string {
	return e.Text
}

var (
	// auth errors
	ErrUserNotExists = Error{Code: 100, Text: "User not exists"}
	ErrUserExists    = Error{Code: 101, Text: "User already exists"}
	ErrWrongPassword = Error{Code: 102, Text: "Wrong password"}
)
