const mysql = require("mysql2");

const dotenv = require("dotenv");

dotenv.config();

const { DATABASE_PASSWORD, DATABASE_USER, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } =
  process.env;

const configOptions = {
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
  database: DATABASE_NAME
};

const dbConnection = mysql.createConnection(configOptions);

module.exports = dbConnection;
