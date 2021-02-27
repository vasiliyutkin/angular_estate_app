package jwt

import (
	"github.com/dgrijalva/jwt-go"
	"time"
)

var jwtKey = []byte("my_secret_key")

type Claims struct {
	Username       string
	StandardClaims jwt.StandardClaims
}

func (c Claims) Valid() error {
	return c.StandardClaims.Valid()
}

func New(username string) (string, error) {
	claims := &Claims{
		Username: username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(24 * 60 * time.Minute).Unix(),
		},
	}

	return jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString(jwtKey)
}
