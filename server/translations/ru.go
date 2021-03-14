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
	message.SetString(tag, "ErrRegistrationNotFinished", "Пользователь не завершил регистрацию")
	message.SetString(tag, "ErrRegistrationLinkExists", "Ссылка для регистрации уже запрошена")
	message.SetString(tag, "ErrPasswordChangeLinkExists", "Ссылка для смены пароля уже запрошена")
}
