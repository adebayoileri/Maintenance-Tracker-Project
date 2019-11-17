/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('/GET SINGLE REQUEST', () => {
  it('should have return 200 and get all requests sucessfully', () => {
    chai.request(server).get('/api/v1/users/requests/889').end((req, res) => {
      res.should.have.status(200);
      res.body.should.have.property('message').eql('GET a specific request successful');
      res.should.be.a('object');
      res.body.should.have.property('id').eql('889');
    });
  });
  it('should have return 404 if no requests found', () => {
    chai.request(server).get('/api/v1/users/requests/8hjk9').end((req, res) => {
      res.should.have.status(404);
      res.body.should.have.property('message').eql('No request associated is with this id');
    });
  });
});
