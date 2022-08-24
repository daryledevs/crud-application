import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "../action/ItemSlice";
const store = configureStore({
  reducer:{
    item: itemSliceReducer
  }
});

export default store;