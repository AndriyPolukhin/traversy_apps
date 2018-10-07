/**
 * MAIN DEPENDENCIES
 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Story = mongoose.model('stories');
const User = mongoose.model('users');
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');

/**
 * ROUTES
 */

// 1. INDEX STORIES
router.get('/', (req, res) => {
  Story.find({ status: 'public' })
    .populate('user')
    .then(stories => {
      res.render('stories/index', {
        stories: stories
      });
    });
});

// 2. ADD STORY FORM
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('stories/add');
});
// 3. EDIT STORY FORM
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
    .then(story => {
      res.render('stories/edit', {
        story: story
      });
    });
});

// 3. SHOW SINGLE STORY
router.get('/show/:id', (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
    .populate('user')
    .then(story => {
      res.render('stories/show', {
        story: story
      });
    });
});


// 3. PROCESS ADD STORY
router.post('/', (req, res) => {
  // 3.1 Set the defaults for the alloComments, so it would appear in the database
  let allowComments;
  if (req.body.allowComments) {
    allowComments = true;
  } else {
    allowComments = false;
  }

  // 3.2 Build a new story object
  const newStory = {
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    allowComments: allowComments,
    user: req.user.id
  }

  // 3.3 Create a new Story
  new Story(newStory)
    .save()
    .then(story => {
      res.redirect(`/stories/show/${story.id}`);
    });
});

// 4. EDIT FORM PROCESS
router.put('/:id', (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
    .then(story => {
      let allowComments;

      if (req.body.allowComments) {
        allowComments = true;
      } else {
        allowComments = false;
      }

      // New Values
      story.title = req.body.title;
      story.body = req.body.body;
      story.status = req.body.status;
      story.allowComments = allowComments;

      story.save()
        .then(story => {
          res.redirect('/dashboard');
        });
    });
});

/**
 * EXPORT THE MODULE
 */
module.exports = router;