package service

import (
	"be/server/model"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

type Service struct {
	rest  *REST
	model *model.Model
}

func New(m *model.Model) *Service {
	s := &Service{
		rest:  newREST(),
		model: m,
	}

	s.rest.AddRoute("/api/auth/login", s.LoginHandler)
	s.rest.AddRoute("/api/auth/signup", s.SignUpHandler)
	s.rest.AddRoute("/api/auth/confirm", s.ConfirmRegistrationHandler)
	s.rest.AddRoute("/api/auth/forgot-password", s.ForgotPasswordHandler)
	s.rest.AddRoute("/api/auth/reset-password", s.ResetPasswordHandler)

	s.rest.AddRoute("/api/users", s.UsersHandler)
	s.rest.AddRoute("/api/user", s.UserHandler)

	return s
}

func (s *Service) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	log.Println(r.Method, r.URL.Path)

	if !strings.HasPrefix(r.URL.Path, "/api/") {
		if strings.Contains(r.URL.Path, ".") {
			http.FileServer(http.Dir("client/dist/fe")).ServeHTTP(w, r)
			return
		}

		fd, err := os.Open("client/dist/fe/index.html")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer fd.Close()
		io.Copy(w, fd)
		return
	}

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
		log.Printf("not implemented handler for %q", r.URL.Path)
		return
	}

	h.ServeHTTP(w, r.WithContext(ctx))
}
