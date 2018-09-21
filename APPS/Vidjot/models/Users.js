/*
* USERS SCHEMA / MODEL
*
*/

// 1. DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 2. CREATE SCHEMA
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// 3. MODEL
mongoose.model('users', UserSchema);