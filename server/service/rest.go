package service

import (
	"be/server/service/middleware"
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
		middleware:  []Middleware{middleware.Lang},
		corsHandler: NewCORS(DefaultCORSOptions()),
	}
}

func (s *REST) AddRoute(path string, h http.HandlerFunc) {
	for _, m := range s.middleware {
		h = m(h)
	}

	s.routes[path] = h
}
