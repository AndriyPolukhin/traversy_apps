/**
 * I Book Constructor:
 * creating the book object
 */
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


/**
 * II UI Constructor:
 * set of prototypes method( add book, show alert, etc)
 */
// 2.0 UI CONSTRUCTOR
function UI() { }
// 2.1 Add Book to List
UI.prototype.addBookToList = function (book) {
  // 2.1.1 Get the list from html
  const list = document.getElementById('book-list');
  // 2.1.2. Create a tr element
  const row = document.createElement('tr');
  // 2.1.3 Create tje  html fo the row
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  // 2.1.4 Append the html to the row
  list.appendChild(row);
};

// 2.2 Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// 2.3 Show Alert
UI.prototype.showAlert = function (message, className) {
  // 2.3.1 Create a div
  const div = document.createElement('div');
  // 2.3.2 Add Classes
  div.className = `alert ${className}`;
  // 2.3.3. Add Text
  div.appendChild(document.createTextNode(message));
  // 2.3.4 Get a parent
  const container = document.querySelector('.container');
  // 2.3.5 get the form
  const form = document.querySelector('#book-form');
  // 2.3.5 Insert alert
  container.insertBefore(div, form);
  // 2.3.6 Hide the alert ini 3 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
};

// 2.4 Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};


/**
 * III EVENT LISTENER FOR ADD BOOK
 */
document.getElementById('book-form').addEventListener('submit', (e) => {
  // 3.1 Prevent Default form behavior
  e.preventDefault();
  // 3.2 Get the form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // 3.3. Book instantitation
  const book = new Book(title, author, isbn);
  // 3.4 UI Instantiation
  const ui = new UI();
  // 3.5 Validate
  if (title === '' || author === '' || isbn === '') {
    // 3.5.1 Error Alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // 3.6 Add book to list
    ui.addBookToList(book);
    // 3.7 Show success
    ui.showAlert('Book added to the list', 'success');
    // 3.8 Clear the fields
    ui.clearFields();
  }

});

/**
 * IV. Event listener for delete
 */
document.getElementById('book-list').addEventListener('click', (e) => {
  // 4.1 Prevent the default
  e.preventDefault();
  // 4.2 Set the ui
  const ui = new UI();
  // 4.3 Method to delete
  ui.deleteBook(e.target);
  // 4.4 Show an alert
  ui.showAlert('Book removed', 'success');
});
