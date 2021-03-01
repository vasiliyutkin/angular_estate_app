package store

import "time"

type user struct {
	ID        uint32    `db:"id"`
	Username  string    `db:"username"`
	Password  string    `db:"password"`
	Firstname string    `db:"firstname"`
	Lastname  string    `db:"lastname"`
	Mobile    string    `db:"mobile"`
	IsAdmin   bool      `db:"is_admin"`
	CreatedAt time.Time `db:"created_at"`
}

func (s *Store) CreateUser(username, password string) (*user, error) {
	q := `
		INSERT INTO users
			(username, password, firstname, lastname, mobile, is_admin)
		VALUES
			(?, ?, ?, ?, ?, false)
		RETURNING id
	`

	var id uint32
	if err := s.db.QueryRowx(s.db.Rebind(q), username, password, "", "", "").Scan(&id); err != nil {
		return nil, err
	}

	return s.GetUser(id)
}

func (s *Store) GetUser(id uint32) (*user, error) {
	var u user
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE id = ?"), id); err != nil {
		return nil, err
	}
	return &u, nil
}

func (s *Store) GetUserByName(username string) (*user, error) {
	var u user
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE username = ?"), username); err != nil {
		return nil, err
	}
	return &u, nil
}
