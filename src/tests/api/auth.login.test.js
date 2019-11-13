/* eslint-disable linebreak-style */
import dotenv from 'dotenv';
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('POST /Login', () => {
  it('should have a status of 201 when user signup', () => {
    chai.request(server).post('/api/v1/auth/login').end((req, res) => {
      res.should.have.status(200);
    });
  });
});
