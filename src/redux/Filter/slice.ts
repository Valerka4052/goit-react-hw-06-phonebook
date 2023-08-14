import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = string
const initialState: InitialStateType = "";

export const myFilterSlice = createSlice({
  name: 'myFilter',
  initialState,
  reducers: {
    getFlter(state:InitialStateType, action:PayloadAction<string>) {
      return state = action.payload;
    },
  }
});
export const { getFlter } = myFilterSlice.actions;
