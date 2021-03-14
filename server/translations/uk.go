package translations

import (
	"golang.org/x/text/language"
	"golang.org/x/text/message"
)

func init() {
	tag := language.MustParse("uk")
	message.SetString(tag, "ErrUserNotExists", "Користувач не існує")
	message.SetString(tag, "ErrUserExists", "Користувач вже існує")
	message.SetString(tag, "ErrWrongPassword", "Невірний пароль")
	message.SetString(tag, "ErrUsernameIsEmpty", "Ім'я користувача порожнє")
	message.SetString(tag, "ErrPasswordIsEmpty", "Пароль порожній")
	message.SetString(tag, "ErrUserLinkExpired", "Термін дії ссилки закінчився")
	message.SetString(tag, "ErrRegistrationNotFinished", "Користувач не закінчив реєстрацію")
	message.SetString(tag, "ErrRegistrationLinkExists", "Ссилка для реєстрації вже запрошено")
	message.SetString(tag, "ErrPasswordChangeLinkExists", "Ссилка для зміни пароля вже запрошено")
}
