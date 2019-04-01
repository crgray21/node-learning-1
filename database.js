const mysql = require('mysql2');

const connection_pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-course-db',
  password: ''
});

module.exports = connection_pool.promise();