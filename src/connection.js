const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: process.env.RDS_ENDPOINT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

module.exports = { connection }