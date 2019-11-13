/* eslint-disable linebreak-style */
import dotenv from 'dotenv';
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../../app';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('POST /Signup', () => {
  it('should have a status of 201 when user signup', (done) => {
    chai.request(server).post('/api/v1/auth/signup').send({
      firstname: 'ade',
      lastname: 'ileri',
      email: 'ade@gmail.com',
      password: 'kpjkljl',
      password2: 'knmkml',
    }).end((req, res) => {
      res.should.have.status(201);
      done();
    });
  });

  it('should have a status of 404 when user information is incomplete', (done) => {
    chai.request(server).post('/api/v1/auth/signup').send({
      lastname: 'ileri',
      password: 'kpjkljl',
      password2: 'knmkml',
    }).end((req, res) => {
      res.should.have.status(404);
      done();
    });
  });
});
