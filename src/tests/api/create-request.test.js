/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('POST /', () => {
  it('should have a status 201 when request has been successfully created', () => {
    chai
      .request(server)
      .post('api/v1/users/requests')
      .end((req, res) => {
        res.should.have.status(201);
      });
  });
});
