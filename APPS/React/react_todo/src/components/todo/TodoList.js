import React from 'react'
import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types'


export const TodoList = (props) => {
  return (
    <div className='Todo-List'>
      <ul>
        {props.todos.map(todo =>
          <TodoItem
            handleToggle={props.handleToggle}
            handleRemove={props.handleRemove}
            key={todo.id}
            {...todo}
          />
        )}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}