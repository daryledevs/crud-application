import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    itemList:[],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action){
      const newItem = action.payload;
      const isExist = state.itemList.find(find_id => find_id.id === newItem.id);
      if(isExist){
        alert('this is already exist!')
        return;
      }
      state.itemList.push({
        id: newItem.id,
        productName: newItem.productName,
        productPrice: newItem.productPrice,
        productAvailableItem: newItem.productAvailableItem,
        quantity: state.quantity,
        totalPrice: state.totalPrice,
      })
      state.quantity = 0;
      state.totalPrice = 0;
    },
    removeCartItem(state, action){
      const id = action.payload;
      let delete_item = state.itemList.filter(find_ID => find_ID.id !== id);
      state.itemList = delete_item;
    },
    increaseQuantity(state, action){
      const {id, price, availableItem} = action.payload;
      const existingItem = state.itemList.find(find_id => find_id.id === id);

      if(state.quantity === availableItem) return;
      
      if(existingItem){
        if(existingItem.quantity === existingItem.productAvailableItem) return;
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.productPrice * existingItem.quantity
      } else{
        state.quantity += 1;
        state.totalPrice = price * state.quantity;
      }
    },
    decreaseQuantity(state, action){
      const {id, price} = action.payload;
      const existingItem = state.itemList.find(find_id => find_id.id === id);
      // console.log(`id: ${id}, existing item: ${existingItem}`);

      if(existingItem){
        if(existingItem.quantity === 0) return;
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.productPrice * existingItem.quantity;
      } else{
        if(state.quantity === 0) return;
        state.quantity -= 1;
        state.totalPrice = price * state.quantity;
      }
    },
    clearItems(state){
      state.itemList = [];
    },
    cancelBuy(state){
      state.quantity *= 0;
      state.totalPrice *= 0;
    }
  }
});

export const {addToCart, increaseQuantity, decreaseQuantity, removeCartItem, clearItems, cancelBuy} = cartSlice.actions;
export const selectAllCart = (state) => state.cart;
export default cartSlice.reducer;