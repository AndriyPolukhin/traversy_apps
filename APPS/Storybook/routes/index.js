/**
 * INDEX ROUTE
 */

// 1. MAIN DEPENDENCIES
const express = require('express');
const router = express.Router();

// 2. INDEX ROUTE
router.get('/', (req, res) => {
  res.render('index/welcome');
});

// 3. DASHBOARD ROUTE
router.get('/dashboard', (req, res) => {
  res.send('This is the Dashboard route');
});


// EXPORT THE ROUTER
module.exports = router;