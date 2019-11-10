/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('UPDATE /', () => {
  it('should return status code 200', () => {
    chai.request(server)
      .put('/api/v1/users/requests/899')
      .send({
        category: 'Transport',
        status: 'bad',
        createdAt: '2001-23-22',
      })
      .end((req, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property('message')
          .eql('Request with id 899 updated successfully');
        res.body.should.have.property('code').eql(200);
        res.body.should.have.property('status');
        res.body.should.have.property('category');
      });
  });
});
