// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter task event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LocalStorage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<li class="fas fa-eraser"></li>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task')
  }
  // create li element
  const li = document.createElement('li');
  // Add a class
  li.className = 'collection-item';
  // create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // create a new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // add the icon
  link.innerHTML = '<i class="fas fa-eraser"></i>';
  // append the link to li
  li.appendChild(link);
  // Append the li to ul
  taskList.appendChild(li);
  // Store in localStorage
  storeTaskInLocalStorage(taskInput.value);
  // clear the input
  taskInput.value = '';
  e.preventDefault();
}

// Store Task in LocalStorage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from localStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove Task from localStorage
function removeTaskFromLocalStorage(taskItem) {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks(e) {
  // taskList.innerHTML = '';
  // faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocalStorage();
}

// Clear tasks from localStorage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}