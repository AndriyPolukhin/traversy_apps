
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// Load User Model
require('./models/User');

// Require passport and add passport configs
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');
const index = require('./routes/index');
// Load Keys
const keys = require('./config/keys');
// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
})
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));


const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

/**
 * ROUTES
 */

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set GLOBAL VARS
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use('/auth', auth);
app.use('/', index);



const port = process.env.PORT || 5000;

/**
 * LISTENER
 */
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});