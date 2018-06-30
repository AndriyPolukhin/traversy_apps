interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(`${todo.title} ${todo.text}`);
}

let myTodo = { title: "Kiss", text: "Anastasia" };

showTodo(myTodo);
