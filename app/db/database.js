const mysql = require('mysql2/promise')

const tableName = 'people'
const tableSchema = `
  create table ${tableName}(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
  );
`

let connection

const createConnection = async () => {
  connection = await mysql.createConnection({
    host: process.env.NODE_NGINX_APP_DB_HOST,
    database: process.env.NODE_NGINX_APP_DB_NAME,
    user: process.env.NODE_NGINX_APP_DB_USERNAME,
    password: process.env.NODE_NGINX_APP_DB_PASSWORD
  })
}

const createDatabaseIfNeeded = async () => {
  const [tables] = await connection.query(`SHOW TABLES LIKE "${tableName}";`);
  if (!tables.length) await connection.query(tableSchema);
}

const init = async () => {
  await createConnection()
  await createDatabaseIfNeeded()
}

const getConnection = () => connection

module.exports = {
  init,
  getConnection
}