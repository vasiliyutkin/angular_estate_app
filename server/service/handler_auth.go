package service

import (
	"be/server/helpers/jwt"
	"be/server/model"
	"net/http"
)

type authRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type authResponse struct {
	User *model.User `json:"user"`
}

func (s *Service) LoginHandler(w http.ResponseWriter, r *http.Request) {
	req := &authRequest{}
	if err := unmarshalRequest(r.Body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.Login(req.Username, req.Password)
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
	req := &authRequest{}
	if err := unmarshalRequest(r.Body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.SignUp(req.Username, req.Password)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &authResponse{User: user}})
}

func (s *Service) ResetPasswordHandler(w http.ResponseWriter, r *http.Request) {
	req := &authRequest{}
	if err := unmarshalRequest(r.Body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.ResetPassword(req.Username, req.Password)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &authResponse{User: user}})
}
