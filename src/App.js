import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { SearchTodos } from './SearchTodos';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const API = 'todos';

function useLocalStorage(API, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  let savedItem = localStorage.getItem(API);
  let parsedItem;

  if(savedItem){
    parsedItem = JSON.parse(savedItem);
  } else {
    localStorage.setItem(API, JSON.stringify(initialValue));
    setItem(initialValue)
  }

  function saveItem(newItem) {
    let newItems = [...item];
    newItems.push(newItem);
    localStorage.setItem(API, JSON.stringify(newItems));
    setItem(newItems);
  }

  return [parsedItem, saveItem];
}

function App() {
  const [todos] = useLocalStorage(API, []);
  return (
    <>
      <TodoCounter/>
      <SearchTodos/>
      <TodoList todos={todos}/>
      <CreateTodoButton/>
    </>
  );
}

export default App;
