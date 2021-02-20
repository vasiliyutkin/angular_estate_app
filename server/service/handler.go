package service

import (
	"net/http"
)

func YoHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("YO ;)"))
	}
}
