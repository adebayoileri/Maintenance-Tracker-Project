/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyZXFlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidHJlcTEyMyIsImlhdCI6MTU3NDMzMjM3NiwiZXhwIjoxNTc0Mzc1NTc2fQ.kopSmy5gBzPq4r6sL3xiO6sHl8lCOuqBej-FEY5mwU4';
describe('DELETE /', () => {
  // it('should return 200 , when request has been sucessfully deleted', (done) => {
  //   chai.request(server).delete('/api/v1/users/requests/28').end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('Item requested successfully deleted');
  //     res.body.should.have.property('code').eql(200);
  //     res.body.should.have.property('status').eql('success');
  //     done();
  //   });
  // });

  it('should return 404 , when request has not been deleted', (done) => {
    chai.request(server).delete('/api/v1/users/requess/5').set('Authorization', `bearer ${token}`).end((req, res) => {
      res.should.have.status(404);
      done();
    });
  });
});
