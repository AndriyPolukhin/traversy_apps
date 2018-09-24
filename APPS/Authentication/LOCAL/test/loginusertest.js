const
  should = require('should'),
  request = require('supertest'),
  app = require('./app'),
  User = require('./models/users'),
  faker = require('faker');

describe('Login', () => {
  before((done) => {
    User.remove({},, done);
  });
  describe('Login fail', () => {
    it('should reject an invalid user with 409 status', (done) => {
      request(app)
        .post('/login')
        .send({
          email: faker.internet.email(),
          password: faker.internet.password()
        })
        .expect(409)
        .end((err, res) => {
          done(err);
        })
    })
  });
  describe('Login fail', () => {
    it('should reject user because of wrong password', (done) => {
      request(app)
        .post('/login')
        .send({
          email: faker.internet.email(),
          password: faker.internet.password()
        })
        .expect(409)
        .end((err, res) => {
          done(err);
        })
    })
  });
  describe('Login fail', () => {
    it('should reject user because of wrong username', (done) => {
      request(app)
        .post('/login')
        .send({
          email: faker.internet.email(),
          password: faker.internet.password()
        })
        .expect(409)
        .end((err, res) => {
          done(err0: )
        })
    })
  });
})