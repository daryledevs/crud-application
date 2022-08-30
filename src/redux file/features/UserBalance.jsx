import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userReceipt: [],
  userBalance: 5000,
}

const userBalance = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    addReceipt(state, action){
      state.userReceipt = [...action.payload]
    },
    addBalanceO(state, action){
      state.userBalance += parseInt(action.payload);
    },
    updateBalance(state, action){
      state.userBalance = action.payload.userBalance
    }
  }
})

export const { addReceipt, addBalanceO, updateBalance } = userBalance.actions;
export const selectBalance = (state) => state.balance;
export default userBalance.reducer;