module.exports = {
databasename: 'dbname',
type: 'postgres',
username: 'tulasi'
 myPostgres: {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
  }
}
//don't store this file in repository, it's unsecure
