import '../style.css';

function TodoItem({ text }) {
  return (
    <li className="todo">
      <span className='todo_complete-button'></span>
      <span className='todo_text'>{text}</span>
      <span className='todo_delete-button'>X</span>
    </li>
  );
}

export { TodoItem };