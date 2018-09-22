/*
*  ROUTES
*
*/

// 1. DEPENDENCIES
// 1.2 Main Framework
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// 1.2. LOAD IDEA MODEL
require('../models/Idea');
const Idea = mongoose.model('ideas');

// 2. IDEA ROUTES
// 2.1 IDEA INDEX PAGE
router.get('/', (req, res) => {
  Idea.find({})
    .sort({ date: 'desc' })
    .then(ideas => {
      res.render('ideas/index', {
        ideas: ideas
      });
    });
});

// 2.2 ADD IDEA FORM
router.get('/add', (req, res) => {
  res.render('ideas/add');
});

// 2.3 EDIT IDEA FORM
router.get('/edit/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
    .then(idea => {
      res.render('ideas/edit', {
        idea: idea
      });
    });
});

// 2.4 PROCESS FORM IDEAS CATCH THE DATA
router.post('/', (req, res) => {
  let errors = [];
  if (!req.body.title) {
    errors.push({ text: 'Please add a title' });
  }
  if (!req.body.details) {
    errors.push({ text: 'Please add some details' });
  }
  if (errors.length > 0) {
    res.render('ideas/add', {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    const newUser = {
      title: req.body.title,
      details: req.body.details
    }
    new Idea(newUser)
      .save()
      .then(idea => {
        req.flash('success_msg', 'Video idea added');
        res.redirect('/ideas');
      })
  }
});


// 2.5. EDIT FROM PROCESS
router.put('/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
    .then(idea => {
      // New Values
      idea.title = req.body.title;
      idea.details = req.body.details;

      idea.save()
        .then(idea => {
          req.flash('success_msg', 'Video idea updated');
          res.redirect('/ideas');
        });
    });
});

// 2.6 DELETE AN IDEA
router.delete('/:id', (req, res) => {
  Idea.deleteOne({ _id: req.params.id })
    .then(() => {
      req.flash('success_msg', 'Video Idea Removed');
      res.redirect('/ideas');
    });
});




// 3. EXPORTS
module.exports = router;