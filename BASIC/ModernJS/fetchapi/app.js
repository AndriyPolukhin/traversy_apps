
// GET THE TEXT FROM THE FILE
getText = () => {
  fetch('test.txt')
    .then(res => res.text())
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
};

getJson = () => {
  fetch('posts.json')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

getAPI = () => {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

// Event listeners
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getAPI);
