package store

import (
	"log"
	"time"
)

type User struct {
	ID        uint32    `db:"id"`
	Username  string    `db:"username"`
	Password  string    `db:"password"`
	IsAdmin   bool      `db:"is_admin"`
	CreatedAt time.Time `db:"created_at"`
}

func (s *Store) CreateUser(username, password string) (*User, error) {
	q := `
		INSERT INTO users
		(username, password, is_admin)
		VALUES(?, ?, false)
		RETURNING id
	`

	var id uint32
	if err := s.db.QueryRowx(s.db.Rebind(q), username, password).Scan(&id); err != nil {
		return nil, err
	}
	log.Println(id)

	return s.GetUser(id)
}

func (s *Store) GetUser(id uint32) (*User, error) {
	var u User
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE id = ?"), id); err != nil {
		return nil, err
	}
	return &u, nil
}

func (s *Store) GetUserByName(username string) (*User, error) {
	var u User
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE username = ?"), username); err != nil {
		return nil, err
	}
	return &u, nil
}
