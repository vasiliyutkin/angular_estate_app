package main

import (
	"be/server/config"
	"be/server/helpers/database/scripts"
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func main() {
	c := config.New()

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

	var ss = scripts.ToExecute()
	for _, script := range ss {
		if _, err := db.Exec(db.Rebind(script.Query)); err != nil {
			log.Fatalf("execute %q: %v", script.Title, err)
		}
		log.Printf("executed %q", script.Title)
	}

}
