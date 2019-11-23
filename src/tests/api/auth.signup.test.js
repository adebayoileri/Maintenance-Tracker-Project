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
      email: 'adeileri@gmail.com',
      password: 'kpjkljl',
    }).end((req, res) => {
      res.should.have.status(201);
      res.body.should.have.a('object');
      done();
    });
  });

  it('should have a status of 400 if email already exists', (done) => {
    chai.request(server).post('/api/v1/auth/signup').send({
      firstname: 'Bobby',
      lastname: 'newman',
      email: 'adeileri@gmail.com',
      password: 'kpjkljl',
    }).end((req, res) => {
      res.should.have.status(400);
      res.body.should.have.property('message').eql('email already exists');
      done();
    });
  });
  it('should have a status of 404 when user information is incomplete', (done) => {
    chai.request(server).post('/api/v1/auth/signup').send({
      lastname: 'ileri',
      password: 'kpjkljl',
      password2: 'knmkml',
    }).end((req, res) => {
      res.should.have.status(400);
      res.body.should.have.property('message').eql('Input all required fields');
      done();
    });
  });
});
