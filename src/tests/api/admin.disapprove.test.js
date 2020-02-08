/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('DISAPPROVE /', () => {
  // it('should have a status 200 when request disapproves successfully', () => {
  //   chai.request(server).put('/api/v1/admin/requests/3/disapprove').end((req, res) => {
  //     res.should.have.status(200);
  //     res.body.should.have.property('message').eql('Disapproved request with id 3 successfully');
  //   });
  // });

  it('should have a status 400 if request not found', () => {
    chai.request(server).put('/api/v1/admin/requests/3889jjj/disapprove').end((req, res) => {
      res.should.have.status(400);
      res.body.should.have.property('message').eql('No request associated with this ID');
    });
  });
});
