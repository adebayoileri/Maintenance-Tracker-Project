/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

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
        userId: 1,
      })
      .end((req, res) => {
        res.should.have.status(201);
        res.should.be.a('object');
        res.body.should.have.property('message').eql('Request Created');
        res.body.should.have.property('code').eql(201);
        done();
      });
  });
});
