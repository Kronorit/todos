import React from 'react';
import '../style.css';
import { TodoContext } from '../../TodoContext';

function TodoItem({ text, completed }) {
  const {completeTodo, deleteTodo} = React.useContext(TodoContext);

  return (
    <li className={completed ? 'todo completed' : 'todo uncompleted'}>
      <span className='todo_complete-button' onClick={()=>completeTodo(text)}></span>
      <span className='todo_text'>{text}</span>
      <span className='todo_delete-button' onClick={()=>deleteTodo(text)}>X</span>
    </li>
  );
}

export { TodoItem };