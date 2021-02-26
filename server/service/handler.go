package service

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

func (s *Service) errorHandler(w http.ResponseWriter, r *http.Request, err error) {
	http.Error(w, err.Error(), http.StatusInternalServerError)
}

type SignInHandlerRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func (s *Service) SignInHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}
	defer r.Body.Close()

	req := SignInHandlerRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.SignIn(req.Username, req.Password)
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

func (s *Service) SignUpHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}
	defer r.Body.Close()

	req := SignInHandlerRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.SignUp(req.Username, req.Password)
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
