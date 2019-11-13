/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import pg from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const connectionString = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const pool = new pg.Pool(connectionString);

pool.on('connect', (error) => {
  if (error) {
    console.log('Couldn\'t connect to database');
  }
  console.log('DATABASE CONNECTED');
});
