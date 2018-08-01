const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = (callback, limit) => {
  Genre.find(callback).limit(limit);
};

// Add genre
module.exports.addGenre = (genre, callback) => {
  Genre.create(genre, callback);
};

// update genre
module.exports.updateGenre = (id, genre, callback) => {
  const query = { _id: id };
  const update = {
    $set: { name: genre.name }
  };
  const options = { upsert: true };
  Genre.findOneAndUpdate(query, update, options, callback);
};

// Delete genre
module.exports.removeGenre = (id, callback) => {
  const query = { _id: id };
  Genre.remove(query, callback);
}