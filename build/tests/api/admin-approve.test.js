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

(0, _mocha.describe)('APPROVE /', function () {
  // it('should have a status 200 when request approves successfully', () => {
  //   chai.request(server).put('/api/v1/admin/requests/3/approve').end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('Approved request with id 3 successfully');
  //   });
  // });
  (0, _mocha.it)('should have a status 400 if request not found', function () {
    _chai["default"].request(_app.server).put('/api/v1/admin/requests/3889jjj/approve').end(function (req, res) {
      res.should.have.status(400);
      res.body.should.have.property('message').eql('No request associated with this ID');
    });
  });
});
//# sourceMappingURL=admin-approve.test.js.map