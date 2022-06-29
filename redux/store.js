import { configureStore } from '@reduxjs/toolkit';
import handleSlice from './handleSlice';

const store = configureStore({
  reducer: {
    nameState: handleSlice,
  },
});

export default store;
