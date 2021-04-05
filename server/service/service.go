package service

import (
	"be/server/config"
	"be/server/model"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"golang.org/x/oauth2"
)

type Service struct {
	rest            *REST
	model           *model.Model
	oauthConfGoogle *oauth2.Config
	chatSockets     []*Socket
}

func New(c *config.Config) (*Service, error) {
	m, err := model.New(c)
	if err != nil {
		return nil, err
	}

	s := &Service{
		rest:            newREST(),
		model:           m,
		oauthConfGoogle: c.GoogleOauth,
		chatSockets:     []*Socket{},
	}

	s.rest.AddRoute(http.MethodPost, "/api/auth/login", s.LoginHandler, false)
	s.rest.AddRoute(http.MethodPost, "/api/auth/signup", s.SignUpHandler, false)
	s.rest.AddRoute(http.MethodGet, "/api/auth/confirm", s.ConfirmRegistrationHandler, false)
	s.rest.AddRoute(http.MethodGet, "/api/auth/forgot-password", s.ForgotPasswordHandler, false)
	s.rest.AddRoute(http.MethodPost, "/api/auth/forgot-password", s.ForgotPasswordHandler, false)
	s.rest.AddRoute(http.MethodPost, "/api/auth/reset-password", s.ResetPasswordHandler, false)
	s.rest.AddRoute(http.MethodGet, "/api/auth/google-login", s.GoogleLoginHandler, false)
	s.rest.AddRoute(http.MethodGet, "/api/auth/google-callback", s.GoogleCallbackHandler, false)

	s.rest.AddRoute(http.MethodGet, "/api/users", s.UsersHandler, false)
	s.rest.AddRoute(http.MethodGet, "/api/user", s.UserHandler, false)

	s.rest.AddRoute(http.MethodGet, "/api/chat", s.ChatHandler, false)

	return s, nil
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

	h := s.rest.GetHandler(r.Method, r.URL.Path)
	if h == nil {
		log.Printf("not implemented handler for %s %q", r.Method, r.URL.Path)
		return
	}

	h.ServeHTTP(w, r.WithContext(ctx))
}
