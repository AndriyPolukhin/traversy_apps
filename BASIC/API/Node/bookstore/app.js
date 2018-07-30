// 1. Import our dependencies and create an app
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// 2. Connect to mongoose Data Base | this needs to be actually create yet

mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

// 3. connect to a route using express app
app.get('/', (req, res) => {
  res.send('Please use /api/books or api/genres');
});

// 4. Get all the genres
app.get('/api/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

// Create a new gener
app.post('/api/genres', (req, res) => {
  const genre = req.body;
  Genre.addGenre(genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

// Get all the books
app.get('/api/books', (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

// Get One of the books
app.get('/api/books/:_id', (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

// Create a new book
app.post('/api/books', (req, res) => {
  let book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.listen(3000, () => {
  console.log('Running on port 3000...');
});
