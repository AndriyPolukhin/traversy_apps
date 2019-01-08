const http = new EasyHTTP();

// get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// user data
const data = {
  name: 'Andriy Polukhin',
  username: 'Andruha',
  email: 'andriy.polukhin@gmail.com'
};

// post user
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));


// Update a User by ID!
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete Users by ID
http.delete('https://jsonplaceholder.typicode.com/users/4')
  .then(data => console.log(data))
  .catch(err => console.log(err));