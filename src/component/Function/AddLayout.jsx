import React from 'react'
import './addLayout.css'
import {useNavigate} from 'react-router-dom'
const AddLayout = (
  {
    itemData, 
    setItemData,
    addName,
    setAddName,
    addImageURL,
    setAddImageURL,
    addPrice,
    setAddPrice
  }) => {

  const navigation = useNavigate();
  
  function refreshState(){
    setAddName('');
    setAddImageURL('');
    setAddPrice('');
  };

  function create_newID(arr){
    const array_length = arr.length
    if(array_length){
      let get_ID = arr[array_length - 1].id;
      let new_ID = (get_ID + 1);
      return new_ID
    } else{
      return 1;
    }
  };

  function addItem(id, name, imageURL, price){
    const newItemData = {id, name: name, imageURL: imageURL, price: price};
    const addNewItemData = [...itemData, newItemData];
    setItemData(addNewItemData);
  };
  
  function addSubmit(event){
    event.preventDefault();
    const newID = create_newID(itemData);
    addItem(newID, addName, addImageURL, addPrice);
    refreshState();
    navigation('/')
  }

  function handleCancel(){
    refreshState();
    navigation('/');
  }
  return (
    <div className='add-layout-container'>
      <form className='addForm' onSubmit={addSubmit}>
        <label htmlFor='addName'>Name:</label>
        <input
          id="addName"
          type="text"
          required
          value={addName}
          onChange={(event) => setAddName(event.target.value)}
        />
        <label htmlFor='addImageURL'>Image:</label>
        <input
          id="addImageURL"
          type="text"
          required
          value={addImageURL}
          onChange={(event) => setAddImageURL(event.target.value)}
        />
        <p className='example'>i.e.: https://via.placeholder.com/300x250?</p>
        <label htmlFor='addPrice'>Price:</label>
        <input
          id="addPrice"
          type="text"
          required
          value={addPrice}
          onChange={(event) => setAddPrice(event.target.value)}
        />
        <div className='addButtons'>
          <button>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddLayout