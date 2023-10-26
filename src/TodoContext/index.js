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

  return(
    <TodoContext.Provider value={{
      completedTodos,
      uncompletedTodos,
      totalTodos,
      todos,
      searchValue,
      setSearchValue
    }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }