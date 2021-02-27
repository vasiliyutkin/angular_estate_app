package service

import (
	"be/server/helpers/jwt"
	"be/server/model"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
)

type Response struct {
	OK   bool        `json:"ok"`
	Data interface{} `json:"data"`
}

func (s *Service) errorHandler(w http.ResponseWriter, r *http.Request, err error) {
	b, err := json.Marshal(struct {
		OK    bool   `json:"ok"`
		Error string `json:"error"`
	}{
		OK:    false,
		Error: err.Error(),
	})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusInternalServerError)
	w.Write(b)
}

func unmarshalRequest(b io.ReadCloser, v interface{}) error {
	body, err := ioutil.ReadAll(b)
	if err != nil {
		return err
	}
	defer b.Close()

	if err := json.Unmarshal(body, &v); err != nil {
		return err
	}
	return nil
}

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

	b, err := json.Marshal(resp)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	w.Header().Set("Content-type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	w.Write(b)
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

	b, err := json.Marshal(user)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	w.Header().Set("Content-type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	w.Write(b)
}

func (s *Service) ResetPasswordHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("YO ;)"))
}
