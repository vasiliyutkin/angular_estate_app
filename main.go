package main

import (
	"be/server/config"
	"be/server/model"
	"be/server/service"
	_ "be/server/translations"
	"flag"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

func main() {
	soloMode := flag.Bool("solo", false, "debug mode using local connections")
	flag.Parse()

	c := config.New()
	if *soloMode {
		c = config.SoloConfig()
		log.Println("Running in solo mode ;)")
	}

	m, err := model.New(c)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Server is started on port:", c.Port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", c.Port), service.New(m)))
}
