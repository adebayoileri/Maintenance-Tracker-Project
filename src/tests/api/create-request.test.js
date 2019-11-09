/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('POST /', () => {
  it('should have a status 201 when request has been successfully created', () => {
    chai.request(server)
      .post('/api/v1/users/requests')
      .send({
        category: 'Transport',
        status: 'bad',
        createdAt: '2001-23-22',
      })
      .end((req, res) => {
        res.should.have.status(201);
        res.should.be.a('object');
        res.body.should.have.property('message').eql('Request Created');
        res.body.should.have.property('code').eql(201);
        res.body.request.should.have.property('status');
        res.body.request.should.have.property('category');
      });
  });
});
