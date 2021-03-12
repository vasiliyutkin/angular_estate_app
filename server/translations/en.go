package translations

import (
	"golang.org/x/text/language"
	"golang.org/x/text/message"
)

func init() {
	tag := language.MustParse("en")
	message.SetString(tag, "ErrUserNotExists", "User not exists")
	message.SetString(tag, "ErrUserExists", "User already exists")
	message.SetString(tag, "ErrWrongPassword", "Wrong password")
	message.SetString(tag, "ErrUsernameIsEmpty", "Username is empty")
	message.SetString(tag, "ErrPasswordIsEmpty", "Password is empty")
	message.SetString(tag, "ErrUserLinkExpired", "Link is expired")
}
