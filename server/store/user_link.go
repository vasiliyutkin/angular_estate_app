package store

import (
	"database/sql"
	"errors"
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

type UserLink struct {
	ID         uint32      `db:"id"`
	UserID     uint32      `db:"user_id"`
	Link       string      `db:"link"`
	Expiration pq.NullTime `db:"expiration"`
}

func (s *Store) GenerateUserLink(u *User) (string, error) {
	q := `
		INSERT INTO user_link
			(user_id, link, expiration)
		VALUES
			(?, ?, ?)
	`

	link, err := uuid.NewRandom()
	if err != nil {
		return "", err
	}

	expTime := time.Now().Add(time.Minute * 30)
	if _, err := s.db.Exec(s.db.Rebind(q), u.ID, link.String(), pq.NullTime{Time: expTime, Valid: !expTime.IsZero()}); err != nil {
		return "", err
	}

	return link.String(), nil
}

func (s *Store) EvaluateUserLink(link string) (uint32, error) {
	qGet := `
		SELECT * FROM user_link WHERE link = ?
	`

	var ul UserLink
	if err := s.db.Get(&ul, s.db.Rebind(qGet), link); err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return 0, nil
		}
		return 0, err
	}

	qDelete := `
		DELETE FROM user_link WHERE id = ?
	`

	if _, err := s.db.Exec(s.db.Rebind(qDelete), ul.ID); err != nil {
		return 0, err
	}

	if ul.Expiration.Valid && ul.Expiration.Time.Before(time.Now()) {
		return 0, nil
	}
	return ul.UserID, nil
}
