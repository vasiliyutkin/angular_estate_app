package main

import (
	"be/service"
	"log"
	"net/http"
)

func main() {
	//fs := http.FileServer(http.Dir("../../client/dist"))
	//http.Handle("/", http.StripPrefix("/", fs))
	//go func() {log.Fatal(http.ListenAndServe(":3300", http.FileServer(http.Dir("../../client/dist"))))}()

	s := service.NewREST()
	s.AddRoute("/auth/signin", service.YoHandler())

	log.Println("Server is started on port :3000")
	log.Fatal(http.ListenAndServe(":3000", s))
}
