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

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyZXFlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidHJlcTEyMyIsImlhdCI6MTU3NDMzMjM3NiwiZXhwIjoxNTc0Mzc1NTc2fQ.kopSmy5gBzPq4r6sL3xiO6sHl8lCOuqBej-FEY5mwU4';
(0, _mocha.describe)('DELETE /', function () {
  // it('should return 200 , when request has been sucessfully deleted', (done) => {
  //   chai.request(server).delete('/api/v1/users/requests/28').end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('Item requested successfully deleted');
  //     res.body.should.have.property('code').eql(200);
  //     res.body.should.have.property('status').eql('success');
  //     done();
  //   });
  // });
  (0, _mocha.it)('should return 404 , when request has not been deleted', function (done) {
    _chai["default"].request(_app.server)["delete"]('/api/v1/users/requess/5').set('Authorization', "bearer ".concat(token)).end(function (req, res) {
      res.should.have.status(404);
      done();
    });
  });
});
//# sourceMappingURL=delete-request.test.js.map