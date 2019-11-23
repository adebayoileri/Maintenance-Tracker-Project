/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyZXFlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidHJlcTEyMyIsImlhdCI6MTU3NDQyOTc5NiwiZXhwIjoxNTc0NTE2MTk2fQ.W-D376TuknwNECLEkH8eaKjOhSMzyjJJkk76hnZdqCY';

describe('UPDATE /', () => {
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
  it('should return status code 400 when request not found', (done) => {
    chai.request(server)
      .put('/api/v1/users/requests/4')
      .send({
        title: 'PS4 is on fire',
        itemType: 'PS4 Burnt',
        description: 'grow a tree today',
        category: 'replacement',
        status: 'pending',
      })
      .set('Authorization', `bearer ${token}`)
      .end((req, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
