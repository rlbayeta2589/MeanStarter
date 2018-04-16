var mysql = require('mysql');

module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'username',
	password: 'password',
	database: 'DATABASE_NAME'
});
