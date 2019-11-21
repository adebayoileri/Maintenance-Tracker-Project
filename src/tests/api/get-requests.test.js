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

describe('/GET REQUESTS', () => {
  it('should have return 200 and get all requests sucessfully', () => {
    chai.request(server).get('/api/v1/users/requests').send({
      userId: 1,
    }).set('Authorization', `bearer ${token}`)
      .end((req, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').eql('GET request successful');
        res.should.be.a('object');
      });
  });

  it('should have return 404 when not requests found', () => {
    chai.request(server).get('/api/v1/users/requess').set('Authorization', `bearer ${token}`).end((req, res) => {
      res.should.have.status(404);
    });
  });
});
