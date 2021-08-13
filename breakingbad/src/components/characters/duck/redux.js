import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {ALL_CHARACTER} from '../../../utils/Constants';

const initialState = {
    listOfCharacters: [{}]
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const characterSlice = createSlice({
  name: 'characterInit',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initApi: (state, action) => {
      state.listOfCharacters = action.payload;  
    }
  }
});

export const { initApi } = characterSlice.actions;


export const charactersList = state => state.characterInit.charactersList;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const charactersList = (state) => state.characterInit.listOfCharacters;

export default characterSlice.reducer;
