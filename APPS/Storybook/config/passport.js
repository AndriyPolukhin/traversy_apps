/**
 * MODULE DEPENDENCIES
 */
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');
// Load user model
const User = mongoose.model('users');
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
      // console.log(accessToken);
      // console.log(profile);

      // Find the image/avatar
      const image = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));
      // Create a user object
      const newUser = {
        googleID: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        image: image
      }
      // Check for existing user
      User.findOne({
        googleID: profile.id
      }).then(user => {
        if (user) {
          // Return user
          done(null, user);
        } else {
          // Create user
          new User(newUser)
            .save()
            .then(user => done(null, user));
        }
      })
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });

}