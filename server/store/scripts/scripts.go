package scripts

type Script struct {
	Title string
	Query string
}

// Executed contains of scripts that were executed on running database,
// can be used by creating of it from scratch.
func Executed() []Script {
	return []Script{}
}

// ToExecute contains of scripts that should be executed by next deployment.
func ToExecute() []Script {
	return []Script{
		{
			Title: "add column enabled",
			Query: `
				ALTER TABLE users ADD COLUMN IF NOT EXISTS enabled bool NOT NULL DEFAULT FALSE;
				UPDATE users SET enabled = true WHERE username = 'annalexestate@gmail.com';
			`,
		},
	}
}

// Init is list of scripts needed to be run for restart database.
func Init() []Script {
	return []Script{
		DropTableUser(),
		CreateTableUser(),
		AddAdminUser(),
	}
}
