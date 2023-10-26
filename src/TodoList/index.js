import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../TodoContext";
import './style.css';

function TodoList() {
  const {todos} = React.useContext(TodoContext);

  return (
    <ul className="todo-list">
      {todos.map(todo=>(<TodoItem key={todo.text} text={todo.text}/>))}
    </ul>
  );
}

export { TodoList };