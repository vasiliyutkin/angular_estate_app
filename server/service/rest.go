package service

import (
	"be/server/service/middleware"
	"net/http"
)

type Middleware func(http.HandlerFunc) http.HandlerFunc

type REST struct {
	routes      []Route
	corsHandler http.Handler
}

type Route struct {
	Method  string
	Path    string
	Handler http.Handler
}

func newREST() *REST {
	return &REST{
		routes:      []Route{},
		corsHandler: NewCORS(DefaultCORSOptions()),
	}
}

func (s *REST) AddRoute(method, path string, h http.HandlerFunc, protected bool) {
	if protected {
		h = middleware.JWT(h)
	}
	h = middleware.Lang(h)

	s.routes = append(s.routes, Route{
		Method:  method,
		Path:    path,
		Handler: h,
	})
}

func (s *REST) GetHandler(method, path string) http.Handler {
	for _, r := range s.routes {
		if r.Path == path && r.Method == method {
			return r.Handler
		}
	}
	return nil
}
