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
	ErrUserNotExists            = &Error{Code: 100, Label: "ErrUserNotExists", Text: "User not exists"}
	ErrUserExists               = &Error{Code: 101, Label: "ErrUserExists", Text: "User already exists"}
	ErrWrongPassword            = &Error{Code: 102, Label: "ErrWrongPassword", Text: "Wrong password"}
	ErrUsernameIsEmpty          = &Error{Code: 103, Label: "ErrUsernameIsEmpty", Text: "Username is empty"}
	ErrPasswordIsEmpty          = &Error{Code: 104, Label: "ErrPasswordIsEmpty", Text: "Password is empty"}
	ErrUserLinkExpired          = &Error{Code: 105, Label: "ErrUserLinkExpired", Text: "Link is expired"}
	ErrRegistrationNotFinished  = &Error{Code: 106, Label: "ErrRegistrationNotFinished", Text: "User has not finished the registration"}
	ErrRegistrationLinkExists   = &Error{Code: 107, Label: "ErrUserLinkExists", Text: "Link for registration already requested"}
	ErrPasswordChangeLinkExists = &Error{Code: 108, Label: "ErrPasswordChangeLinkExists", Text: "Link for password change already requested"}
)
