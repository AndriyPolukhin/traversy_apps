
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// Load  Models
require('./models/User');
require('./models/Story');

// Require passport and add passport configs
require('./config/passport')(passport);


// Load Routes FILES
const auth = require('./routes/auth');
const index = require('./routes/index');
const stories = require('./routes/stories');

// Load Keys
const keys = require('./config/keys');
// Handlebars helpres
const {
  truncate,
  stripTags,
  formatDate,
  select
} = require('./helpers/hbs');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
})
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));


const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method override Middleware
app.use(methodOverride('_method'));

// Handlebars Middleware
app.engine('handlebars', exphbs({
  helpers: {
    truncate: truncate,
    stripTags: stripTags,
    formatDate: formatDate,
    select: select
  },
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


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/auth', auth);
app.use('/stories', stories);


const port = process.env.PORT || 5000;

/**
 * LISTENER
 */
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});