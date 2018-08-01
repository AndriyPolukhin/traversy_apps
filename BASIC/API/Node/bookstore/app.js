const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initiate the body Parser and format (a must for post request)
app.use(bodyParser.json());

//  Get the models
Genre = require('./models/genre');
Book = require('./models/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('please use /api/books or /api/genres');
});

// ALL REQUEST FOR GENRE MODEL

// Get all the genres
app.get('/api/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

// Route for add genre
app.post('/api/genres', (req, res) => {
  const genre = req.body;
  Genre.addGenre(genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});


// Route for updating a genre
app.put('/api/genres/:_id', (req, res) => {
  const id = req.params._id;
  const genre = req.body;
  Genre.updateGenre(id, genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

// Route to delete a gener
app.delete('/api/genres/:_id', (req, res) => {
  const id = req.params._id;
  Genre.removeGenre(id, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

// ALL REQUEST FOR BOOK MODEL
// Get all the books
app.get('/api/books', (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});
// Get the book by id
app.get('/api/books/:_id', (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

// Add a book
app.post('/api/books', (req, res) => {
  const book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

// Update a book
app.put('/api/books/:_id', (req, res) => {
  const id = req.params._id;
  const book = req.body;
  Book.updateBook(id, book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});


// Delete a book
app.delete('/api/books/:_id', (req, res) => {
  const id = req.params._id;
  Book.removeBook(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});




app.listen(3000, () => console.log('Running on port 3000...'));
