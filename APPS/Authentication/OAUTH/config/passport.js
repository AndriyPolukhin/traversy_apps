'user strict';
/**
 * MODULE DEPENDENCIES
 */
const
  passport = require('passport'),
  config = require('./config'),
  User = require('../models/users');
//=======================================================
/**
 * MODUEL VARIABLES
 */
const
  host = config.host,
  LocalStrategy = require('passport-local').Strategy,
  FBStrategy = require('passport-facebook').Strategy,
  TwitterStrategy = require('passport-twitter').Strategy,
  fbAppId = config.fb.appID,
  fbAppSecret = config.fb.appSecret,
  fbCallbackURL = config.fb.callbackURL,
  consumerKey = config.twitter.consumerKey,
  consumerSecret = config.twitter.consumerSecret,
  twitterCallbackURL = config.twitter.callbackURL;
//=======================================================
/**
 * CONFIGURATION AND SETTINGS
 */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.error('There was an error accessing the record of user with id: ' + id);
      return done(err);
    }
    return done(null, user);
  })
});
//=======================================================
/**
 * STRATEGIES
 */
//=================LOCAL STrATEGY============================
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    process.nextTick(function () {
      if (!req.user) {
        User.findOne({ 'local.email': email }, function (err, user) {
          if (err) {
            console.error(err);
            return done(err);
          }
          if (user) {
            return done(null, false, { errMsg: 'email already exists' });
          }
          else {
            var newUser = new User();
            newUser.local.username = req.body.username;
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);
            newUser.save(function (err) {
              if (err) {
                if (err.message == 'User validation failed') {
                  return done(null, false, { errMsg: 'Please fill all fields' });
                }
                console.error(err);
                return done(err);
              }
              return done(null, newUser);
            });
          }
        });
      }
      else {//user exists and is loggedin
        var user = req.user; // pull the user out of the session
        // update the current users local credentials
        user.local.username = req.body.username;
        user.local.email = email;
        user.local.password = user.generateHash(password);
        // save modifications to user
        user.save(function (err) {
          if (err) {
            console.error(err);
            return done(err);
          }
          return done(null, user);
        });
      }
    });
  }));
//=================LOCAL LOGIN============================
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    User.findOne({ 'local.email': email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          errMsg: 'User does not exist, please' +
            ' <a href="/signup">signup</a>'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { errMsg: 'Invalid password try again' });
      }
      return done(null, user);
    });
  })
);
//=================FACEBOOK STRATEGY=========================













