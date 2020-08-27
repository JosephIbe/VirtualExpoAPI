const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    multipleStatements: true
});

connection.connect(err => {
    if(err) { console.log(`error connecting database:\t ${err}`) }
    console.log(`db connection opened successfully`);
});

module.exports = connection;