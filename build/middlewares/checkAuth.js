"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/* eslint-disable linebreak-style */

/* eslint-disable consistent-return */
var secret = process.env.JWT_KEY;

var checkAuth = function checkAuth(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1] || req.body.token;

    var decoded = _jsonwebtoken["default"].verify(token, secret);

    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
      error: error
    });
  }
};

var _default = checkAuth;
exports["default"] = _default;
//# sourceMappingURL=checkAuth.js.map