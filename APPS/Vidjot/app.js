/*
* PRIMARY FILE FOR THE APP
*
*/

// 1. DEPENDENCIES
const express = require('express');
const port = 5000;
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// 2. Init the app variable
const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// 3. Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// 4. LOAD IDEA MODEL
require('./models/Idea');
const Idea = mongoose.model('ideas');

// 5. MIDDLEWARE
// 5.1 Handlerbars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// 5.2 Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 5.3 Method Override
app.use(methodOverride('_method'));

// 5.4 EXPRESS Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// 5.5. FLASH CONNECT
app.use(flash());

// 5.6 GLOBAL VARIABLES
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// 6. Set the routers

// 6.1 INDEX ROUTE
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// 6.2 ABOUT ROUTE
app.get('/about', (req, res) => {
  res.render('about');
});

// 6.3 IDEA INDEX PAGE
app.get('/ideas', (req, res) => {
  Idea.find({})
    .sort({
      date: 'desc'
    })
    .then(ideas => {
      res.render('ideas/index', {
        ideas: ideas
      });
    });
});

// 6.3 ADD IDEA FORM
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

// 6.4 EDIT IDEA FORM
app.get('/ideas/edit/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
    .then(idea => {
      res.render('ideas/edit', {
        idea: idea
      });
    });
});

// 6.5 PROCESS FORM // CATCH THE DATA
app.post('/ideas', (req, res) => {
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


// 6.6. EDIT FROM PROCESS
app.put('/ideas/:id', (req, res) => {
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

// 6.7 DELETE AN IDEA
app.delete('/ideas/:id', (req, res) => {
  Idea.deleteOne({ _id: req.params.id })
    .then(() => {
      req.flash('success_msg', 'Video Idea Removed');
      res.redirect('/ideas');
    });
});


// 7. SERVER LISTEN
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
