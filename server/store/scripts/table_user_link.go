package scripts

func CreateTableUserLink() Script {
	return Script{
		Title: "create table user_link",
		Query: `
			CREATE TABLE IF NOT EXISTS user_link (
				id serial NOT NULL,
				user_id int NOT NULL,
				link character varying(250) NOT NULL,
				expiration timestamp with time zone,
				CONSTRAINT pk_user_link_id PRIMARY KEY (id)
			);

			CREATE OR REPLACE function user_link_expire() 
			RETURNS trigger AS $$
				BEGIN
					DELETE FROM user_link 
					WHERE expiration IS NOT NULL 
						AND expiration <= NOW();
					RETURN NEW;
				END;
			$$ language plpgsql;

			CREATE trigger user_link_expire 
			BEFORE insert OR update ON user_link
			FOR EACH statement execute procedure user_link_expire();
		`,
	}
}
