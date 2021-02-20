package main

import (
	"be/server/model"
	"be/server/service"
	"be/server/store"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	dbConn := "test:test@(localhost:3306)/test"
	db, err := store.New(dbConn)
	if err != nil {
		log.Printf("connecting to database: %v", err)
	}

	m := model.New(db)

	log.Println("Server is started on port :", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), service.New(m)))
}
