import { configureStore } from '@reduxjs/toolkit';
import treeReducer from './slices/treeSlice';

export const store = configureStore({
  reducer: {
      trees: treeReducer
  },
})