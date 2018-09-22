/*
* USERS ROUTES
*
*/

// 1. DEPENDENCIES
// 1.2 Main Framework
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();
// 1.2. LOAD USERS MODEL
require('../models/User');
const User = mongoose.model('users');


// 2. USER ROUTES

// 2.1 USER LOGIN ROUTE:
router.get('/login', (req, res) => {
  res.render('users/login');
});

// 3.2 USER REGISTER ROUTE:
router.get('/register', (req, res) => {
  res.render('users/register');
});

// 2.2 Login FORM POST:
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/ideas',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});



// 3.3 Register FORM POST
router.post('/register', (req, res) => {
  // 3.3.1 Validate for errors
  let errors = [];
  // 3.3.1-a Check for the password match
  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Password do not match' });
  }
  // 3.3.1-b Check if password has a length
  if (req.body.password.length < 4) {
    errors.push({ text: 'Password should be at leas 5 characters' });
  }
  // 3.3.1-c Check if there are any errors
  if (errors.length > 0) {
    res.render('users/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    // 3.3.2 Check if the user exist
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          req.flash('error_msg', 'Email already registered');
          res.redirect('/users/register');
        } else {
          // 3.3.3 Create the new user
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });
          // 3.3.5 Encrypt the password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              // 3.3.6 Save the user to the database and redirect to login page
              newUser.save()
                .then(user => {
                  req.flash('success_msg', 'You are now registered and can login');
                  res.redirect('/users/login');
                })
                .catch(err => {
                  console.log(err);
                  return;
                });
            });
          });
        }
      });
  }
});

// 3. EXPORTS
module.exports = router;