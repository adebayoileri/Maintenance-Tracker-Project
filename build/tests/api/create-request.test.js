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

(0, _mocha.describe)('POST /', function () {
  (0, _mocha.it)('should have a status 201 when request has been successfully created', function () {
    _chai["default"].request(_app.server).post('/api/v1/users/requests').send({
      category: 'Transport',
      status: 'bad',
      createdAt: '2001-23-22'
    }).end(function (req, res) {
      res.should.have.status(201);
      res.should.be.a('object');
      res.body.should.have.property('message').eql('Request Created');
      res.body.should.have.property('code').eql(201);
      res.body.request.should.have.property('status');
      res.body.request.should.have.property('category');
    });
  });
});
//# sourceMappingURL=create-request.test.js.map