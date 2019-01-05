// Set local storage item;

// localStorage.setItem('name', 'Andriy');
// localStorage.setItem('age', '33');

// session storage
// sessionStorage.setItem('name', 'Anastasia');


// remove from storage
// localStorage.removeItem('name')

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// // clear localStorage
// console.log(name, age);



document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.getElementById('task').value;
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(tasks);

tasks.forEach((task) => console.log(task))
