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

_chai["default"].should(); // eslint-disable-next-line max-len
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyZXFlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidHJlcTEyMyIsImlhdCI6MTU3NDQyOTc5NiwiZXhwIjoxNTc0NTE2MTk2fQ.W-D376TuknwNECLEkH8eaKjOhSMzyjJJkk76hnZdqCY';


(0, _mocha.describe)('POST /', function () {
  // it('should have a status 201 when request has been successfully created', (done) => {
  //   chai.request(server)
  //     .post('/api/v1/users/requests/')
  //     .send({
  //       title: 'Laptop port is on fire',
  //       itemType: 'Accespories',
  //       description: 'Burnt PORT',
  //       category: 'replacement',
  //       userId: 4,
  //     }).set('Authorization', `bearer ${token}`)
  //     .end((req, res) => {
  //       res.should.have.status(201);
  //       res.should.be.a('object');
  //       res.body.should.have.property('message').eql('Request Created');
  //       res.body.should.have.property('code').eql(201);
  //       done();
  //     });
  // });
  (0, _mocha.it)('should have a status 401 when auth fails', function (done) {
    _chai["default"].request(_app.server).post('/api/v1/users/requests/').send({
      title: 'Laptop port is on fire',
      itemType: 'Accespories',
      description: 'Burnt PORT',
      category: 'replacement',
      userId: 4
    }).set('Authorization', 'bearer hubdshbhbhjvdshj').end(function (req, res) {
      res.should.have.status(401);
      res.should.be.a('object');
      res.body.should.have.property('message').eql('Auth failed');
      done();
    });
  });
});
//# sourceMappingURL=create-request.test.js.map