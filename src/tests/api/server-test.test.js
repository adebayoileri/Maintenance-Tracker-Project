/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../../app';
// ./node_modules/.bin/mocha --require @babel/register
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
