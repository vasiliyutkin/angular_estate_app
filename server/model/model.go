package model

import "be/store"

type Model struct {
	store *store.Store
}

func New(s *store.Store) *Model {
	return &Model{store: s}
}
