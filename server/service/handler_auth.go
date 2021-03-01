package service

import (
	"be/server/helpers/jwt"
	"be/server/model"
	"net/http"
)

type UserDataRequest struct {
	UserData userData `json:"userData"`
}

type userData struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func (s *Service) SignInHandler(w http.ResponseWriter, r *http.Request) {
	// TODO unify type with SignUpHandler
	req := &userData{}
	if err := unmarshalRequest(r.Body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.SignIn(req.Username, req.Password)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	token, err := jwt.New(user.Username)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	type signInResponse struct {
		User        *model.User `json:"user"`
		AccessToken string      `json:"accessToken"`
	}

	s.responseHandler(w, r, &Response{Data: &signInResponse{
		User:        user,
		AccessToken: token,
	}})
}

func (s *Service) SignUpHandler(w http.ResponseWriter, r *http.Request) {
	req := &UserDataRequest{}
	if err := unmarshalRequest(r.Body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.SignUp(req.UserData.Username, req.UserData.Password)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	type signUpResponse struct {
		User *model.User `json:"user"`
	}

	s.responseHandler(w, r, &Response{Data: &signUpResponse{User: user}})
}

func (s *Service) ResetPasswordHandler(w http.ResponseWriter, r *http.Request) {
	req := &userData{}
	if err := unmarshalRequest(r.Body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	// TODO ¯\_(ツ)_/¯

	s.responseHandler(w, r, &Response{})
}
