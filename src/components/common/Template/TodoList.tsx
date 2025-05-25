import React from 'react';
import TodoListItem from 'components/common/Template/TodoListItem';

function TodoList({ todos, handleRemove, handleToggle }) {
  return (
    <ul>
      {todos.map((todo)=>{
        return (
          <TodoListItem
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
          />
        )
      })}
  </ul>
  )}

export default React.memo(TodoList);