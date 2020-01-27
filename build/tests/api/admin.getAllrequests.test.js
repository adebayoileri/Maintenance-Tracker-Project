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

(0, _mocha.describe)('GET ALL REQUESTS /', function () {
  // it('should have a status 200 gets all  requests successfully', () => {
  //   chai.request(server).get('/api/v1/admin/requests/').end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('get all requests to admin successful');
  //   });
  // });
  (0, _mocha.it)('should have a status 400 if request not found', function () {
    _chai["default"].request(_app.server).put('/api/v1/admin/requests/').end(function (req, res) {
      res.should.have.status(404);
    });
  });
});
//# sourceMappingURL=admin.getAllrequests.test.js.map