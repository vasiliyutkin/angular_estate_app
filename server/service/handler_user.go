package service

import (
	"be/server/model"
	"net/http"
)

type usersResponse struct {
	Users []*model.User `json:"users"`
}

func (s *Service) UsersHandler(w http.ResponseWriter, r *http.Request) {
	users, err := s.model.GetUsers()
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	s.responseHandler(w, r, &Response{Data: &usersResponse{Users: users}})
}
