package middleware

import (
	"be/server/helpers/lang"
	"net/http"
)

func Lang(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		next(w, r.WithContext(lang.SetLanguage(r.Context(), r.Header.Get("Accept-Language"))))
	}
}
