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
		CreateTableUser(),
	}
}
