package lang

import (
	"context"
	"log"

	"golang.org/x/text/language"
)

const ContextLanguageKey = "language-key"

// first one is fallback language
var usedLanguages = []language.Tag{
	language.English,   // en
	language.Ukrainian, // uk
	language.Russian,   // ru
}

func SetLanguage(ctx context.Context, s string) context.Context {
	tags, _, err := language.ParseAcceptLanguage(s)
	if err != nil {
		log.Printf("error parsing Accept-Language: %v", err)
		return ctx
	}

	tag, _, _ := language.NewMatcher(usedLanguages).Match(tags...)
	return context.WithValue(ctx, ContextLanguageKey, tag)
}

func GetLanguage(ctx context.Context) language.Tag {
	l, ok := ctx.Value(ContextLanguageKey).(language.Tag)
	if !ok {
		// fallback to default language if missing in context
		return usedLanguages[0]
	}
	return l
}
