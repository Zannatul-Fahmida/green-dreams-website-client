import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './slices/plantSlice';

export const store = configureStore({
  reducer: {
      plants: plantReducer
  },
})