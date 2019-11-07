/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('UPDATE /', () => {
  it('should return status code 200', () => {
    chai.request(server).put('api/v1/users/request/:requestId').end((req, res) => {
      res.should.have.status(200);
    });
  });
});
