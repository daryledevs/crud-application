import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemSliceReducer from "./ItemSlice";
import SwitchModeReducer from "./SwitchMode";
import CartReducer from "./CartSlice";
import UserBalanceReducer from "./UserBalance";
// const rootReducer = combineReducers({
//   item: itemSliceReducer,
//   cart: CartReducer
// })

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