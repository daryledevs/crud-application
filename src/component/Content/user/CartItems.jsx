import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllItems } from '../../../redux file/features/ItemSlice'
import { selectBalance } from '../../../redux file/features/UserBalance';
import { increaseQuantity, decreaseQuantity, removeCartItem } from '../../../redux file/features/CartSlice';
import { selectAllCart } from '../../../redux file/features/CartSlice';
const DataToElements = () => {
  const itemData = useSelector(selectAllItems);
  const cart = useSelector(selectAllCart);
  const cartItems = cart.itemList
  const dispatch = useDispatch();
  let price = itemData.price;
  let availableItem = itemData.availableItem;

  function removeItem(id){
    dispatch(removeCartItem(id));
  }
  return (
    <tbody>
      {
        cartItems.map(cartItemsData => (
          <tr key={cartItemsData.id}>
            <td>{cartItemsData.productName}</td>
            <td className='quantity-container'>
              <button className='decrement' onClick={() => dispatch(decreaseQuantity({id: cartItemsData.id, price}))}>-</button>
              <span className='item-quantity'>{cartItemsData.quantity}</span>
              <button className='increment' onClick={() => dispatch(increaseQuantity({id: cartItemsData.id,price, availableItem}))}>+</button>
            </td>
            <td>{cartItemsData.totalPrice}</td>
            <td className='remove-button-container'>
              <button className='remove-button' onClick={() => removeItem(cartItemsData.id)}>X</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default DataToElements