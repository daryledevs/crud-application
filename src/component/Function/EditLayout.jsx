import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function EditLayout({
  itemData, 
  setItemData,
  editName,
  setEditName,
  editImageURL,
  setEditImageURL,
  editPrice,
  setEditPrice,
  editDescription,
  setEditDescription
}) {
  const navigation = useNavigate();
  const {id} = useParams();
  const current_item = itemData.find((list) => (list.id).toString() === id);
  
  React.useEffect(()=>{
    
    setEditName(current_item.name);
    setEditImageURL(current_item.imageURL);
    setEditDescription(current_item.description);
    setEditPrice(current_item.price);
  
  }, [current_item, setEditName,setEditImageURL, setEditPrice])

  function refreshState(){
    setEditName('');
    setEditImageURL('');
    setEditPrice('');
  };
  function handleCancel(){
    refreshState();
    navigation('/');
  };

  function updateItem(id, updateName, updateImageURL, updateDescription,updatePrice){
    const index_id = id - 1;
    let isNameExist;

    for (let index = 0; index < itemData.length; index++) {
      if(index.toString() !== index_id.toString()){
        isNameExist = (itemData[index].name).toLowerCase() === updateName.toLowerCase()
        if(isNameExist){
          window.alert("Name already exists!") 
          return false
        }
      }
    }

    const updateItemData = {id, name: updateName, imageURL: updateImageURL, description: updateDescription, price: updatePrice};
    const some_array = [...itemData];
    some_array[current_item.id - 1] = updateItemData;
    setItemData(some_array);
    refreshState();
    navigation('/');
  }

  function priceOnChange(event){
    const prevent_letters = event.target.value.replace(/[^0-9]/gi, '');
    setEditPrice(prevent_letters)
  }

  function editSubmit(event){
    event.preventDefault();
    updateItem(id, editName, editImageURL, editDescription, editPrice);
  };
  
  return (
    <div className='edit-layout-container'>
      <form className='editForm' onSubmit={event => event.preventDefault()}>
        <label htmlFor='editName'>Name:</label>
        <input
          id="editName"
          type="text"
          required
          value={editName}
          onChange={(event) => setEditName(event.target.value)}
        />
        <label htmlFor='editImageURL'>Image:</label>
        <input
          id="editImageURL"
          type="text"
          required
          value={editImageURL}
          onChange={(event) => setEditImageURL(event.target.value)}
        />
        <label htmlFor='editDescription'>Description:</label>
        <textarea
          id="editDescription"
          type="text"
          required
          value={editDescription}
          onChange={(event) => setEditDescription(event.target.value)}
        />
        <label htmlFor='editPrice'>Price:</label>
        <input
          id="editPrice"
          type="text"
          required
          value={editPrice}
          onChange={priceOnChange}
        />
        <div className='editButtons'>
          <button onClick={editSubmit}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditLayout