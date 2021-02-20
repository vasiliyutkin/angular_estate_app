package service

import (
	"be/model"
	"log"
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
		log.Printf("no handler for %q found", r.URL.Path)
		return
	}

	h.ServeHTTP(w, r.WithContext(ctx))
}