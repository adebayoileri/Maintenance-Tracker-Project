"use strict";

var _mocha = require("mocha");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = require("../../app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */
_dotenv["default"].config();

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

(0, _mocha.describe)('DELETE /', function () {
  (0, _mocha.it)('should return 200 , when request has been sucessfully deleted', function () {
    _chai["default"].request(_app.server)["delete"]('/api/v1/users/requests/899').end(function (req, res) {
      res.should.have.a.status(200);
    });
  });
});
//# sourceMappingURL=delete-request.test.js.map