/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const pg = require('pg');
const dotenv = require('dotenv');


dotenv.config();

// if (process.env.NODE_ENV = 'production') {
// }

const connectionString = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
// const connectionString = process.env.DB_URL;
const pool = new pg.Pool(connectionString);

pool.on('connect', () => {
});

const createRequestsTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS requests(requestId SERIAL PRIMARY KEY UNIQUE,
      title VARCHAR(128) NOT NULL,
      itemType VARCHAR(200) NOT NULL ,
      description VARCHAR(250) NOT NULL,
      category VARCHAR(200) NOT NULL,
      status VARCHAR(25) NOT NULL,
      created_at DATE NOT NULL,
      userId INT NOT NULL,
      FOREIGN KEY(userId) REFERENCES users(userId) ON DELETE CASCADE ON UPDATE CASCADE)`;
  try {
    await pool.query(queryText);
    console.log('Table created');
  } catch (e) {
    // pool.end();
  }
};


const createUserTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  users(userId SERIAL PRIMARY KEY UNIQUE,
      email VARCHAR(250) NOT NULL UNIQUE,
      firstname VARCHAR(150) NOT NULL,
      lastname VARCHAR(150) NOT NULL,
      password VARCHAR(150) NOT NULL
    )`;
  try {
    await pool.query(queryText);
    console.log('user table created');
  } catch (error) {
    return error;
  }
};

// const insertRequest = async () => {
// eslint-disable-next-line max-len
//   const queryText = 'INSERT INTO requests(title, itemType,description, category, status, created_at) VALUES(\'FanProblem\',\'Iron fan\', \'Fanbrokeovernight\', \'repair\',\'pending\', NOW())';
//   try {
//     await pool.query(queryText);
//     console.log('Inserted');
//   } catch (error) {
//     console.error(error);
//   }
// };

// const insertUser = async () => {
// eslint-disable-next-line max-len
//   const queryText = 'INSERT INTO users(email, firstname, lastname, password) VALUES(\'adebayorilerioluwa@gmail.com\',\'Ilerioluwa\', \'Adebayo\', \'adeilerioluwa\' )';
//   try {
//     await pool.query(queryText);
//     console.log('User Inserted');
//   } catch (error) {
//     console.error(error);
//   }
// };

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
// insertRequest();
createUserTable();

// insertUser();
// dropTable();

export default pool;
