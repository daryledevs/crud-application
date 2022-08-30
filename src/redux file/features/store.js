import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "./ItemSlice";
import SwitchModeReducer from "./SwitchMode";
import CartReducer from "./CartSlice";
import UserBalanceReducer from "./UserBalance";

const store = configureStore({
  reducer:{
    item: itemSliceReducer,
    mode: SwitchModeReducer,
    cart: CartReducer,
    balance: UserBalanceReducer
  }
});
// Action ---> Reducer /store ---> Reducer
export default store;