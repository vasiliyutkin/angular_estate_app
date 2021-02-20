package main

import (
	"io"
	"log"
	"net/http"
	"os"
)

type Handler struct{}

func (h Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	h.Index(w, r)
}

func (h Handler) Index(w http.ResponseWriter, r *http.Request) {
	fd, err := os.Open("../../client/dist/index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer fd.Close()
	io.Copy(w, fd)
}

func main() {
	fs := http.FileServer(http.Dir("../../client/dist"))
	http.Handle("/", http.StripPrefix("/", fs))

	log.Println("Starting.......")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
