/*
* PRIMARY FILE FOR THE APP
*
*/

// 1. DEPENDENCIES
const express = require('express');
const app = express();
const port = 5000;
const exphbs = require('express-handlebars');

// 2. HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// 3. Set the routers

// 3.1 INDEX ROUTE
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// 3.2 ABOUT ROUTE
app.get('/about', (req, res) => {
  res.render('about');
});

// 4. SERVER LISTEN
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
