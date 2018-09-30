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