package service

import (
	"be/server/model"
	"be/server/store"
	"context"
	"log"
	"net/http"
	"net/url"
	"strings"

	"golang.org/x/oauth2/google"
)

/*
  "id": "115524903388752453854",
  "email": "andrii.soloviov@gmail.com",
  "verified_email": true,
  "name": "Andrii Soloviov",
  "given_name": "Andrii",
  "family_name": "Soloviov",
  "picture": "https://lh3.googleusercontent.com/a-/AOh14GgiCchVLwWdqnaUYSqw9S8DNDqu1E6doKLqpp-p=s96-c",
  "locale": "de"
*/

type authGoogleResponse struct {
	ID        string `json:"id"`
	Email     string `json:"email"`
	Firstname string `json:"given_name"`
	Lastname  string `json:"family_name"`
	Picture   string `json:"picture"`
}

func (s *Service) GoogleLoginHandler(w http.ResponseWriter, r *http.Request) {
	authURL, err := url.Parse(google.Endpoint.AuthURL)
	if err != nil {
		log.Printf("parse %v: %s", google.Endpoint.AuthURL, err)
	}
	log.Println(authURL.String())

	parameters := url.Values{}
	parameters.Add("client_id", s.oauthConfGoogle.ClientID)
	parameters.Add("scope", strings.Join(s.oauthConfGoogle.Scopes, " "))
	parameters.Add("redirect_uri", s.oauthConfGoogle.RedirectURL)
	parameters.Add("response_type", "code")
	parameters.Add("state", "")
	authURL.RawQuery = parameters.Encode()

	log.Println(authURL.String())
	http.Redirect(w, r, authURL.String(), http.StatusTemporaryRedirect)
}

func (s *Service) GoogleCallbackHandler(w http.ResponseWriter, r *http.Request) {
	state := r.FormValue("state")
	log.Println(state)

	code := r.FormValue("code")
	if code == "" {
		log.Printf("code is empty :/ -> %s", r.FormValue("error_reason"))
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	token, err := s.oauthConfGoogle.Exchange(context.Background(), code)
	if err != nil {
		log.Printf("oauthConfGl.Exchange(): %s", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	log.Printf("AccessToken %v", token.AccessToken)
	log.Printf("Expiration Time %v", token.Expiry)
	log.Printf("RefreshToken %v", token.RefreshToken)

	s.googleLogin(w, r, token.AccessToken)
}

func (s *Service) googleLogin(w http.ResponseWriter, r *http.Request, token string) {
	resp, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + url.QueryEscape(token))
	if err != nil {
		log.Printf("Get: %s", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	defer resp.Body.Close()

	agr := &authGoogleResponse{}
	if err := unmarshalRequest(resp.Body, &agr); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.LoginExternal(&model.User{
		Username:   agr.Email,
		UserType:   store.UserTypeGoogle,
		Firstname:  agr.Firstname,
		Lastname:   agr.Lastname,
		ExternalID: agr.ID,
	})
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.login(w, r, user)
}
