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

(0, _mocha.describe)('/GET REQUESTS', function () {
  (0, _mocha.it)('should have return 200 and get all requests sucessfully', function () {
    _chai["default"].request(_app.server).get('/api/v1/users/requests').end(function (req, res) {
      res.should.have.a.status(200);
    });
  });
});
//# sourceMappingURL=get-requests.test.js.map