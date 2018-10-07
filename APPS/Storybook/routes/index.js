/**
 * INDEX ROUTE
 */

// 1. MAIN DEPENDENCIES
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Story = mongoose.model('stories');
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');

// 2. INDEX ROUTE
router.get('/', ensureGuest, (req, res) => {
  res.render('index/welcome');
});

// 3. DASHBOARD ROUTE
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  Story.find({ user: req.user.id })
    .then(stories => {
      res.render('index/dashboard', {
        stories: stories
      });
    });
});

// 4. ABOUT ROUTE
router.get('/about', (req, res) => {
  res.render('index/about');
});


// EXPORT THE ROUTER
module.exports = router;