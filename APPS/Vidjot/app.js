/*
* PRIMARY FILE FOR THE APP
*
*/

// 1. DEPENDENCIES
// 1.1. Main Express
const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path');
// 1.2 Engine and method override
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
// 1.3 Database and session
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');


// 2. Init the app variable
const app = express();
// 2.2 Load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');
// 2.3 Load the passport/database configs
require('./config/passport')(passport);
const db = require('./config/database');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// 3. Connect to mongoose
mongoose.connect(db.mongoURI, {
  // useNewUrlParser: true,
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



// 5. MIDDLEWARE
// 5.1 Handlerbars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

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
// 5.5 Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// 5.5. FLASH CONNECT
app.use(flash());

// 5.6 GLOBAL VARIABLES
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// 6. ROUTES:
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

// 6.3 USE ROUTES
app.use('/ideas', ideas);
app.use('/users', users);



// 7. SERVER LISTEN
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
