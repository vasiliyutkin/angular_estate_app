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
		OK          bool        `json:"ok"`
		UserData    *model.User `json:"userData"`
		AccessToken string      `json:"accessToken"`
	}

	resp := &signInResponse{
		OK:          true,
		UserData:    user,
		AccessToken: token,
	}

	s.responseHandler(w, r, &Response{Data: resp})
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

	s.responseHandler(w, r, &Response{Data: user})
}

func (s *Service) ResetPasswordHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("YO ;)"))
}
