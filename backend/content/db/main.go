package db

import (
	"database/sql"
	"fmt"
)

const (
	host     = "htpp://localhost"
	port     = 5432
	user     = "root"
	password = "root"
	dbname   = "wiki"
)

func main() {
}

func CreateConnection() *sql.DB {

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	Database, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	dbErr := Database.Ping()
	if dbErr != nil {
		fmt.Print("connecton is successful")
	}
	return Database
}

// func CreateContent(content models.Content) (response, error string) {

// 	err := Database.QueryRow(insertStr, content.Title)
// 	insertStr := `insert into "Wiki"("Title") values($1)`
// 	if err != nil {
// 		return err
// 	}

// 	return "content is created"
// }
