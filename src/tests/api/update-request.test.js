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
  it('should return status code 200', (done) => {
    chai.request(server)
      .put('/api/v1/users/requests/899')
      .send({
        title: 'PS4 is on fire',
        itemType: 'PS4 Burnt',
        description: 'grow a tree today',
        category: 'replacement',
        status: 'pending',
      })
      .end((req, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property('message')
          .eql('Request updated successfully');
        res.body.should.have.property('code').eql(200);
        done();
      });
  });
  it('should return status code 404 when request not found', (done) => {
    chai.request(server)
      .put('/api/v1/users/requests/89kjfdjjkdfs839')
      .send({
        title: 'PS4 is on fire',
        itemType: 'PS4 Burnt',
        description: 'grow a tree today',
        category: 'replacement',
        status: 'pending',
      })
      .end((req, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property('message')
          .eql('Cannot update request with id 89kjfdjjkdfs839  because it doesn\'t exist on our server');
        done();
      });
  });
});
