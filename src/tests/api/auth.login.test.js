/* eslint-disable linebreak-style */
// import dotenv from 'dotenv';
// import { describe, it } from 'mocha';
// import chai from 'chai';
// import chaiHttp from 'chai-http';

// import { server } from '../../app';

// dotenv.config();
// chai.use(chaiHttp);
// chai.should();

// describe('POST /Login', () => {
// it('should have a status of 201 when user signup', (done) => {
//   chai.request(server).post('/api/v1/auth/login').send({
//     email: 'adfrose@gmail.com',
//     password: 'fdsjkhisf',
//   }).end((req, res) => {
//     res.should.have.status(200);
//     res.body.should.have.property('message').eql('Login Successful');
//     done();
//   });
// });

// it('should have a status of 403 if user doesn\'t exists', (done) => {
//   chai.request(server).post('/api/v1/auth/login').send({
//     email: 'adefrose@gmail.com',
//     password: 'fdsjkhisf',
//   }).end((req, res) => {
//     res.should.have.status(403);
// eslint-disable-next-line max-len
//     res.body.should.have.property('message').eql('This email doesn\'t seem to exists on our server. Signup if you haven\'t');
//     done();
//   });
// });

//   it('should have a status 403 if password is wrong', (done) => {
//     chai.request(server).post('/api/v1/auth/login').send({
//       email: 'adfrose@gmail.com',
//       password: 'fdsjkh7878f',
//     }).end((req, res) => {
//       res.should.have.status(403);
// eslint-disable-next-line max-len
//       res.body.should.have.property('message').eql('This email doesn\'t seem to exists on our server. Signup if you haven\'t');
//       done();
//     });
//   });
// });
