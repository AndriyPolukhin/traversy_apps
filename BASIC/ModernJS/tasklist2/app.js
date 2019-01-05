// 1. SET THE VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// 2. CREATE THE EVENT LOADERS
// 2.1 Load all event listeners
loadEventListeners();
// 2.2 Load all event listeners
function loadEventListeners() {
  // 2.2.0 DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // 2.2.1 Add Task event
  form.addEventListener('submit', addTask);
  // 2.2.2 Remove Task event
  taskList.addEventListener('click', removeTask);
  // 2.2.3 Clear Task event
  clearBtn.addEventListener('click', clearTasks);
  // 2.2.4 Filter Task event
  filter.addEventListener('keyup', filterTasks);
}
// 3. CREATE THE FUNCTIONS

// 3.0 Get tasks from ls
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // 3.0.1 Display them to UI
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-eraser"></li>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// 3.1 Add Task function
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('Add a task');
  }
  // 3.1.1 Create li element
  const li = document.createElement('li');
  // 3.1.2 Add a class
  li.className = 'collection-item';
  // 3.1.3 Create a text node
  li.appendChild(document.createTextNode(taskInput.value));
  // 3.2.1 Create a link element
  const link = document.createElement('a');
  // 3.2.2 Add a class to the link
  link.className = 'delete-item secondary-content';
  // 3.2.3 Add icon html to the link
  link.innerHTML = '<i class="fas fa-eraser"></li>';
  // 3.2.4 Append the link to li
  li.appendChild(link);
  // 3.3.1 Append the li to the ul
  taskList.appendChild(li);

  // 3.5. Store in local Storage
  storeTaskInLocalStorage(taskInput.value);

  // 3.4.1 Clear the input
  taskInput.value = '';
}

// 3.5.1 FUNCTION TO STORE IN LS
function storeTaskInLocalStorage(task) {
  let tasks;
  // 3.5.2 Are there tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // 3.5.3 Get if any
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // 3.5.4 Push to array
  tasks.push(task);
  // 3.5.5 Return to localStroage
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// 4. Remove Task function
function removeTask(e) {
  // 4.1.1 Check for the right element
  if (e.target.parentElement.classList.contains('delete-item')) {
    // 4.1.2 Confirm deletion
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      // 4.1.3 Remove Task from LocalStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// 4.1 Remove from ls
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
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

// 5. Clear Tasks function
function clearTasks() {
  // 5.1 Remove all the tasks v1.
  // taskList.innerHTML = '';
  // 5.2 Remove all the taks v2 with a while loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // 5.3 Clear from LS
  clearTasksFromLocalStorage();
}

// 5.3.1 Clear the tasks from ls
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// 6. Filter task function
function filterTasks(e) {
  // 6.1.1 What is typed in the input
  const text = e.target.value.toLowerCase();
  // 6.1.2 Get all the list items
  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}