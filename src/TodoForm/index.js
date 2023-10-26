import React from 'react';
import './styles.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
  const {setOpenModal, addTodo} = React.useContext(TodoContext);
  const [todoText, setTodoText] = React.useState('');

  return(
    <div className='form-container'>
      <form className='todo-form' onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoText);
        setOpenModal(false);
      }}>
        <label className='todo-form_title'>Agrega una tarea</label>
        <textarea className='todo-form_text' 
                  placeholder="Ingresa aquí una tarea"
                  value={todoText}
                  onChange={(e)=>{
                    setTodoText(e.target.value);
                  }}
        >
        </textarea> 
        <div className='todo-form_button-container'>
          <button className='todo-form_button'
                  onClick={(e)=>{
                    e.preventDefault();
                    setOpenModal(false);
                  }}>Cerrar</button>
          <button className='todo-form_button'>Guardar</button>
        </div>
      </form>
    </div>
  );
}

export {TodoForm};