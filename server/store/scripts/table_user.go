package scripts

func CreateTableUser() Script {
	return Script{
		Title: "create table user",
		Query: `
		CREATE TABLE IF NOT EXISTS users (
			id serial NOT NULL,
			username character varying(250) NOT NULL,
			password character varying(250) NOT NULL,
			salt character varying(250) NOT NULL,
			is_admin bool NOT NULL DEFAULT FALSE,
			created_at timestamp with time zone NOT NULL DEFAULT NOW(),
			CONSTRAINT pk_user_id PRIMARY KEY (id)
		);
	`,
	}
}
