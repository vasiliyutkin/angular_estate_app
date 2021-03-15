package scripts

type Script struct {
	Title string
	Query string
}

// ToExecute contains of scripts that should be executed by next deployment.
func ToExecute() []Script {
	return []Script{}
}

// Init is list of scripts needed to be run for restart database.
func Init() []Script {
	return []Script{
		CreateTableUser(),
		AddAdminUser(),
		CreateTableUserLink(),
	}
}
