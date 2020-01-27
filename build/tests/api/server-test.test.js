"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mocha = require("mocha");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = require("../../app");

/* eslint-disable linebreak-style */
_dotenv["default"].config();

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

(0, _mocha.describe)('GET /', function () {
  (0, _mocha.it)('should return 404, when an unavailable route is requested', function () {
    _chai["default"].request(_app.server).get('/api').end(function (req, res) {
      res.should.have.status(404);
      res.should.be.a('object');
      res.body.should.have.property('code').eql(404);
      res.body.should.have.property('status').eql('error');
      res.body.should.have.property('message').eql('Route unavailable on server.');
    });
  });
  (0, _mocha.it)('should return status 200 when initial route is called', function () {
    _chai["default"].request(_app.server).get('/').end(function (req, res) {
      res.should.have.status(200);
    });
  });
  (0, _mocha.it)('should return 404, when an unavailable route is requested', function () {
    _chai["default"].request(_app.server).get('/api/vi/server').end(function (req, res) {
      res.should.have.status(404);
      res.should.be.a('object');
      res.body.should.have.property('code').eql(404);
      res.body.should.have.property('status').eql('error');
      res.body.should.have.property('message').eql('Route unavailable on server.');
    });
  });
});
//# sourceMappingURL=server-test.test.js.map