/*
* CONFIGURATION FOR AUTHENTIFICATION
*
*/

// 1. DEPENDENCIES
// 1.1 Main Dep
// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// 1.2 MODEL
const User = mongoose.model('users');


// Export
module.exports = function (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function (email, password, done) {
    // Match the user
    User.findOne({
      email: email
    }).then(user => {
      if (!user) {
        return done(null, false, { message: 'No user found' });
      }
      // Match password
      bcrypt.compare(password, user.passowrd, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password incorect' });
        }
      });
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
}