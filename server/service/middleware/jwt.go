package middleware

import (
	"be/server/helpers/jwt"
	"fmt"
	"log"
	"net/http"
	"strings"
)

func JWT(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		token, err := getTokenFromRequest(r)
		if err != nil {
			log.Printf("get JWT token - %s", err)
			//t := fmt.Sprintf(`Bearer realm="%s"`, challengeTarget)
			//w.Header().Set("WWW-Authenticate", t)
			http.Error(w, "Unauthorized Request: No Authentication information found or invalid", http.StatusUnauthorized)
			return
		}

		if err := jwt.Verify(token); err != nil {
			log.Printf("verify JWT token - %s", err)
		}

		next(w, r)
	}
}

func getTokenFromRequest(r *http.Request) (string, error) {
	token := r.Header.Get("Authorization")

	if token == "" {
		return "", fmt.Errorf("no JWT token")
	}

	if len(token) <= 6 {
		return "", fmt.Errorf("token is too short %s", token)
	}

	if strings.ToUpper(token[:7]) != "BEARER " {
		return "", fmt.Errorf("wrong token %s", token)
	}

	return token[7:], nil
}
