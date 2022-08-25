import { createSlice } from "@reduxjs/toolkit";
import addItemAction from "../action/addItemAction";
import editItemAction from "../action/editItemAction";
import deleteItemAction from "../action/deleteItemAction";
const initialState = [
  {
    id: 1,
    imageURL : 'https://via.placeholder.com/300x250?',
    name: 'Item 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    price: '500'
  },
  {
    id: 2,
    imageURL : 'https://via.placeholder.com/300x250?',
    name: 'Item 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    price: '500'
  },
  {
    id: 3,
    imageURL : 'https://via.placeholder.com/300x250?',
    name: 'Item 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    price: '500'
  }
]

const itemSlice = createSlice({
  name: 'item',
  initialState, 
  reducers:{
    // action creator: action
    addItem: addItemAction,
    editItem: editItemAction,
    deleteItem: deleteItemAction
  }
});
export const { addItem, editItem, deleteItem} = itemSlice.actions;
export const selectAllItems = (state) => state.item;
export default itemSlice.reducer;




