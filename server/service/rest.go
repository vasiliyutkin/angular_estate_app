package service

import (
	"net/http"
)

type Middleware func(http.HandlerFunc) http.HandlerFunc

type REST struct {
	routes      map[string]http.Handler
	middleware  []Middleware
	corsHandler http.Handler
}

func newREST() *REST {
	return &REST{
		routes:      make(map[string]http.Handler),
		middleware:  nil,
		corsHandler: NewCORS(DefaultCORSOptions()),
	}
}

func (s *REST) AddRoute(path string, h http.HandlerFunc) {
	s.routes[path] = h
}
