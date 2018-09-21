/*
* USERS ROUTES
*
*/

// 1. DEPENDENCIES
// 1.2 Main Framework
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// 1.2. LOAD USERS MODEL
require('../models/Users');
const Users = mongoose.model('users');


// 2. USER ROUTES

// 2.1 USER LOGIN ROUTE:
router.get('/login', (req, res) => {
  res.render('users/login');
});

// 2.2 USER REGISTER ROUTE:
router.get('/register', (req, res) => {
  res.render('users/register');
});

// 2.3 Register FORM POST
router.post('/register', (req, res) => {
  // 2.3.1 Validate for errors
  let errors = [];
  // 2.3.1-a Check for the password match
  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Password do not match' });
  }
  // 2.3.1-b Check if password has a length
  if (req.body.password.length < 4) {
    errors.push({ text: 'Password should be at leas 5 characters' });
  }
  // 2.3.1-c Check if there are any errors
  if (errors.length > 0) {
    res.render('users/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    res.send('passed');
  }
});

// 3. EXPORTS
module.exports = router;