const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mockUsers',
    user: 'root',
    password: 'admin@123'
})

module.exports = connection;