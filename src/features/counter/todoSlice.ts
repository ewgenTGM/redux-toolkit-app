import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface TodoState {
  todos: Array<string>
}

const initialState: TodoState = {
  todos: [ 'Написать свой собственный редакс', 'Попить пивка', 'Купить хлеб' ]
}

export const todoSlice = createSlice( {
  name: 'todo',
  initialState,
  reducers: {
    addTodo: ( state, action: PayloadAction<string> ) => {
      state.todos.unshift( action.payload );
    },
    removeLastTodo: ( state ) => {
      state.todos.pop();
    }

  }
} );

export const { addTodo, removeLastTodo } = todoSlice.actions;

export const addTodoAsync = ( title: string ): AppThunk => dispatch => {
  setTimeout( () => {
    dispatch( addTodo( title ) );
  }, 2000 );
};

export const selectTodo = ( state: RootState ) => state.todo.todos;

export default todoSlice.reducer;