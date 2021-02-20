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
		routes:      routes(),
		middleware:  nil,
		corsHandler: NewCORS(DefaultCORSOptions()),
	}
}

func (s *REST) AddRoute(path string, h http.Handler) {
	s.routes[path] = h
}
