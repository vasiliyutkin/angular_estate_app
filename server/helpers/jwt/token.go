package jwt

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"time"
)

var jwtKey = []byte("956a134bab451ad659a3a0b9f4a2098a05e3ddb1d02533a1f41f94da9e737b4c")

func keyFunc(_ *jwt.Token) (interface{}, error) {
	return jwtKey, nil
}

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

func Verify(token string) error {
	claims := &Claims{}
	tkn, err := jwt.ParseWithClaims(token, claims, keyFunc)
	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			return fmt.Errorf("signature is invalid")
			//w.WriteHeader(http.StatusUnauthorized)
			//return
		}
		return err
		//w.WriteHeader(http.StatusBadRequest)
		//return
	}
	if tkn == nil || !tkn.Valid {
		return fmt.Errorf("token is invalid")
		//w.WriteHeader(http.StatusUnauthorized)
		//return
	}
	return nil
}
