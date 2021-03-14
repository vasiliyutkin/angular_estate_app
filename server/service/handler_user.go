package service

import (
	"be/server/model"
	"net/http"
	"strconv"
)

type usersResponse struct {
	Users []*model.User `json:"users"`
}

type userResponse struct {
	User *model.User `json:"user"`
}

func (s *Service) UsersHandler(w http.ResponseWriter, r *http.Request) {
	users, err := s.model.GetUsers()
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &usersResponse{Users: users}})
}

func (s *Service) UserHandler(w http.ResponseWriter, r *http.Request) {
	userId, err := strconv.Atoi(r.URL.Query().Get("userId"))
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	user, err := s.model.GetUser(uint32(userId))
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &userResponse{User: user}})
}
