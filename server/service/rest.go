package service

import (
	"log"
	"net/http"
	"strings"
)

type Middleware func(http.HandlerFunc) http.HandlerFunc

type REST struct {
	routes      map[string]http.Handler
	middleware  []Middleware
	corsHandler http.Handler
}

func NewREST() *REST {
	return &REST{
		routes:      make(map[string]http.Handler),
		middleware:  nil,
		corsHandler: NewCORS(DefaultCORSOptions()),
	}
}

func (s *REST) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	r.ParseForm()

	if r.URL.Path != "/" {
		r.URL.Path = strings.TrimRight(r.URL.Path, "/")
	}

	s.corsHandler.ServeHTTP(w, r)
	if r.Method == http.MethodOptions {
		return
	}

	h, ok := s.routes[r.URL.Path]
	if !ok {
		log.Printf("no handler for %q found", r.URL.Path)
		return
	}

	h.ServeHTTP(w, r.WithContext(ctx))
}

func (s *REST) AddRoute(path string, h http.Handler) {
	s.routes[path] = h
}
