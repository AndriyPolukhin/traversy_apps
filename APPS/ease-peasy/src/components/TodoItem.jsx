import React from 'react';
import { useActions } from 'easy-peasy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo }) => {
  const { remove, toggle } = useActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? 'line-throught' : 'none' }}
    >
      <span onClick={() => toggle(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.title}
      </span>
      <button onClick={() => remove(todo.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default TodoItem;
