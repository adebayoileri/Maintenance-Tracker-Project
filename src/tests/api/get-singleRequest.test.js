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
      res.should.have.a.status(200);
      res.body.should.have.a.property('message').eql('GET a specific request successful');
    });
  });
});
