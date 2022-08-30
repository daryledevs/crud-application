import React from 'react'
import CartItems from './CartItems';
// icons
import { FaRegCreditCard } from 'react-icons/fa'
import { SiOpenstreetmap } from 'react-icons/si'
import { AiOutlineCalendar, AiFillLock } from 'react-icons/ai'
// tools
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { format } from 'date-fns';
// redux things
import { selectBalance, updateBalance } from '../../../redux file/features/UserBalance';
import { clearItems, selectAllCart } from '../../../redux file/features/CartSlice';
import { updateAvailableItem } from '../../../redux file/features/ItemSlice';
import { addReceipt } from '../../../redux file/features/UserBalance';
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllCart);
  const amount    = useSelector(selectBalance);
  const [show, setShow] = React.useState(false);
  const navigation = useNavigate()
  let total = 0;
  let cartItems = cart.itemList;
  let id, quantity, name, price;
  let cart_replica = [];
  cartItems.forEach(item => {
    total += item.totalPrice;
    id = item.id;
    name = item.productName;
    quantity = item.quantity;
    price = item.productPrice;
    cart_replica.push({id, name, quantity, price, date: format ( new Date(), 'do MMMM Y')})
  });

  function toggleForm(){
    setShow(!show)
  }

  function handleSubmit(event){
    event.preventDefault();
    let subTotal = 0;
    if(total > amount.userBalance){
      alert('Not enough balance!');
      return false;
    }
    console.log(cart_replica)
    subTotal= amount.userBalance - total;
    dispatch(updateBalance({userBalance: subTotal}));
    dispatch(addReceipt(cart_replica))
    dispatch(clearItems()); // clear items
    dispatch(updateAvailableItem(cart_replica)); // update the available item
    total = 0;
    subTotal = 0;
    alert('Thank you!')
    navigation('/receipt')
  }
  return (
    <div className='home-container'>
    <table className='home-table'>
      <thead>
        <td>Product Name</td>
        <td>Quantity</td>
        <td>Total Price</td>
        <td>Remove</td>
      </thead>
      <CartItems/>
    </table>
    <button className='place-order' disabled={cartItems.length === 0} onClick={toggleForm}>Place Order </button>
    {
      show? 
      <div className='payment-window-bg' >
      <div className='payment-window'>
        <button className='payment-window-close' onClick={toggleForm}>X</button>
        <form className='payment-details-form' onSubmit={handleSubmit}>
          <label htmlFor='name' className='label-icon'><FaRegCreditCard/></label>
          <input
           id="name"
           type="text"g
           placeholder='Credit Card Number'
           required
          />
          <label htmlFor="street"><SiOpenstreetmap/></label>
          <input 
            type="text" 
            id="street" 
            required
            placeholder='Street Address'
          />
          <label htmlFor="expiringDate"><AiOutlineCalendar/></label>
          <input 
            type="text" 
            id="expiringDate" 
            required
            placeholder='Expiring MM/YY' 
          />
          <label htmlFor="ccvCode"><AiFillLock/></label>
          <input 
            type="text" 
            id="ccvCode" 
            required
            placeholder='CCV Code'
          />
          <label htmlFor="postalCode"></label>
          <input 
            type="text" 
            id='postalCode' 
            required
            placeholder='Postal Code'
          />
          <div className='transaction-container'>
            <p><span>Balance: </span>{amount.userBalance}</p>
            <p><span>Sub Total:</span> {total}</p>
            <p><span>Remaining Balance:</span> {amount.userBalance - total}</p>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
    : null
    }
  </div>
  )
}

export default Cart