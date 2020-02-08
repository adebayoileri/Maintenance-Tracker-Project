"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth.controller"));

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var router = _express["default"].Router();

router.post('/signup', _auth["default"].signUp);
router.post('/login', _auth["default"].login);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=authRoutes.js.map