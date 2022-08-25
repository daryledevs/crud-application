import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { editItem, selectAllItems } from '../../redux file/features/ItemSlice';
import { useDispatch, useSelector } from 'react-redux';
function EditLayout() {
  const [imageURL, setImageURL] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');

  const dispatch = useDispatch();
  const itemData = useSelector(selectAllItems)
  const navigation = useNavigate();
  const {id} = useParams();
  const current_item = itemData.find((list) => (list.id).toString() === id);
  
  React.useEffect(()=>{
    setName(current_item.name);
    setImageURL(current_item.imageURL);
    setDescription(current_item.description);
    setPrice(current_item.price);
  
  }, [current_item, setName,setImageURL, setPrice, setDescription])

  function refreshState(){
    setName('');
    setImageURL('');
    setPrice('');
  };
  
  function handleCancel(){
    refreshState();
    navigation('/');
  };

 

  function priceOnChange(event){
    const prevent_letters = event.target.value.replace(/[^0-9]/gi, '');
    setPrice(prevent_letters)
  }

  function editSubmit(event){
    event.preventDefault();

    const index_id = id - 1;
    let isNameExist;

    for (let index = 0; index < itemData.length; index++) {
      if(index.toString() !== index_id.toString()){
        isNameExist = (itemData[index].name).toLowerCase() === name.toLowerCase()
        if(isNameExist){
          window.alert("Name already exists!") 
          return false
        }
      }
    }
    dispatch(editItem({id, name, imageURL, description, price}));
    refreshState();
    navigation('/');
  };
  
  return (
    <div className='edit-layout-container'>
      <form className='editForm' onSubmit={event => event.preventDefault()}>
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
        <label htmlFor='description'>Description:</label>
        <textarea
          id="description"
          type="text"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor='price'>Price:</label>
        <input
          id="price"
          type="text"
          required
          value={price}
          onChange={priceOnChange}
        />
        <div className='Buttons'>
          <button onClick={editSubmit}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditLayout