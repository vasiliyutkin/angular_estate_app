package service

import (
	"be/server/model"
	"net/http"
	"strings"
)

type Service struct {
	rest  *REST
	model *model.Model
}

func New(m *model.Model) *Service {
	return &Service{
		rest:  newREST(),
		model: m,
	}
}

func (s *Service) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	r.ParseForm()

	if r.URL.Path != "/" {
		r.URL.Path = strings.TrimRight(r.URL.Path, "/")
	}

	s.rest.corsHandler.ServeHTTP(w, r)
	if r.Method == http.MethodOptions {
		return
	}

	h, ok := s.rest.routes[r.URL.Path]
	if !ok {
		http.FileServer(http.Dir("../../client/dist/fe")).ServeHTTP(w, r)
		return
	}

	h.ServeHTTP(w, r.WithContext(ctx))
}
