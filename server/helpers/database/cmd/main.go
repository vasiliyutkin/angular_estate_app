package main

import (
	"be/server/config"
	"be/server/helpers/database/scripts"
	"flag"
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func main() {
	resetDb := flag.Bool("reset", false, "reset database")
	soloMode := flag.Bool("solo", false, "debug mode using local connections")
	flag.Parse()

	c := config.New()
	if *soloMode {
		c = config.SoloConfig()
	}

	var ss = scripts.ToExecute()
	if *resetDb {
		ss = scripts.Init()
	}

	db, err := sqlx.Open("postgres", c.DBConn)
	if err != nil {
		log.Fatalf("connect to database: %v", err)
	}
	defer func() {
		err := db.Close()
		if err != nil {
			log.Fatalf("close database connection: %v", err)
		}
	}()

	for _, script := range ss {
		if _, err := db.Exec(db.Rebind(script.Query)); err != nil {
			log.Fatalf("execute %q: %v", script.Title, err)
		}
		log.Printf("executed %q", script.Title)
	}

}
