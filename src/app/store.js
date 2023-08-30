import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from '../features/api/bookApi';
import bookReducer from '../features/books/booksSlice';

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    booksFilterInfo : bookReducer
  },
  middleware: (getDefaultMiddlewares) => 
    getDefaultMiddlewares().concat(bookApi.middleware)
  
});
