/**
 * Helper functions
 */

// 1. Add Todo Functions
export const addTodo = (list, item) => [...list, item]

// 2. Generate Id function
export const generateId = () => Math.floor(Math.random() * 10000)

// 3. findById function
export const findById = (id, list) =>
  list.find(item => item.id === id)

// 4. ToggleTodo function
export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete })

// 5. Update Todo function
export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ]
}

// 6. Remove Todo Function
export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex + 1)
  ]
}

// 7. Filter Todos Function
export const filterTodos = (list, route) => {
  switch (route) {
    case '/active':
      return list.filter(item => !item.isComplete)
    case '/complete':
      return list.filter(item => item.isComplete)
    default:
      return list
  }
}