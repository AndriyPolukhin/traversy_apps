// State Pattern
const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState);
  }

  this.change = function (state) {
    currentState = state;
  }
};

// Home State
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
  `;
};

// About state
const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};

// About state
const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
};

// Instantiate the page state
const page = new PageState();

// Init the first state
page.init();

// UI varables
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);
  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState);
  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);
  e.preventDefault();
})