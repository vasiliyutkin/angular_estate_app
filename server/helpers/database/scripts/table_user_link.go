package scripts

func CreateTableUserLink() Script {
	return Script{
		Title: "create table user_link",
		Query: `
			DROP TABLE IF EXISTS user_link;

			DROP trigger IF EXISTS user_link_expire ON user_link;

			CREATE TABLE IF NOT EXISTS user_link (
				id serial NOT NULL,
				user_id int NOT NULL,
				link character varying(250) NOT NULL,
				CONSTRAINT pk_user_link_id PRIMARY KEY (id)
			);
		`,
	}
}
