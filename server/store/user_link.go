package store

import (
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

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

	expTime := time.Now().Add(time.Minute)
	if _, err := s.db.Exec(s.db.Rebind(q), u.ID, link.String(), pq.NullTime{Time: expTime, Valid: !expTime.IsZero()}); err != nil {
		return "", err
	}

	return link.String(), nil
}
