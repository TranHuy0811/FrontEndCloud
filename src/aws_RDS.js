const mysql = require('mysql2/promise');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

async function getDbConfig() {
  const client = new SecretsManagerClient({ region: 'your-region' });
  const command = new GetSecretValueCommand({ SecretId: 'your-secret-arn' });
  const response = await client.send(command);
  return JSON.parse(response.SecretString);
}

async function getProducts() {
  const dbConfig = await getDbConfig();
  
  const connection = await mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.dbname,
    port: dbConfig.port
  });

  try {
    const [rows] = await connection.execute(
      'SELECT id, name, price, image_link FROM products'
    );
    return rows;
  } finally {
    await connection.end();
  }
}

// Usage
getProducts().then(products => console.log(products));