package service

import (
	"be/server/helpers/lang"
	"be/server/model"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"

	"golang.org/x/text/message"
)

type Response struct {
	Data  interface{}  `json:"data"`
	Error *model.Error `json:"error"`
}

func unmarshalRequest(b io.ReadCloser, v interface{}) error {
	body, err := ioutil.ReadAll(b)
	if err != nil {
		return err
	}
	defer b.Close()

	if err := json.Unmarshal(body, &v); err != nil {
		return err
	}
	return nil
}

func (s *Service) responseHandler(w http.ResponseWriter, r *http.Request, resp *Response) {
	b, err := json.Marshal(resp)
	if err != nil {
		s.errorHandler(w, r, err)
		return
	}

	w.Header().Set("Content-type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	w.Write(b)
}

func (s *Service) errorHandler(w http.ResponseWriter, r *http.Request, err error) {
	l := lang.GetLanguage(r.Context())
	pr := message.NewPrinter(l)

	w.Header().Set("Content-type", "application/json; charset=utf-8")

	es := struct {
		Error string `json:"error"`
	}{
		Error: pr.Sprintf(err.Error()),
	}
	w.WriteHeader(http.StatusInternalServerError)
	json.NewEncoder(w).Encode(es)

	/*
		var e *model.Error
		log.Println(err, errors.As(err, &e))

		if errors.As(err, &e) {
			log.Println("eeee")

			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(&Response{Error: e})
			return
		}

		http.Error(w, err.Error(), http.StatusInternalServerError)
	*/
}
