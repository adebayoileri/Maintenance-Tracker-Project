"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

/* eslint-disable linebreak-style */

/* eslint-disable consistent-return */

/* eslint-disable no-console */
var pg = require('pg');

var dotenv = require('dotenv');

dotenv.config(); // if (process.env.NODE_ENV === 'production') {
//   const connectionString = process.env.DB_URL;
// }

var connectionString = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}; // const connectionString = process.env.DB_URL;

var pool = new pg.Pool(connectionString);
pool.on('connect', function (err) {
  if (err) {
    return console.error('Couldn\'t connect to database');
  }

  pool.query('SELECT NOW() AS "theTime"', function (result) {
    console.log(result.rows[0].theTime); // >> output: 2018-08-23T14:02:57.117Z

    pool.end();
  });
});

var createRequestsTable = function createRequestsTable() {
  var queryText;
  return _regenerator["default"].async(function createRequestsTable$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          queryText = "CREATE TABLE IF NOT EXISTS requests(requestId SERIAL PRIMARY KEY UNIQUE,\n      title VARCHAR(128) NOT NULL,\n      itemType VARCHAR(200) NOT NULL ,\n      description VARCHAR(250) NOT NULL,\n      category VARCHAR(200) NOT NULL,\n      status VARCHAR(25) NOT NULL,\n      created_at DATE NOT NULL,\n      userId INT NOT NULL,\n      FOREIGN KEY(userId) REFERENCES users(userId) ON DELETE CASCADE ON UPDATE CASCADE)";
          _context.prev = 1;
          _context.next = 4;
          return _regenerator["default"].awrap(pool.query(queryText));

        case 4:
          console.log('Table created');
          _context.next = 9;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

var createUserTable = function createUserTable() {
  var queryText;
  return _regenerator["default"].async(function createUserTable$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          queryText = "CREATE TABLE IF NOT EXISTS\n  users(userId SERIAL PRIMARY KEY UNIQUE,\n      email VARCHAR(250) NOT NULL UNIQUE,\n      firstname VARCHAR(150) NOT NULL,\n      lastname VARCHAR(150) NOT NULL,\n      password VARCHAR(150) NOT NULL\n    )";
          _context2.prev = 1;
          _context2.next = 4;
          return _regenerator["default"].awrap(pool.query(queryText));

        case 4:
          console.log('user table created');
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; // const insertRequest = async () => {
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


createRequestsTable(); // insertRequest();

createUserTable(); // insertUser();
// dropTable();

var _default = pool;
exports["default"] = _default;
//# sourceMappingURL=db.js.map