'user strict';
/**
 * MODULE DEPENDENCIES
 */
const
  express = require('express'),
  passport = require('../config/passport'),
  UserUtils = require('../models/userUtilities');
//=======================================================
/**
 * CREATE ROUTER INSTANCE
 */
const router = express.Router();
//=======================================================
/**
 * MODULE VARIABLES
 */
const
  isLoggedIn = require('../utils/isLoggedIn'),
  findUser = UserUtils.findUser,
  viewAllUsers = UserUtils.viewAllUsers,
  updateUser = UserUtils.updateUser,
  deleteUser = UserUtils.deleteUser;
//=======================================================
/**
 * MODDLEWARE
 */
router.use(passport.initialize());
router.use(passport.session());
//=======================================================
/**
 * ROUTES
 */
router.get('/', function (req, res) {
  return res.status(200).render('pages/index', { errMsg: null });
});

router.route('/login')
  .get(function (req, res) {
    return res.status(200).render('pages/login');
  })
  .post(function (req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).render('pages/login', { errMsg: info.errMsg });
      }
      req.login(user, function (err) {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.status(302).redirect('/dashboard');
      });
    })(req, res, next);
  });

router.route('/singup')
  .get(function (req, res) {
    return res.status(200).render('pages/signup', { errMsg: null });
  })
  .post(function (req, res, next) {
    passport.authenticate('local-singup', function (err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).render('pages/singup', { errMsg: info.errMsg });
      }
      req.login(user, function (err) {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.status(302).redirect('/dashboard');
      });
    })(req, res, next);
  });

router.get('/dashboard', isLoggedIn, function (req, res, next) {
  const
    user = req.user,
    profile = {
      local: {
        username: user.local.username,
        email: user.local.email
      },
      fb: {
        displayName: user.social.fb.displayName,
        email: user.social.db.email,
        accessToken: user.social.fb.token
      },
      twitter: {
        displayName: user.social.twitter.displayName,
        handle: user.social.twitter.handle,
        location: user.social.twitter.metaData.location,
        description: user.socila.twitter.description
      },
      photo: user.social.twitter.photo || user.social.fb.photo,
      acctLinkStatus: function () {
        const
          localLink = 'not linked',
          fbLink = 'not linked',
          twitterLink = 'not linked';
        if (this.local.email) {
          localLink = 'linked';
        }
        if (this.fb.displayName) {
          fbLink = 'linked';
        }
        if (this.twitter.displayName) {
          twitterLink = 'linked';
        }
        return {
          local: localLink,
          fb: fbLink,
          twitter: twitterLink
        };
      }
    },
    person =
      profile.local.username ||
      profile.fn.displayName ||
      profile.twitter.displayName,
    local = profile.local,
    facebook = profile.fb,
    twitter = profile.twitter,
    currentProfile = function getCurrentProfile() {
      if (local.email) {
        return 'local';
      }
      if (facebook.displayName) {
        return 'facebook';
      }
      return 'twitter';
    }(),
    linkStatus = profile.acctLinkStatus();

  return res.render('pages/dashboard', {
    user: profile,
    currentProfile: currentProfile,
    person: person,
    linkStatus: linkStatus
  });
});

router.get('/logout', function (req, res) {
  req.logout();
  req.session.destroy();
  return res.redirect('/');
});
//====================OAuth ROTES==========================
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  }));
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'user_posts' }));
// router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  }));
//================ACCOUNT LINKAGE ROUTES==================
// LOCAL ACCOUNT
router.route('/connect/local')
  .get(function (req, res) {
    return res.status(200).render('pages/signup', {
      infoMsg: 'Create a local account to link to your profile'
    });
  })
  .post(function (req, res, next) {
    passport.authenticate('local-signup', function (err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).render('page/signup', { errMsg: info.errMsg });
      }
      req.login(user, function (err) {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.status(302).redirect('/dashboard');
      });
    })(req, res, next);
  });
// FACEBOOK
router.get('/connect/facebook',
  passport.authorize('facebook', { scope: 'user_posts', failureRedirect: '/login' }));
router.get('/connect/facebook/callback',
  passport.authorize('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })
);
// TWITTER
router.get('/connect/twitter',
  passport.authorize('twitter', { failureRedirect: '/login' }));
router.get('/connect/twitter/callback',
  passport.authorize('twitter', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  }));
//=================USER API SUB ROUTES====================
router.get('/api/users', function (req, res, next) {
  return viewAllUsers(req, res, next);
});
router.route('/api/users/:email')
  .get(function (req, res, next) {
    return findUser(req, res, next);
  })
  .put(function (req, res, next) {
    return updateUser(req, res, next);
  })
  .delete(function (req, res, next) {
    return deleteUser(req, res, next);
  });
//=======================================================
/**
 * EXPORT MODULE
 */
module.exports = router;
//=======================================================









































