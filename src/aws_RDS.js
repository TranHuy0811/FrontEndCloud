// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
  host: 'group5-database.cthmxbos1x1n.us-east-1.rds.amazonaws.com',
  user: 'main',
  database: 'NamHuongDatabase',
  password: 'group5-password'
});

// connect
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// simple query
const db = connection.query(
  "SELECT * FROM products",
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
)

// To create an export, the file needs `connection`, `authentication`, `database`, `storage`
// For the Auth, perhaps consider creating a new function called "getProducts"

export { app as default}