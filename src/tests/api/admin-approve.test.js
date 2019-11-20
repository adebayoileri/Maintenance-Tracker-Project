/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('APPROVE /', () => {
  it('should have a status 200 when request approves successfully', () => {
    chai.request(server).put('/api/v1/admin/requests/3/approve').end((req, res) => {
      res.should.have.status(200);
      res.body.should.have.property('message').eql('Approved request with id 3 successfully');
    });
  });
});
