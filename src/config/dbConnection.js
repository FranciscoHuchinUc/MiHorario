const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Agosto2001',
    database: 'usuarios'
  });
}