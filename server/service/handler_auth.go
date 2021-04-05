package service

import (
	"be/server/helpers/jwt"
	"be/server/model"
	"fmt"
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

	s.login(w, r, user)
}

func (s *Service) login(w http.ResponseWriter, r *http.Request, user *model.User) {
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

func (s *Service) ConfirmRegistrationHandler(w http.ResponseWriter, r *http.Request) {
	err := s.model.ConfirmRegistration(r.URL.Query().Get("s"))
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	//s.responseHandler(w, r, &Response{})
	http.Redirect(w, r, "/registration-successful", http.StatusSeeOther)
}

func (s *Service) ForgotPasswordHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		userID, err := s.model.ConfirmForgotPassword(r.URL.Query().Get("s"))
		if err != nil {
			s.errorHandler(w, r, err)
			return
		}

		http.Redirect(w, r, fmt.Sprintf("/forgot/%d", userID), http.StatusSeeOther)
		return
	}

	ad := &model.AuthData{}
	if err := unmarshalRequest(r.Body, &ad); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	err := s.model.ForgotPassword(ad)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{})
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
