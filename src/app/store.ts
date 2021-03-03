import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/counter/todoSlice';

export const store = configureStore( {
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  devTools: true
} );

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;