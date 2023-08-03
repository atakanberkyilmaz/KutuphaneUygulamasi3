import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './BookSlice';

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
