/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { Pool, Client } from 'pg';

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
});
client.connect();
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
