//const { app } = require('./myApp');
database_name = process.env.DB_NAME
table_name = "user"

// Table initialization
connection.query(`CREATE DATABASE IF NOT EXISTS ${database_name}`, function(err) {
    if(err) throw err
    console.log(`Database ${database_name} Created Successfully!`)

    connection.changeUser({database: database_name}, function(err){ 
        if(err) throw err
    })
    
    const create_table_query = `
        CREATE TABLE IF NOT EXISTS ${table_name} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(50) NOT NULL
    )`

    connection.query(create_table_query, function(err) {
        if(err) throw err
        console.log(`Table ${table_name} Created Successfully!`)
    })
})
