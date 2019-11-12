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

(0, _mocha.describe)('UPDATE /', function () {
  (0, _mocha.it)('should return status code 200', function () {
    _chai["default"].request(_app.server).put('/api/v1/users/requests/899').send({
      category: 'Transport',
      status: 'bad',
      createdAt: '2001-23-22'
    }).end(function (req, res) {
      res.should.have.status(200);
      res.body.should.have.property('message').eql('Request with id 899 updated successfully');
      res.body.should.have.property('code').eql(200);
      res.body.should.have.property('status');
      res.body.should.have.property('category');
    });
  });
});
//# sourceMappingURL=update-request.test.js.map