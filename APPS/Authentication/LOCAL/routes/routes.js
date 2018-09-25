/**
 * MODULE DEPENDENCIES
 */
const
  express = require('express'),
  passport = require('../config/passport'),
  utilities = require('../models/utilities');
//===========================================================
/**
 * CREATE ROUTER INSTANCE
 */
const router = express.Router();
//===========================================================
/**
 * MODULE VARIABLES
 */
// need the protect the '/dashboard' route
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

const
  errHandler = utilities.errHandler,
  validationErr = utilities.validationErr,
  cr8NewUser = utilities.cr8NewUser,
  findUser = utilities.findUser,
  viewAllUsers = utilities.viewAllUsers,
  updateUser = utilities.updateUser,
  deleteUser = utilities.deleteUser;
//===========================================================
/**
 * MIDDLEWARE
 */
router.use(passport.initialize());
router.use(passport.session());
//===========================================================
/**
 * ROUTES
 */
//=======================TEST ROUTE==========================
router.get('/test', (req, res) => {
  return res.send('<marquee><h1>Welcome to the test page</h1></marquee>');
});
//=======================APP ROUTES===========================
router.get('/', (req, res) => {
  return res.render('pages/index');
});

router.route('/login')
  .get((req, res) => {
    return res.render('pages/login');
  })
  .post((req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).render('pages/login', { errMsg: info.errMsg });
      }
      req.login(user, (err) => {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.redirect('/dashboard');
      });
    })(req, res, next);
  });

router.route('/sugnup')
  .get((req, res) => {
    return res.render('pages/signup');
  })
  .post((req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409)
          .render('pages/signup', { errMsg: info.errMsg });
      }
      req.login(user, (err) => {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.redirect('/dashboard');
      });
    })(req, res, next);
  });

router.get('/dashboard', isLoggedIn, (req, res) => {
  return res.render('pages/dashboard', {
    username: req.user.username,
    email: req.user.email
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  return res.redirect('/');
});
//=======================API ROUTES===========================
router.get('/api/users', (req, res) => {
  return viewAllUsers(req, res);
});

router
  .route('/api/users/:email')
  .get((req, res) => {
    return findUser(req, res);
  })
  .put((req, res) => {
    return update(req, res);
  })
  .delete((req, res) => {
    return deleteUser(req, res);
  });
//===========================================================
/**
 * EXPORT MODULE
 */
module.exports = router;
//===========================================================





























