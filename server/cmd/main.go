package main

import (
	"be/model"
	"be/service"
	"be/store"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	dbConn := "test:test@(localhost:3306)/test"
	db, err := store.New(dbConn)
	if err != nil {
		log.Printf("connecting to database: %v", err)
	}

	m := model.New(db)

	//fs := http.FileServer(http.Dir("../../client/dist"))
	//http.Handle("/", http.StripPrefix("/", fs))
	//go func() {log.Fatal(http.ListenAndServe(":3300", http.FileServer(http.Dir("../../client/dist"))))}()

	log.Println("Server is started on port :3000")
	log.Fatal(http.ListenAndServe(":3000", service.New(m)))
}
