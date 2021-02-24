package main

import (
	"be/server/config"
	"be/server/model"
	"be/server/service"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

func main() {
	c := config.New()

	m, err := model.New(c.DBConn)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Server is started on port :", c.Port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", c.Port), service.New(m)))
}
