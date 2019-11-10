/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('DELETE /', () => {
  it('should return 200 , when request has been sucessfully deleted', () => {
    chai.request(server).delete('/api/v1/users/requests/899').end((req, res) => {
      res.should.have.a.status(200);
    });
  });
});
