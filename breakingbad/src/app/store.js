import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../components/characters/duck/redux'
export const store = configureStore({
  reducer: {
    characterInit: characterReducer,
  },
});
