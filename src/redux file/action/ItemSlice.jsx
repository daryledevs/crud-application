import { createSlice } from "@reduxjs/toolkit";

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
    addItem(state, action){
      const newItem = action.payload
      const newItemData = {
                           id: newItem.id, 
                           name: newItem.name, 
                           imageURL: newItem.imageURL, 
                           description: newItem.description, 
                           price: newItem.price
                          };
      // console.log(`newItemData: ${newItem.id}`)
      state.push(newItemData)
    },
    editItem(state, action){
      const updateItem = action.payload
      const updateItemData = {
                           id: updateItem.id, 
                           name: updateItem.name, 
                           imageURL: updateItem.imageURL, 
                           description: updateItem.description, 
                           price: updateItem.price
                          };
      const duplicate_item = [...state];
      duplicate_item[updateItem.id - 1] = updateItemData;
      return duplicate_item
    },
    deleteItem(state, action){
      const id = action.payload
      const delete_id = state.filter(find_ID => find_ID.id !== id);
      return delete_id
    }
  }
});
export const { addItem, editItem, deleteItem} = itemSlice.actions;
export const selectAllItems = (state) => state.item;
export default itemSlice.reducer;




