package store

import (
	"time"
)

var (
	UserTypeGeneral  = "GENERAL"
	UserTypeGoogle   = "GOOGLE"
	UserTypeFacebook = "FACEBOOK"
	UserTypeVk       = "VK"
)

type User struct {
	ID         uint32    `db:"id"`
	Username   string    `db:"username"`
	UserType   string    `db:"user_type"`
	Password   string    `db:"password"`
	Firstname  string    `db:"firstname"`
	Lastname   string    `db:"lastname"`
	Mobile     string    `db:"mobile"`
	IsAdmin    bool      `db:"is_admin"`
	CreatedAt  time.Time `db:"created_at"`
	Enabled    bool      `db:"enabled"`
	ExternalID string    `db:"external_id"`
}

func (s *Store) UserExits(username string) (bool, error) {
	q := "SELECT EXISTS(SELECT * FROM users WHERE username = ? AND user_type = 'general') AS exists"

	var exists bool
	if err := s.db.QueryRowx(s.db.Rebind(q), username).Scan(&exists); err != nil {
		return false, err
	}
	return exists, nil
}

func (s *Store) CreateUser(u *User) (*User, error) {
	q := `
		INSERT INTO users
			(username, password, firstname, lastname, mobile, is_admin)
		VALUES
			(?, ?, ?, ?, ?, false)
		RETURNING id
	`

	var id uint32
	if err := s.db.QueryRowx(s.db.Rebind(q), u.Username, u.Password, u.Firstname, u.Lastname, u.Mobile).Scan(&id); err != nil {
		return nil, err
	}

	return s.GetUser(id)
}

func (s *Store) CreateExternalUser(u *User) (*User, error) {
	q := `
		INSERT INTO users
			(username, user_type, password, firstname, lastname, mobile, is_admin, enabled, external_id)
		VALUES
			(?, ?, '', ?, ?, '', false, true, ?)
		RETURNING id
	`

	var id uint32
	if err := s.db.QueryRowx(s.db.Rebind(q), u.Username, u.UserType, u.Firstname, u.Lastname, u.ExternalID).Scan(&id); err != nil {
		return nil, err
	}

	return s.GetUser(id)
}

func (s *Store) GetUser(id uint32) (*User, error) {
	var u User
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE id = ?"), id); err != nil {
		return nil, err
	}
	return &u, nil
}

func (s *Store) GetUserByName(username, userType string) (*User, error) {
	var u User
	if err := s.db.Get(&u, s.db.Rebind("SELECT * FROM users WHERE username = ? AND user_type = ?"), username, userType); err != nil {
		return nil, err
	}
	return &u, nil
}

func (s *Store) UpdatePassword(id uint32, password string) error {
	q := `
		UPDATE users
		SET password = ?
		WHERE id = ?
	`

	_, err := s.db.Exec(s.db.Rebind(q), password, id)
	return err
}

func (s *Store) EnableUser(id uint32) (*User, error) {
	q := `
		UPDATE users
		SET enabled = true
		WHERE id = ?
	`

	_, err := s.db.Exec(s.db.Rebind(q), id)
	if err != nil {
		return nil, err
	}
	return s.GetUser(id)
}

func (s *Store) GetUsers() ([]*User, error) {
	var u []*User
	if err := s.db.Select(&u, s.db.Rebind("SELECT * FROM users")); err != nil {
		return nil, err
	}
	return u, nil
}
