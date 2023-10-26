import React from 'react';
import './styles.css'
import { TodoContext } from '../TodoContext';

function SearchTodos() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  return (
    <input className='search-bar' 
            placeholder="Search" 
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)}/>
  );
}

export { SearchTodos }