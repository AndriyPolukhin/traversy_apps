/**
 * MODULE DEPENDENCIES
 */
const
  passport = require('passport'),
  config = require('./config'),
  User = require('../models/users'),
  utilities = require('../models/utilities');
//===========================================================
/**
 * MODULE VARIABLES
 */
const
  host = config.host,
  errHandler = utilities.errHandler,
  LocalStrategy = require('passport-local').Strategy;
//===========================================================
/**
 * CONFIGURATION AND SETTINGS
 */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.error('There was an error accessing the records of user with id: ' + id);
      return console.log(err.message);
    }
    return done(null, user);
  })
});
//===========================================================
/**
 * STRATEGIES
 */
//===================LOCAL STRATEGY==========================
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    process.nextTick(function () {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return errHandler(err);
        }
        if (user) {
          console.log('user already exists');
          return done(null, false, { errMsg: 'email already exists' });
        }
        else {
          let newUser = new User();
          newUser.username = req.body.username;
          newUser.email = email;
          newUser.password = newUser.generateHash(password);
          newUser.save(function (err) {
            if (err) {
              console.log(err);
              if (err.message == 'User validation failed') {
                console.log(err.message);
                return done(null, false, { errMsg: 'Please fill all fields' });
              }
              return errHandler(err);
            }
            console.log('New user successfully created...', newUser.username);
            console.log('email', email);
            console.log(newUser);
            return done(null, newUser);
          });
        }
      });
    });
  }
));
//=====================LOCAL LOGIN===========================
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return errHandler(err);
      }
      if (!user) {
        return done(null, false, {
          errMsg: 'User does not exist, please' +
            ' <a class="errMsg" href="/signup">signup</a>'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { errMsg: 'Invalid password try again' });
      }
      return done(null, user);
    });
  }));
/**
 * EXPORT MODULE
 */
module.exports = passport;