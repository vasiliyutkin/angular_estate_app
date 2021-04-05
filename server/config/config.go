package config

import (
	"fmt"
	"os"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

const (
	defaultPort    = "1312"
	dbConn         = "postgres://qbqdkfvllgrxdu:20ec0fd6f4099c8803318572a0f2979cbc50af842a4b6ee80f303e25cb987155@ec2-52-204-141-94.compute-1.amazonaws.com:5432/d80j29f4aee9uc"
	defaultBaseURL = "https://analex.herokuapp.com/"

	googleClientID     = "926215394620-b7klphdht3p426fq72km6b48903iqq53.apps.googleusercontent.com"
	googleClientSecret = "VIoJ7Vg6inIeAqNpde5qXhzb"
	googleRedirectPath = "api/auth/google-callback"
)

type Config struct {
	Port        string
	DBConn      string
	BaseURL     string
	DebugMode   bool
	GoogleOauth *oauth2.Config
}

func New() *Config {
	c := &Config{}

	c.Port = os.Getenv("PORT")
	if c.Port == "" {
		c.Port = defaultPort
	}

	c.DBConn = os.Getenv("DATABASE_URL")
	if c.DBConn == "" {
		c.DBConn = dbConn
	}

	c.BaseURL = os.Getenv("BASE_URL")
	if c.BaseURL == "" {
		c.BaseURL = defaultBaseURL
	}

	c.GoogleOauth = &oauth2.Config{
		ClientID:     googleClientID,
		ClientSecret: googleClientSecret,
		RedirectURL:  fmt.Sprintf("%s%s", c.BaseURL, googleRedirectPath),
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		},
		Endpoint: google.Endpoint,
	}

	return c
}

func SoloConfig() *Config {
	baseURL := "http://localhost:1312/"
	return &Config{
		Port:      defaultPort,
		DBConn:    "host=localhost port=5432 user=as password=postgres dbname=solo sslmode=disable",
		BaseURL:   baseURL,
		DebugMode: true,
		GoogleOauth: &oauth2.Config{
			ClientID:     googleClientID,
			ClientSecret: googleClientSecret,
			RedirectURL:  fmt.Sprintf("%s%s", baseURL, googleRedirectPath),
			Scopes: []string{
				"https://www.googleapis.com/auth/userinfo.email",
				"https://www.googleapis.com/auth/userinfo.profile",
			},
			Endpoint: google.Endpoint,
		},
	}
}
