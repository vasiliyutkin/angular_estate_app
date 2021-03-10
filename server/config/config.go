package config

import "os"

const (
	defaultPort = "1312"
	dbConn = "host=localhost port=5432 user=as password=postgres dbname=solo sslmode=disable"
	//dbConn      = "postgres://qbqdkfvllgrxdu:20ec0fd6f4099c8803318572a0f2979cbc50af842a4b6ee80f303e25cb987155@ec2-52-204-141-94.compute-1.amazonaws.com:5432/d80j29f4aee9uc"
)

type Config struct {
	Port   string
	DBConn string
}

func New() *Config {
	c := &Config{}

	c.Port = os.Getenv("PORT")
	if c.Port == "" {
		c.Port = defaultPort
	}

	c.DBConn = os.Getenv("DATABASE_URL")
	if c.DBConn == "" {
		c.DBConn = dbConn
	}

	return c
}
