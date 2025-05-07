database_name = process.env.DB_NAME
table_name = "products"

connection.query(`CREATE DATABASE IF NOT EXISTS ${database_name}`, function(err) {
    if(err) throw err
    console.log(`Database ${database_name} Created Successfully!`)

    connection.changeUser({database: database_name}, function(err){ 
        if(err) throw err
    })
    
    const create_table_query = `
        CREATE TABLE IF NOT EXISTS ${table_name} (
            id integer PRIMARY KEY AUTO_INCREMENT,
            productName VARCHAR(255) NOT NULL,
            price integer,
            productImage VARCHAR(255) NOT NULL
        )`
    
    const insert_values_query = `
        INSERT INTO products (productName, price, productImage)
        VALUES ("Cha Bong", 120000, "s3://group5-s3/cha_bong1.jpg");
        INSERT INTO products (productName, price, productImage)
        VALUES ("Cha Hoa", 500000, "s3://group5-s3/cha_bong1.jpg");
        INSERT INTO products (productName, price, productImage)
        VALUES ("Gio Lua", 48000, "s3://group5-s3/cha_bong1.jpg");
    `
    connection.query(create_table_query, function(err) {
        if(err) throw err
        console.log(`Table ${table_name} Created Successfully!`)
    })

    connection.query(insert_values_query, function(err) {
        if (err) throw err
        console.log(`Insert values to ${table_name} sucessfully!`)
    })

})
