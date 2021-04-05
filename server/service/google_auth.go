package service

import (
	"context"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"strings"

	"golang.org/x/oauth2/google"
)

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

	resp, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + url.QueryEscape(token.AccessToken))
	if err != nil {
		log.Printf("Get: %s", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	defer resp.Body.Close()

	response, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Printf("readAll: %s", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	log.Printf("parseResponseBody: %s", string(response))
	w.Write(response)
}
