'use strict';
/**
 * MODULE DEPENDENCIES
 */
const
  path = require('path'),
  bParser = require('body-parser'),
  logger = require('morgan'),
  config = require('./config/config'),
  express = require('express'),
  ejsLayouts = require('express-ejs-layouts'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  mongoStore = require('connect-mongo')(session);
//=======================================================
/**
 * CREATE APP INSTANCE
 */
const app = express();
//=======================================================
/**
 * MODULE VARIABLES
 */
let
  port = process.env.PORT || 3030,
  env = config.env,
  dbURL = config.dbURL,
  sessionSecret = config.sessionSecret,
  sessStore,
  db,
  userRoutes = require('./routes/root'),
  twitterRoutes = require('./routes/twitter'),
  fbRoutes = require('./routes/facebook');
app.locals.errMsg = app.locals.errMsg || null;
//=======================================================
/**
 * CONFIG AND SETTINGS
 */
require('clarify');
app.disable('x-powered-by');
app.set('port', port);
app.set('env', env);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout');
//=======================================================
/**
 * dBASE connection
 */
mongoose.connect(dbURL);
db = mongoose.connection;
db.on('error', (err) => {
  console.error('There was a db connection error');
  return console.erorr(err.message);
});
db.once('connected', () => {
  return console.log('Successfully connected to ' + dbURL);
});
db.once('disconnected', () => {
  return console.log('Successfully disconnected from ' + dbURL);
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.error('dBase connection closed due to app termination');
    return process.exit(0);
  });
});
sessStore = new mongoStore({
  mongooseConnection: mongoose.connection,
  touchAfter: 24 * 3600
});
//=======================================================
/**
 * MIDDLEWARE STACK
 */
app.use(logger('dev'));
app.use(bParser.json());
app.use(bParser.urlencoded({ extended: true }));
app.use(session({
  name: 'simpleLib.sess',
  store: sessStore,
  secret: sessionSecret,
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 15 }
}));
app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, 'public')));
//=======================================================
/**
 * ROUTES
 */
app.get('/test', (req, res) => {
  return res.status(200).json('All\'s well!!');
});
app.use('/', userRoutes);
app.use('/twitter', twitterRoutes);
app.use('/facebook', fbRoutes);
//=======================================================
/**
 * CUSTOM ERROR HANDLER
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).render('pages/errors');
});
//=======================================================
/**
 * EXPORT MODULE
 */
module.exports = app;
//=======================================================

















