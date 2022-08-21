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
    setAddPrice,
    addDescription,
    setAddDescription,
  }) => {

  const navigation = useNavigate();

  function refreshState(){
    setAddName('');
    setAddImageURL('');
    setAddPrice('');
    setAddDescription('');
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

  function addItem(id, name, imageURL, description, price){
    const special_char = /^[a-z]/
    const price_input = special_char.test(price)
    
    if(itemData.find(same_name => same_name.name.toLowerCase() === addName.toLowerCase())) {
      window.alert("Name already exists!") 
      return false
    }
    if(price_input){
      window.alert("Letters is not allowed in Price field, only numbers.");
      return false;
    }
    const newItemData = {id, name: name, imageURL: imageURL, description: description, price: price};
    const addNewItemData = [...itemData, newItemData];
    setItemData(addNewItemData);
    refreshState();
    navigation('/');
  };
  
  function addSubmit(event){
    event.preventDefault();
    const newID = create_newID(itemData);
    addItem(newID, addName, addImageURL, addDescription, addPrice);
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
        <label htmlFor='addDescription'>Description:</label>
        <textarea
          id="addDescription"
          type="text"
          required
          value={addDescription}
          onChange={(event) => setAddDescription(event.target.value)}
        />
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