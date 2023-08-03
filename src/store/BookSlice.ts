import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import Book from '../types/Book';

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    updateBook(state, action: PayloadAction<Book>) {
      const bookIndex = state.books.findIndex((book) => book.id === action.payload.id);
      if (bookIndex !== -1) {
        state.books[bookIndex] = action.payload;
      }
    },
    deleteBook(state, action: PayloadAction<string>) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;


export const selectAllBooks = (state: RootState) => state.book.books;
