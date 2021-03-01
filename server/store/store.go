package store

import (
	"be/server/store/scripts"
	"fmt"
	"log"

	"github.com/jmoiron/sqlx"
)

type Store struct {
	db *sqlx.DB
}

func New(conn string) (*Store, error) {
	db, err := sqlx.Open("postgres", conn)
	if err != nil {
		return nil, err
	}
	return &Store{db: db}, nil
}

func (s *Store) Close() error {
	return s.db.Close()
}

// DatabaseUpdate executes scripts to update database.
func (s *Store) DatabaseUpdate() error {
	for _, script := range scripts.ToExecute() {
		if _, err := s.db.Exec(s.db.Rebind(script.Query)); err != nil {
			return fmt.Errorf("execute %q: %w", script.Title, err)
		}
		log.Printf("executed %q", script.Title)
	}

	var names []string
	if err := s.db.Select(&names, "SELECT username FROM users"); err != nil {
		return fmt.Errorf(";( %w", err)
	}
	log.Println("--->", names)

	return nil
}
