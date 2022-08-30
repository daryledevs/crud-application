import { createSlice } from "@reduxjs/toolkit";
import addItemAction from "../action/item action/addItemAction";
import editItemAction from "../action/item action/editItemAction";
import deleteItemAction from "../action/item action/deleteItemAction";
import updateItemStockAction from "../action/item action/updateItemStockAction";
const initialState = [
  {
    id: 1,
    imageURL : 'https://via.placeholder.com/300x250?',
    name: 'Item 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    ratings: 6,
    reviews: 70,
    availableItem: 5,
    price: 500,
    place: 'Manila, Metro Manila'
  },
  {
    id: 2,
    imageURL : 'https://via.placeholder.com/300x250?',
    name: 'Item 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    ratings: 5.5,
    reviews: 100,
    availableItem: 4,
    price: 400,
    place: 'Manila, Metro Manila'
  },
  {
    id: 3,
    imageURL : 'https://via.placeholder.com/300x250?',
    name: 'Item 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    ratings: 4.5,
    reviews: 30,
    availableItem: 3,
    price: '300',
    place: 'Manila, Metro Manila'
  }
]

const itemSlice = createSlice({
  name: 'item',
  initialState, 
  reducers:{
    // action creator: action
    addItem: addItemAction,
    editItem: editItemAction,
    updateAvailableItem: updateItemStockAction,
    deleteItem: deleteItemAction,
  }
});
export const { addItem, editItem, deleteItem, updateAvailableItem} = itemSlice.actions;
export const selectAllItems = (state) => state.item;
export default itemSlice.reducer;




