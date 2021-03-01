// +build manual

package main

import (
	"flag"
	"log"

	"golang.org/x/crypto/bcrypt"
)

func main() {
	password := flag.String("p", "", "password")
	flag.Parse()

	if *password == "" {
		return
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(*password), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal(err)
	}

	log.Println(string(hashed))
}
