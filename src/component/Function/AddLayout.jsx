import React from 'react'
import './addLayout.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectAllItems } from '../../redux file/features/ItemSlice';
const AddLayout = () => {
  const [imageURL, setImageURL] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [availableItem, setAvailableItem] = React.useState('');
  const [description, setDescription] = React.useState('');

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const itemData = useSelector(selectAllItems);

  function refreshState(){
    setName('');
    setImageURL('');
    setPrice('');
    setAvailableItem('');
    setDescription('');
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
  
  function addSubmit(event){
    event.preventDefault();

    if(itemData.find(same_name => same_name.name.toLowerCase() === name.toLowerCase())){
      window.alert("Name already exists!") 
      return false
    }
    
    const id = create_newID(itemData);
    dispatch(addItem({id, name, imageURL, description, availableItem, price}));
    refreshState();
    navigation('/admin');
  }

  function priceOnChange(event){
    const prevent_letters = event.target.value.replace(/[^0-9]/gi, '');
    setPrice(prevent_letters)
  }

  function handleCancel(){
    refreshState();
    navigation('/admin');
  }
  return (
    <div className='add-layout-container'>
      <form className='addForm' onSubmit={addSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor='imageURL'>Image:</label>
        <input
          id="imageURL"
          type="text"
          required
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />
        <p className='example'>i.e.: https://via.placeholder.com/300x250?</p>
        <label htmlFor='description'>Description:</label>
        <textarea
          id="description"
          type="text"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor='price'>Available Item:</label>
        <input
          id="price"
          type="text"
          required
          value={availableItem}
          onChange={(event) => setAvailableItem(event.target.value)}
        />
        <label htmlFor='price'>Price:</label>
        <input
          id="price"
          type="text"
          required
          value={price}
          onChange={priceOnChange}
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