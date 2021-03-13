package store

import (
	"github.com/google/uuid"
)

type UserLink struct {
	ID     uint32 `db:"id"`
	UserID uint32 `db:"user_id"`
	Link   string `db:"link"`
}

func (s *Store) GenerateUserLink(u *User) (string, error) {
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

	if _, err := s.db.Exec(s.db.Rebind(q), u.ID, link.String()); err != nil {
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
