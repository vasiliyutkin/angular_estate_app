package main

import (
	"be/server/model"
	"be/server/service"
	"be/server/store"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

const _db = "postgres://qbqdkfvllgrxdu:20ec0fd6f4099c8803318572a0f2979cbc50af842a4b6ee80f303e25cb987155@ec2-52-204-141-94.compute-1.amazonaws.com:5432/d80j29f4aee9uc"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	dbConn := os.Getenv("DATABASE_URL")
	if dbConn == "" {
		dbConn = _db
	}
	db, err := store.New(dbConn)
	if err != nil {
		log.Printf("connecting to database: %v", err)
	} else {
		if err := db.Init(); err != nil {
			log.Printf("init database: %v", err)
		}
	}

	m := model.New(db)

	log.Println("Server is started on port :", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), service.New(m)))
}
