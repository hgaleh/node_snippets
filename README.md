install mysql server and mongodb before you continue
run the following command to enable connection to mysql


run the following command to create user in mongodb:
use admin
db.createUser(
  {
    user: "hojjat",
    pwd: "Ho6230234",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)