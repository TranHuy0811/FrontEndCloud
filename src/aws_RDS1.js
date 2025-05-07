const mysql = require('mysql2'); // Using promise-based API

async function setupDatabase() {
  let connection;
  
  try {
    // 1. Create connection to MySQL server (without specifying a database)
    connection = await mysql.createConnection({
      host: 'group5-database.cthmxbos1x1n.us-east-1.rds.amazonaws.com',
      user: 'main',     // Replace with your MySQL username
      password: 'group5-password'  // Replace with your MySQL password
    });

    // 2. Execute the SQL commands
    await connection.query('DROP DATABASE IF EXISTS NamHuongDatabase');
    await connection.query('CREATE DATABASE NamHuongDatabase');
    await connection.query('USE NamHuongDatabase');
    
    // 3. Create products table
    await connection.query(`
      CREATE TABLE products (
        id integer PRIMARY KEY AUTO_INCREMENT,
        productName VARCHAR(255) NOT NULL,
        price integer,
        productImage VARCHAR(255) NOT NULL
      )
    `);
    
    // 4. Insert sample data
    await connection.query(`
      INSERT INTO products (productName, price, productImage)
      VALUES ("Cha Bong", 120000, "s3://group5-s3/cha_bong1.jpg")
    `);
    
    console.log('Database setup completed successfully!');
    
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    if (connection) await connection.end(); // Close the connection
  }
}

// Run the setup
setupDatabase();
module.exports = { connection }