"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _db = _interopRequireDefault(require("../models/db"));

/* eslint-disable linebreak-style */

/* eslint-disable consistent-return */
var authController =
/*#__PURE__*/
function () {
  function authController() {
    (0, _classCallCheck2["default"])(this, authController);
  }

  (0, _createClass2["default"])(authController, null, [{
    key: "signUp",
    value: function signUp(req, res) {
      var _req$body, firstname, lastname, email, password, userExistsCheck, value, checkResult, salt, hashedPassword, signUpUser, values, newUser;

      return _regenerator["default"].async(function signUp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, email = _req$body.email, password = _req$body.password;
              _context.prev = 1;
              userExistsCheck = 'SELECT * FROM users WHERE email=$1';
              value = [email];
              _context.next = 6;
              return _regenerator["default"].awrap(_db["default"].query(userExistsCheck, value));

            case 6:
              checkResult = _context.sent;

              if (!(!firstname || !lastname || !password)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: 'Input all required fields'
              }));

            case 9:
              _context.next = 11;
              return _regenerator["default"].awrap(_bcrypt["default"].genSalt(10));

            case 11:
              salt = _context.sent;
              _context.next = 14;
              return _regenerator["default"].awrap(_bcrypt["default"].hash(password, salt));

            case 14:
              hashedPassword = _context.sent;

              if (!checkResult.rows[0]) {
                _context.next = 19;
                break;
              }

              res.status(400).json({
                message: 'email already exists'
              });
              _context.next = 25;
              break;

            case 19:
              signUpUser = 'INSERT INTO users(email, firstname, lastname, password) VALUES($1,$2,$3,$4) RETURNING *';
              values = [email, firstname, lastname, hashedPassword];
              _context.next = 23;
              return _regenerator["default"].awrap(_db["default"].query(signUpUser, values));

            case 23:
              newUser = _context.sent;

              // Token Generation
              _jsonwebtoken["default"].sign({
                email: email,
                password: password
              }, process.env.JWT_KEY, {
                expiresIn: '24h'
              }, function (error, token) {
                res.status(201).json({
                  user: newUser.rows[0],
                  token: token
                });
              });

            case 25:
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", _context.t0);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 27]]);
    }
  }, {
    key: "login",
    value: function login(req, res) {
      var _req$body2, email, password, loginUser, value, user, matchedPassword;

      return _regenerator["default"].async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              _context2.prev = 1;
              loginUser = 'SELECT * FROM users WHERE email=$1';
              value = [email];
              _context2.next = 6;
              return _regenerator["default"].awrap(_db["default"].query(loginUser, value));

            case 6:
              user = _context2.sent;

              if (!user.rows.length) {
                res.status(403).json({
                  message: 'This email doesn\'t seem to exists on our server. Signup if you haven\'t'
                });
              }

              matchedPassword = _bcrypt["default"].compareSync(password, user.rows[0].password);

              if (matchedPassword) {
                _jsonwebtoken["default"].sign({
                  email: email,
                  password: password
                }, process.env.JWT_KEY, {
                  expiresIn: '24h'
                }, function (error, token) {
                  res.status(200).json({
                    message: 'Login Successful',
                    token: token,
                    userId: user.rows[0].userid,
                    userData: user.rows[0]
                  });
                });
              } else {
                res.status(403).json({
                  message: 'Invalid password Pls try again'
                });
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              return _context2.abrupt("return", _context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 12]]);
    }
  }]);
  return authController;
}();

var _default = authController;
exports["default"] = _default;
//# sourceMappingURL=auth.controller.js.map