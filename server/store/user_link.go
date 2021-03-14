package store

import (
	"github.com/google/uuid"
)

type UserLink struct {
	ID     uint32 `db:"id"`
	UserID uint32 `db:"user_id"`
	Link   string `db:"link"`
}

func (s *Store) LinkExists(userID uint32) (bool, error) {
	q := "SELECT EXISTS(SELECT * FROM user_link WHERE user_id = ?) AS exists"

	var exists bool
	if err := s.db.QueryRowx(s.db.Rebind(q), userID).Scan(&exists); err != nil {
		return false, err
	}
	return exists, nil
}

func (s *Store) GenerateUserLink(userID uint32) (string, error) {
	q := `
		INSERT INTO user_link
			(user_id, link)
		VALUES
			(?, ?)
	`

	link, err := uuid.NewRandom()
	if err != nil {
		return "", err
	}

	if _, err := s.db.Exec(s.db.Rebind(q), userID, link.String()); err != nil {
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
		return 0, err
	}

	qDelete := `
		DELETE FROM user_link WHERE id = ?
	`

	if _, err := s.db.Exec(s.db.Rebind(qDelete), ul.ID); err != nil {
		return 0, err
	}

	return ul.UserID, nil
}
