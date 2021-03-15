package model

import (
	"be/server/config"
	"be/server/store"
	"fmt"
)

type Model struct {
	store     *store.Store
	baseURL   string
	debugMode bool
}

func New(c *config.Config) (*Model, error) {
	s, err := store.New(c.DBConn)
	if err != nil {
		return nil, fmt.Errorf("connecting to database: %w", err)
	}

	return &Model{
		store:     s,
		baseURL:   c.BaseURL,
		debugMode: c.DebugMode,
	}, nil
}
