import './App.css';
import { TodoCounter } from './TodoCounter';
import { SearchTodos } from './SearchTodos';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import React from 'react';
import { TodoContext } from './TodoContext';

function AppUI(){
  const {openModal} = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter/>
      <SearchTodos/>
      <TodoList/>
      <CreateTodoButton/>
      {openModal && 
      <Modal>
        <TodoForm/>
      </Modal>}
      
    </>
  );
}

export { AppUI };