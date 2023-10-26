import { TodoItem } from "./TodoItem";
import './style.css';

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo=>(<TodoItem key={todo.text} text={todo.text}/>))}
    </ul>
  );
}

export { TodoList };