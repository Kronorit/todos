import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../TodoContext";
import './style.css';

function TodoList() {
  const {todos, searchValue} = React.useContext(TodoContext);
  const searchedTodos = todos.filter(todo => todo["text"].toLowerCase().includes(searchValue))

  return (
    <ul className="todo-list">
      {searchedTodos.map(todo=>(<TodoItem 
                                  key={todo.text} 
                                  text={todo.text}
                                  completed={todo.completed}/>))}
    </ul>
  );
}

export { TodoList };