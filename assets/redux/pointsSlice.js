import { createSlice } from '@reduxjs/toolkit';

export const pointsSlice = createSlice({
  name: 'points',
  initialState: {
    totalPoints: 0,
    hotBalance: 0, // Add hotBalance to the initial state
  },
  reducers: {
    addPoints: (state, action) => {
      state.totalPoints += action.payload;
    },
    setPoints: (state, action) => {
      state.totalPoints = action.payload;
    },
    setHotBalance: (state, action) => { // Add a reducer for setting hotBalance
      state.hotBalance = action.payload;
    },
  },
});

export const { addPoints, setPoints, setHotBalance } = pointsSlice.actions;

export default pointsSlice.reducer;
