package service

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type ChatList struct {
	Chat []string `json:"chat"`
	Type int      `json:"type"`
}

type Message struct {
	ConnID  string `json:"conn_id"`
	Type    string `json:"type"`
	Message string `json:"message"`
}

func (s *Service) ChatHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("start")

	upgrader := websocket.Upgrader{}
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	for {
		_, message, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		var req Message
		err = json.Unmarshal(message, &req)
		if err != nil {
			log.Println(err)
			return
		}

		switch req.Type {
		case "initialize":
			ss := &Socket{
				ID:   uuid.Must(uuid.NewRandom()).String(),
				Conn: conn,
				Chat: &ChatList{Type: 1},
			}
			s.chatSockets = append(s.chatSockets, ss)

			if err := ss.Write(); err != nil {
				log.Println(err)
				return
			}

		case "sent":
			for i, ss := range s.chatSockets {
				if ss.ID == req.ConnID {
					t := ss.Chat
					t.Chat = append(t.Chat, "sosopa in sosocket")
					s.chatSockets[i].Chat = t

					if err := ss.Write(); err != nil {
						log.Println(err)
						return
					}
				}
			}

		case "close":
			for i, ss := range s.chatSockets {
				if ss.ID == req.ConnID {
					ss.Close()
					s.chatSockets = append(s.chatSockets[:i], s.chatSockets[i+1:]...)
				}
			}
		}
	}
}
