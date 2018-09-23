/**
 * MODULE DEPENDENCIES
 */
const
  express = require('express'),
  logger = require('morgan'),
  path = require('path'),
  bParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  mongodbStore = require('connect-mongo')(session);
//===========================================================
/**
 * CREATE APP INSTANCE
 */
const app = express();
//===========================================================
/**
 * MODULE VARIABLES
 */
const
  config = require('./config/config'),
  port = process.env.PORT || 3030,
  env = config.env,
  router = require('./routes/routes'),
  dbURL = config.dbURL,
  app.locals.errMsg = app.locals.errMsg || null;
//===========================================================
/**
 * MODULE SETTINGS AND CONFIG
 */
app.set('port', port);
app.set('env', env);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect(dbURL);
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('There was a db connection error');
  return console.error(err.message);
});
db.once('connected', () => {
  return console.log('Susscessfully connected to ' + dbURL);
});
db.once('disconnected', () => {
  return console.log('Successfully disconnected from ' + dbURL);
});
//===========================================================
/**
 * MIDDLEWARE
 */
app.use(logger('dev'));

app.use(bParser.json());

app.use(bParser.urlencoded({ extended: true }));

app.use(session({
  name: 'xpressBlu.sess',
  store: new mongodbStore({
    mongooseConnection: mongoose.connection,
    touchAfter: 24 * 3600
  }),
  secret: 'qwertyuiop123456789',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 15 }
}));
//===========================================================
/**
 * ROUTES
 */
app.use('/', router);
//===========================================================
/**
 * EXPORT MODULE
 */
module.exports = app;
//===========================================================