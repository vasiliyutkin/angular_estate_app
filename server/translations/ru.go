package translations

import (
	"golang.org/x/text/language"
	"golang.org/x/text/message"
)

func init() {
	tag := language.MustParse("ru")
	message.SetString(tag, "ErrUserNotExists", "Пользователь не существует")
	message.SetString(tag, "ErrUserExists", "Пользователь уже существует")
	message.SetString(tag, "ErrWrongPassword", "Неверный пароль")
	message.SetString(tag, "ErrUsernameIsEmpty", "Имя пользователя пусто")
	message.SetString(tag, "ErrPasswordIsEmpty", "Пароль пуст")
	message.SetString(tag, "ErrUserLinkExpired", "Срок действия ссылки истек")
}
