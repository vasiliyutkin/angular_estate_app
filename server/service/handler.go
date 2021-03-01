package service

import (
	"be/server/model"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
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

func (s *Service) errorHandler(w http.ResponseWriter, r *http.Request, e error) {
	b, err := json.Marshal(struct {
		Error string `json:"error"`
	}{
		Error: e.Error(),
	})
	if err != nil {
		http.Error(w, e.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusInternalServerError)
	w.Write(b)
}
