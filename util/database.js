const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'layananw_syx_snippet',
    password: 'syndr0mx'
});

module.exports = pool.promise();