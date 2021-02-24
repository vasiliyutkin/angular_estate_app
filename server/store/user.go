package store

import "time"

type User struct {
	ID        uint32    `db:"id"`
	Username  string    `db:"username"`
	Password  string    `db:"password"`
	Salt      string    `db:"salt"`
	IsAdmin   bool      `db:"is_admin"`
	CreatedAt time.Time `db:"created_at"`
}

func (s *Store) CreateUser() error {
	return nil
}

func (s *Store) GetUser(id uint32) (*User, error) {
	var u *User
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE id = ?"), id); err != nil {
		return nil, err
	}
	return u, nil
}
