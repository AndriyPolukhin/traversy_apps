const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});


const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit);
}

// Get Book by Id
module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback);
}

// Add a book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback);
}

// Update a Book
module.exports.updateBook = (id, book, callback) => {
  const query = { _id: id };
  const update = {
    $set: {
      title: book.title,
      genre: book.genre,
      description: book.description,
      author: book.author,
      publisher: book.publisher,
      pages: book.pages,
      image_url: book.image_url,
      buy_url: book.buy_url
    }
  };
  const options = { upsert: true };
  Book.findOneAndUpdate(query, update, options, callback);
};


// Delete a book
module.exports.removeBook = (id, callback) => {
  const query = { _id: id };
  Book.remove(query, callback);
}