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

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyZXFlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidHJlcTEyMyIsImlhdCI6MTU3NDQyOTc5NiwiZXhwIjoxNTc0NTE2MTk2fQ.W-D376TuknwNECLEkH8eaKjOhSMzyjJJkk76hnZdqCY';
(0, _mocha.describe)('UPDATE /', function () {
  // it('should return status code 200', (done) => {
  //   chai.request(server)
  //     .put('/api/v1/users/requests/8')
  //     .send({
  //       title: 'PS4 is on fire',
  //       itemType: 'PS4 Burnt',
  //       description: 'grow a tree today',
  //       category: 'replacement',
  //       status: 'pending',
  //     }).set('Authorization', `bearer ${token}`)
  //     .end((req, res) => {
  //       res.should.have.status(200);
  //       res.body.should.have
  //         .property('message')
  //         .eql('Request updated successfully');
  //       res.body.should.have.property('code').eql(200);
  //       done();
  //     });
  // });
  (0, _mocha.it)('should return status code 400 when request not found', function (done) {
    _chai["default"].request(_app.server).put('/api/v1/users/requests/4').send({
      title: 'PS4 is on fire',
      itemType: 'PS4 Burnt',
      description: 'grow a tree today',
      category: 'replacement',
      status: 'pending'
    }).set('Authorization', "bearer ".concat(token)).end(function (req, res) {
      res.should.have.status(401);
      done();
    });
  });
});
//# sourceMappingURL=update-request.test.js.map