import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "./ItemSlice";
const store = configureStore({
  reducer:{
    item: itemSliceReducer
  }
});

export default store;