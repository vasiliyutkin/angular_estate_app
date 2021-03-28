package service

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"

	"github.com/gorilla/websocket"
)

type Socket struct {
	ID   string
	Conn *websocket.Conn
	Chat *ChatList
}

func (s *Socket) Close() {
	log.Printf(fmt.Sprintf("conn %s closed", s.ID))
	s.Conn.Close()
}

func (s *Socket) Write() error {
	b, err := json.Marshal(s.Chat)
	if err != nil {
		return err
	}

	writer, err := s.Conn.NextWriter(1)
	if err != nil {
		return err
	}
	if _, err := io.Copy(writer, bytes.NewReader(b)); err != nil {
		return err
	}
	if err := writer.Close(); err != nil {
		return err
	}
	return nil
}
