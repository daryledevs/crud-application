import { createSlice } from "@reduxjs/toolkit";
import AdminAction from '../action/mode action/AdminAction';
import UserAction from '../action/mode action/UserAction';
const initialState = {
  isUserModeOn: false
};


const switchMode = createSlice({
  name: 'mode',
  initialState,
  reducers:{
    switchToAdmin: AdminAction,
    switchToUser: UserAction,
  }
});
export const { switchToAdmin, switchToUser} = switchMode.actions;
export const selectAllMode = (state) => state.mode;
export default switchMode.reducer; 