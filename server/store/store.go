package store

import "github.com/jmoiron/sqlx"

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
