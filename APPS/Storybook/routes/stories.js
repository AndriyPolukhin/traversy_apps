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
    .sort({ date: 'desc' })
    .then(stories => {
      res.render('stories/index', {
        stories: stories
      });
    });
});

// List stories from a user
router.get('/user/:userId', (req, res) => {
  Story
    .find({ user: req.params.userId, status: 'public' })
    .populate('user')
    .then(stories => {
      res.render('stories/index', {
        stories: stories
      });
    });
});

// Logged in users stories
router.get('/my', ensureAuthenticated, (req, res) => {
  Story
    .find({ user: req.user.id })
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
      if (story.user != req.user.id) {
        res.redirect('/sotries');
      } else {
        res.render('stories/edit', {
          story: story
        });
      }
    });
});

// 3. SHOW SINGLE STORY
router.get('/show/:id', (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
    .populate('user')
    .populate('comments.commentUser')
    .then(story => {
      if (story.status == 'public') {
        res.render('stories/show', {
          story: story
        });
      } else {
        if (req.user) {
          if (req.user.id == story.user._id) {
            res.render('stories/show', {
              story: story
            });
          } else {
            res.render('/stories');
          }
        } else {
          res.redirect('/stories');
        }
      }
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
  // 4.1 Find the story
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

      // 4.2 New Values
      story.title = req.body.title;
      story.body = req.body.body;
      story.status = req.body.status;
      story.allowComments = allowComments;
      // 4.3 Save the story
      story.save()
        .then(story => {
          // 4.4 Redirect to Dashboard
          res.redirect('/dashboard');
        });
    });
});

// 5. DELETE STORY ROUTE
router.delete('/:id', (req, res) => {
  Story.remove({ _id: req.params.id })
    .then(() => {
      res.redirect('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
});

// 6. ADD COMMENT
router.post('/comment/:id', (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
    .then(story => {
      const newComment = {
        commentBody: req.body.commentBody,
        commentUser: req.user.id
      }

      // PUSH TO COMMETNS ARRAY
      story.comments.unshift(newComment);
      story.save().then(story => {
        res.redirect(`/stories/show/${story.id}`);
      });
    });
});

/**
 * EXPORT THE MODULE
 */
module.exports = router;