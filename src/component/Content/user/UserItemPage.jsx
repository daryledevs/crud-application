import React from 'react'
import { selectAllItems } from '../../../redux file/features/ItemSlice';
import { selectAllCart } from '../../../redux file/features/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addToCart, increaseQuantity, decreaseQuantity, cancelBuy } from '../../../redux file/features/CartSlice';
const UserItemPage = () => {
  const {id} = useParams();
  const itemData = useSelector(selectAllItems);
  const amount = useSelector(selectAllCart);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const current_index = itemData.find((list) => (list.id).toString() === id);
  let price = current_index.price;
  let availableItem = current_index.availableItem;
  let productName = current_index.name;
  let productPrice = price;
  let productAvailableItem = availableItem;
  
  function notify(functionName){
    if(amount.quantity === 0){
      alert("Please input how many items will you order.");
      functionName(() => false);
    }
  }
  
  function handleBuy(event){
    event.preventDefault();
    notify(handleBuy);
    dispatch(addToCart({id, productName, productPrice, productAvailableItem}));
    navigation('/cart');
  }
  
  function handleAddToCart(event){
    event.preventDefault();
    notify(handleAddToCart);
    alert("This is added to the cart!");
    dispatch(addToCart({id, productName, productPrice, productAvailableItem}));
  } 

  function handleCancel(){
    dispatch(cancelBuy());
    navigation('/');
  }
  return (
    <div className='item-page-container'>
      <div className='item-info'>
       <img className='item-image' src={current_index.imageURL}/>
       <div className='next-to-img'>
        <h1 className='item-text-accent'>{current_index.name}</h1>
        <h5><span className='item-text-accent'>Price: </span>P{current_index.price}</h5>
        <div className='counter'>
          <button onClick={() => dispatch(decreaseQuantity({price}))}>-</button>
          <p>{amount.quantity}</p>
          <button onClick={() => dispatch(increaseQuantity({price, availableItem}))}>+</button>
        </div>
        <p className='number-of-items'><span className='item-text-accent'>Available Items: </span>{current_index.availableItem}</p>
        <p><span className='item-text-accent'>Total amount: </span>{amount.totalPrice} Php</p>
        <div className='item-page-buttons'>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuy}>Buy Now</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
       </div>
      </div>  
      <h2 className='item-text-accent'>Description</h2>
      <p>{current_index.description}</p>
      <h3 className='item-text-accent'>Place</h3>
      <p>{current_index.place}</p>
    </div>
  )
}

export default UserItemPage