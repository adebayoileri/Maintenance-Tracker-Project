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
(0, _mocha.describe)('/GET SINGLE REQUEST', function () {
  // it('should have return 200 and get all requests sucessfully', () => {
  // eslint-disable-next-line max-len
  //   chai.request(server).get('/api/v1/users/requests/3').set('Authorization', `bearer ${token}`).end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('GET a specific request successful');
  //     res.should.be.a('object');
  //     res.body.should.have.property('id').eql('3');
  //   });
  // });
  (0, _mocha.it)('should have return 404 if no requests found', function () {
    _chai["default"].request(_app.server).get('/api/v1/users/requests/89').set('Authorization', "bearer ".concat(token)).end(function (req, res) {
      res.should.have.status(401);
    });
  });
});
//# sourceMappingURL=get-singleRequest.test.js.map