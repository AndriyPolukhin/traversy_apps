/*
* IDEA SCHEMA / MODEL
*
*/

// 1. DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 2. CREATE SCHEMA
const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// 3. MODEL
mongoose.model('ideas', IdeaSchema);
