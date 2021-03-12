package service

import (
	"be/server/helpers/jwt"
	"be/server/model"
	"net/http"
)

type authResponse struct {
	User *model.User `json:"user"`
}

func (s *Service) LoginHandler(w http.ResponseWriter, r *http.Request) {
	ad := &model.AuthData{}
	if err := unmarshalRequest(r.Body, &ad); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.Login(ad)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	token, err := jwt.New(user.Username)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	type loginResponse struct {
		User        *model.User `json:"user"`
		AccessToken string      `json:"accessToken"`
	}

	s.responseHandler(w, r, &Response{Data: &loginResponse{
		User:        user,
		AccessToken: token,
	}})
}

func (s *Service) SignUpHandler(w http.ResponseWriter, r *http.Request) {
	ad := &model.AuthData{}
	if err := unmarshalRequest(r.Body, &ad); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.SignUp(ad)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &authResponse{User: user}})
}

func (s *Service) ResetPasswordHandler(w http.ResponseWriter, r *http.Request) {
	ad := &model.AuthData{}
	if err := unmarshalRequest(r.Body, &ad); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.ResetPassword(ad)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &authResponse{User: user}})
}

func (s *Service) ConfirmRegistrationHandler(w http.ResponseWriter, r *http.Request) {
	err := s.model.ConfirmRegistration(r.URL.Query().Get("s"))
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{})
}
