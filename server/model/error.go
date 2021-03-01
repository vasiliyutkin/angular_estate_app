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
	ErrUserExists    = Error{Code: 100, Text: "User already exists"}
	ErrWrongPassword = Error{Code: 101, Text: "Wrong password"}
)
