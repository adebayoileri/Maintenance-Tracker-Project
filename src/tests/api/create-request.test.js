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

describe('POST /', () => {
  it('should have a status 201 when request has been successfully created', (done) => {
    chai.request(server)
      .post('/api/v1/users/requests/')
      .send({
        title: 'Laptop port is on fire',
        itemType: 'Accespories',
        description: 'Burnt PORT',
        category: 'replacement',
        status: 'resolved',
        userId: 4,
      }).set('Authorization', `bearer ${token}`)
      .end((req, res) => {
        res.should.have.status(201);
        res.should.be.a('object');
        res.body.should.have.property('message').eql('Request Created');
        res.body.should.have.property('code').eql(201);
        done();
      });
  });

  it('should have a status 401 when auth fails', (done) => {
    chai.request(server)
      .post('/api/v1/users/requests/')
      .send({
        title: 'Laptop port is on fire',
        itemType: 'Accespories',
        description: 'Burnt PORT',
        category: 'replacement',
        status: 'resolved',
        userId: 4,
      }).set('Authorization', 'bearer hubdshbhbhjvdshj')
      .end((req, res) => {
        res.should.have.status(401);
        res.should.be.a('object');
        res.body.should.have.property('message').eql('Auth failed');
        done();
      });
  });
});
