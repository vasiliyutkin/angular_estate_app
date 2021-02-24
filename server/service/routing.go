package service

import "net/http"

func routes() map[string]http.Handler {
	return map[string]http.Handler{
		"/api/auth/signin": YoHandler(),
	}
}
