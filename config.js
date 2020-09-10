'use strict'

var mysql = require('mysql');

module.exports = {
    name: 'jscrud-rest-api',
    hostname : 'http://localhost',
    version: '1.0.0',
    port: process.env.PORT || 80,
    db: {
        get : mysql.createConnection({
			host     : process.env.MYSQL_HOST,
			user     : process.env.MYSQL_USER,
			password : process.env.MYSQL_PASSWORD,
			database : process.env.MYSQL_DATABASE
		})
    }
}
