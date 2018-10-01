
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Require passport and add passport configs
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');
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


/**
 * ROUTES
 */
app.get('/', (req, res) => {
  res.send('It works');
});

app.use('/auth', auth);



const port = process.env.PORT || 5000;

/**
 * LISTENER
 */
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});