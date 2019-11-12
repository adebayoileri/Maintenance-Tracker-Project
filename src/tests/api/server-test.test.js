/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('GET /', () => {
  it('should return 404, when an unavailable route is requested', () => {
    chai.request(server).get('/api').end((req, res) => {
      res.should.have.status(404);
      res.should.be.a('object');
      res.body.should.have.property('code').eql(404);
      res.body.should.have.property('status').eql('error');
      res.body.should.have.property('message').eql('Route unavailable on server.');
    });
  });

  it('should return status 200 when initial route is called', () => {
    chai.request(server).get('/').end((req, res) => {
      res.should.have.status(200);
    });
  });

  it('should return 404, when an unavailable route is requested', () => {
    chai.request(server).get('/api/vi/server').end((req, res) => {
      res.should.have.status(404);
      res.should.be.a('object');
      res.body.should.have.property('code').eql(404);
      res.body.should.have.property('status').eql('error');
      res.body.should.have.property('message').eql('Route unavailable on server.');
    });
  });
});
