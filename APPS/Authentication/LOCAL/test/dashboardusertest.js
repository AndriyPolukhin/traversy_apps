const
  should = require('should'),
  request = require('supertest'),
  app = require('./app'),
  faker = require('faker');

describe('Dashboard', () => {
  it('should reject an unathenticated user', (done) => {
    request(app)
      .get('/dashboard')
      .send({
        email: faker.internet.email(),
        password: faker.internet.password()
      })
      .expect(302)
      .end((err, res) => {
        res.text.should.containEql('Redirect to /login');
        done(err);
      })
  })
})