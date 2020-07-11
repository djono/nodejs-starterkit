const mysql = require('mysql2');

const config={
    host: 'localhost',
    user: 'root',
    password: 'syndr0mx',
    database: 'syx_starterkit'
}

const pool = mysql.createPool(config);
// pool.connect((err)=>{
//     if(err) throw err;
// });

module.exports = pool;
//module.exports.config=config;