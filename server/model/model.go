package model

import (
	"be/server/store"
	"fmt"
)

type Model struct {
	store *store.Store
}

func New(dbConn string) (*Model, error) {
	s, err := store.New(dbConn)
	if err != nil {
		return nil, fmt.Errorf("connecting to database: %w", err)
	}

	if err := s.DatabaseUpdate(); err != nil {
		return nil, fmt.Errorf("init database: %w", err)
	}

	return &Model{store: s}, nil
}
