import { createSlice } from '@reduxjs/toolkit';

const handleSlice = createSlice({
  name: 'handle click',
  initialState: {
    name: '',
    age: 0,
  },

  reducers: {
    clickHandle: (state, action) => {
      state.name = action.payload;
      state.age = 22;
    },
  },
});

export const { clickHandle } = handleSlice.actions;
export default handleSlice.reducer;
