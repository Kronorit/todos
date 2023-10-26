import React from 'react';
import { TodoContext } from '../TodoContext'
import './styles.css';

function CreateTodoButton() {
  const {setOpenModal} = React.useContext(TodoContext)
  return(
    <button className='todo_create' onClick={()=>setOpenModal(true)}>
      +
    </button>
  )
}

export { CreateTodoButton };