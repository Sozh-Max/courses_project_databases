# courses_project_databases

migrations:

{
"dev": {
"driver": "pg",
"user": "postgres",
"password": "password",
"host": "localhost",
"database": "migrationdb"
}
}

npm install -g db-migrate

npm install -g db-migrate-pg

db-migrate create initialize --sql-file
db-migrate create fill-default --sql-file


# run migrates
npm install db-migrate up initialize

npm install db-migrate up fill-default

db-migrate up:all
