import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo, addTodo, removeLastTodo, addTodoAsync } from './todoSlice';

export const Todo: React.FC = () => {
  const todos = useSelector( selectTodo );
  const dispatch = useDispatch();
  const [ title, setTitle ] = useState<string>( '' );
  return (
      <>
        <input
            type="text"
            value={ title }
            onChange={ e => setTitle( ( e.currentTarget.value ) ) }/>
        <button onClick={ () => dispatch( addTodo( title ) ) }>Добавить</button>
        <button onClick={ () => dispatch( addTodoAsync( title ) ) }>Добавить async</button>
        { todos.map( el => {return ( <div>{ el }</div> );} ) }
        <button onClick={ () => dispatch( removeLastTodo() ) }>Удалить последний</button>
      </>
  );
};