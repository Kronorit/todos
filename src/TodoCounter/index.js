import React from 'react';
import { TodoContext } from '../TodoContext';
import './styles.css'

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    <p className="todo-counter">Has completado <span>{completedTodos.length}</span> de <span>{totalTodos}</span> TODOS</p>
  );
}

export { TodoCounter }