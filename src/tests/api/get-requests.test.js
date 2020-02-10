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

describe('/GET REQUESTS', () => {
  // it('should have return 200 and get all requests sucessfully', () => {
  //   chai.request(server).get('/api/v1/users/requests/1').send({
  //     userId: 1,
  //   }).set('Authorization', `bearer ${token}`)
  //     .end((req, res) => {
  //       res.should.have.status(200);
  //       res.body.should.have.property('message').eql('GET request successful');
  //       res.should.be.a('object');
  //     });
  // });

  // it('should have return 404 when not requests found', () => {
  //   chai.request(server).get('/api/v1/users/requess').set('Authorization', `bearer ${token}`).end((req, res) => {
  //     res.should.have.status(404);
  //   });
  // });
});
