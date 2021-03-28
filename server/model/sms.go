package model

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"strings"
)

func (m *Model) SendSMS(user *User) {
	if m.debugMode {
		return
	}

	accountSid := "ACcbf2bb1d78cc7e4bd01455eb1721ad4f"
	authToken := "23256a990f25c56adf834b7cf25787a1"
	urlStr := fmt.Sprintf("https://api.twilio.com/2010-04-01/Accounts/%s/Messages.json", accountSid)

	msgData := url.Values{}
	msgData.Set("To", "+380994298292")
	msgData.Set("From", "+15105607701")
	msgData.Set("Body", fmt.Sprintf("User %s %s was registered under username %s with phone number %s", user.Firstname, user.Lastname, user.Username, user.Mobile))
	msgDataReader := *strings.NewReader(msgData.Encode())

	client := &http.Client{}
	req, _ := http.NewRequest("POST", urlStr, &msgDataReader)
	req.SetBasicAuth(accountSid, authToken)
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	resp, _ := client.Do(req)
	if resp.StatusCode >= 200 && resp.StatusCode < 300 {
		var data map[string]interface{}
		decoder := json.NewDecoder(resp.Body)
		if err := decoder.Decode(&data); err != nil {
			log.Println("decode data", err)
		}
		return
	}

	log.Println("sms was not sent", resp.Status)
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Println(err)
		return
	}
	log.Println(string(bodyBytes))
}
