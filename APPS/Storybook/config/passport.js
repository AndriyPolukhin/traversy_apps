/**
 * MODULE DEPENDENCIES
 */
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

/**
 * EXPORT WRAP
 */
module.exports = function (passport) {
  passport.use(
    new GoogleStrategy({
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true
    }, (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
    })
  )
}