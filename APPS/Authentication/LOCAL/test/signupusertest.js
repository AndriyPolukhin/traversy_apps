const
  should = require('should'),
  request = require('supertest'),
  app = require('./app'),
  User = require('../models/users'),
  faker = require('faker');

describe('Users', () => {
  before((done) => {
    User.remove({}, done);
  });
  describe('Signup pass', () => {
    it('should create a new valid user', (done) => {
      request(app)
        .post('/signup')
        .send({
          username: 'andriy1234',
          email: 'andriy@testit.com',
          password: 'qwerqtyuiop'
        })
        .expect(302)
        .end((err, res) => {
          res.text.should.containEql('Redirecting to /dashboard');
          done(err);
        })
    })
  });
  describe('Login pass', () => {
    it('should login a valid user', (done) => {
      request(app)
        .post('/login')
        .send({
          email: 'andriy@testit.com',
          password: 'qwertyuiop'
        })
        .expect(302)
        .end((err, res) => {
          res.text.should.containEql('Redirect to /dashboard');
          done(err);
        })
    })
  });
  describe('Signup fail', function () {
    it('should fail because of missing username', function (done) {
      request(app)
        .post('/signup')
        .send({
          email: faker.internet.email(),
          password: faker.internet.password()
        })
        .expect(409)
        .end(function (err, res) {
          done(err);
        })
    })
  });
  describe('Signup fail', function () {
    it('should fail because of missing password', function (done) {
      request(app)
        .post('/signup')
        .send({
          username: faker.internet.userName(),
          email: faker.internet.email()
        })
        .expect(409)
        .end(function (err, res) {
          done(err);
        })
    })
  });
  describe('Signup fail', function () {
    it('should fail because of missing email', function (done) {
      request(app)
        .post('/signup')
        .send({
          username: faker.internet.userName(),
          password: faker.internet.password()
        })
        .expect(409)
        .end(function (err, res) {
          done(err);
        })
    })
  });
  describe('Signup fail', function () {
    it('should fail because of existing user', function (done) {
      request(app)
        .post('/signup')
        .send({
          username: 'andriy1234',
          email: 'andriy@testit.com',
          password: 'qwerqtyuiop'
        })
        .expect(409)
        .end(function (err, res) {
          done(err);
        })
    })
  });
})