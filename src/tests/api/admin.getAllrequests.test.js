/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('GET ALL REQUESTS /', () => {
  // it('should have a status 200 gets all  requests successfully', () => {
  //   chai.request(server).get('/api/v1/admin/requests/').end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('get all requests to admin successful');
  //   });
  // });

  it('should have a status 400 if request not found', () => {
    chai.request(server).put('/api/v1/admin/requests/').end((req, res) => {
      res.should.have.status(404);
    });
  });
});
