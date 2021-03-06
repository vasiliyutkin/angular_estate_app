package middleware

import (
	"context"
	"log"
	"net/http"

	"golang.org/x/text/language"
)

const ContextLanguageKey = "language-key"

// first one is fallback language
var usedLanguages = []language.Tag{
	language.English,   // en
	language.Ukrainian, // uk
	language.Russian,   // ru
}

func Lang(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tags, _, err := language.ParseAcceptLanguage(r.Header.Get("Accept-Language"))
		if err != nil {
			log.Printf("error parsing Accept-Language: %v", err)
		}

		tag, _, _ := language.NewMatcher(usedLanguages).Match(tags...)
		next(w, r.WithContext(context.WithValue(r.Context(), ContextLanguageKey, tag)))
	}
}
