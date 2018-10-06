/**
 * INDEX ROUTE
 */

// 1. MAIN DEPENDENCIES
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');

// 2. INDEX ROUTE
router.get('/', ensureGuest, (req, res) => {
  res.render('index/welcome');
});

// 3. DASHBOARD ROUTE
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('index/dashboard');
});

// 4. ABOUT ROUTE
router.get('/about', (req, res) => {
  res.render('index/about');
});


// EXPORT THE ROUTER
module.exports = router;