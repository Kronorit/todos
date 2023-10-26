import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const API = 'todos';
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage(API, []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed);
  const uncompletedTodos = todos.filter(todo => !todo.completed)
  const totalTodos = todos.length;

  function completeTodo(todoText) {
    const todoIndex = todos.findIndex((todo)=>todoText === todo.text);
    let newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  function deleteTodo(todoText) {
    const todoIndex = todos.findIndex((todo)=>todoText === todo.text);
    let newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return(
    <TodoContext.Provider value={{
      completedTodos,
      uncompletedTodos,
      totalTodos,
      todos,
      completeTodo,
      deleteTodo,
      searchValue,
      setSearchValue
    }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }