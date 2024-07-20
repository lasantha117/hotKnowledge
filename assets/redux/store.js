import { configureStore } from '@reduxjs/toolkit';
import pointsReducer from './pointsSlice';

const store = configureStore({
  reducer: {
    points: pointsReducer,
  },
});

export default store;
