const dotenv = require('dotenv');

dotenv.config();
const {
  DB_USER,
  DEV_DB_NAME,
  DB_PASSWORD,
  TEST_DB_NAME,
  PROD_DB_HOST,
  PROD_DB_USER,
  PROD_DB_NAME,
  PROD_DB_PASSWORD,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DEV_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: TEST_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: PROD_DB_USER,
    password: PROD_DB_PASSWORD,
    database: PROD_DB_NAME,
    host: PROD_DB_HOST,
    dialect: 'postgres'
  }
};
