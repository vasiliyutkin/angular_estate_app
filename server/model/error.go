package model

type Error struct {
	Label string `json:"-"`
	Code  uint32 `json:"code"`
	Text  string `json:"text"`
}

func (e *Error) Error() string {
	return e.Label
}

var (
	// auth errors
	ErrUserNotExists   = &Error{Code: 100, Label: "ErrUserNotExists", Text: "User not exists"}
	ErrUserExists      = &Error{Code: 101, Label: "ErrUserExists", Text: "User already exists"}
	ErrWrongPassword   = &Error{Code: 102, Label: "ErrWrongPassword", Text: "Wrong password"}
	ErrUsernameIsEmpty = &Error{Code: 103, Label: "ErrUsernameIsEmpty", Text: "Username is empty"}
	ErrPasswordIsEmpty = &Error{Code: 103, Label: "ErrPasswordIsEmpty", Text: "Password is empty"}
)
