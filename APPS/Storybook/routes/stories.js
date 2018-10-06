/**
 * MAIN DEPENDENCIES
 */
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');
/**
 * ROUTES
 */

// 1. INDEX STORIES
router.get('/', (req, res) => {
  res.render('stories/index');
});

// 2. ADD STORY FORM
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('stories/add');
});

/**
 * EXPORT THE MODULE
 */
module.exports = router;