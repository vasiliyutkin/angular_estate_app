package scripts

func CreateTableUser() Script {
	return Script{
		Title: "create table user",
		Query: `
			DROP TABLE IF EXISTS users;

			CREATE TABLE IF NOT EXISTS users (
				id serial NOT NULL,
				username character varying(250) NOT NULL,
				user_type character varying(250) NOT NULL DEFAULT 'general',
				password character varying(250) NOT NULL,
				firstname character varying(250) NOT NULL,
				lastname character varying(250) NOT NULL,
				mobile character varying(250) NOT NULL,
				is_admin bool NOT NULL DEFAULT FALSE,
				enabled bool NOT NULL DEFAULT FALSE,
				external_id character varying(250) NOT NULL DEFAULT '',
				created_at timestamp with time zone NOT NULL DEFAULT NOW(),
				CONSTRAINT pk_user_id PRIMARY KEY (id)
			);
		`,
	}
}

func AddAdminUser() Script {
	return Script{
		Title: "add admin user",
		Query: `
			INSERT INTO users
				(username, password, firstname, lastname, mobile, is_admin, enabled)
			VALUES(
				'annalexestate@gmail.com', 
				'$2a$10$L/bfyvz1n94g1EyuwDXQNO2CFSmCBqz8IqklcK/bQbdqHD395KSEu', 
				'Ann', 
				'Nikishina', 
				'', 
				true, 
				true);
		`,
	}
}
