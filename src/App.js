import React, { useContext } from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { SearchTodos } from './SearchTodos';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext, TodoProvider } from './TodoContext';

function App(){
  return (
    <TodoProvider>
        <TodoCounter/>
        <SearchTodos/>
        <TodoList/>
        <CreateTodoButton/>
    </TodoProvider>
  );
}

export default App;
