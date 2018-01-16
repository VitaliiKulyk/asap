module.exports = {
	port: 8000,
	dbConnectionString: 'your_connection',
	saltRounds: 2,
	jwtSecret: 'yo-its-a-secret',
	tokenExpireTime: '6h'
}
//don't store this file in repository, it's unsecure
