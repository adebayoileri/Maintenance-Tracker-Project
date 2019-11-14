/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const pg = require('pg');
const dotenv = require('dotenv');


dotenv.config();

const connectionString = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const pool = new pg.Pool(connectionString);

pool.on('connect', () => {
  console.log('DATABASE CONNECTED');
});

const createRequestsTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  requests(requestId SERIAL PRIMARY KEY UNIQUE,
      title VARCHAR(128) NOT NULL,
      itemType VARCHAR(200) NOT NULL ,
      description VARCHAR(250) NOT NULL,
      category VARCHAR(200) NOT NULL,
      status VARCHAR(25) NOT NULL,
      created_at DATE NOT NULL)`;
  try {
    await pool.query(queryText);
    console.log('Table created');
  } catch (e) {
    // pool.end();
    console.log(e);
  }
};

const insertRequest = async () => {
  const queryText = 'INSERT INTO requests(title, itemType,description, category, status, created_at) VALUES(\'FanProblem\',\'Iron fan\', \'Fanbrokeovernight\', \'repair\',\'pending\', NOW())';
  try {
    await pool.query(queryText);
    console.log('Inserted');
  } catch (error) {
    console.error(error);
  }
};

// const dropTable = async () => {
//   try {
//     const query = 'DROP TABLE IF EXISTS requests';
//     await pool.query(query);
//     console.log('Table dropped');
//   } catch (e) {
//     pool.end();
//   }
// };


createRequestsTable();
insertRequest();

// dropTable();
