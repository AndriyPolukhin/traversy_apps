// Instantiate
const http = new easyHTTP();

// Get Post
http.get('https://jsonplaceholder.typicode.com/posts', (error, posts) => {
  if (error) {
    console.log(error);
  } else {
    console.log(posts);
  }
});

// Get  Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', (error, post) => {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

// Create Data for Post
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Add post to the server
http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update the post on the server
http.put('https://jsonplaceholder.typicode.com/posts/5', data, (err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete the post on the server
http.delete('https://jsonplaceholder.typicode.com/posts/5', (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});






