import React from 'react'
import './base.css'
import { Link } from 'react-router-dom'
import {switchToAdmin} from '../../redux file/features/SwitchMode'
import { useDispatch } from 'react-redux'
import burger_svg from './burger.svg'
import { useSelector } from 'react-redux';
import { selectBalance, addBalanceO } from '../../redux file/features/UserBalance';
const UserNavigation = () => {
  const [show, setShow] = React.useState(false);
  const [openBalance, setOpenBalance] = React.useState(false);
  const [amount, setAmount] = React.useState(null)
  const dispatch = useDispatch();
  const openMenu = () => {
    setShow(!show);
  }
  const balanceBtn = () => {
    setOpenBalance(!openBalance);
  }
  function addBalance(event){
    event.preventDefault();
    dispatch(addBalanceO(amount));
    setAmount(null);
    setOpenBalance(!show);
  }
  const balance = useSelector(selectBalance);
  return (
    <nav className='navigation-container'>
      <p className='user-balance'>Current Balance:<span className='balance'> P{balance.userBalance}</span> <button onClick={balanceBtn}>ADD</button></p>
      {openBalance? <div className='add-balance-form-bg'>
        <form className='add-balance-form' onSubmit={addBalance}>
          <button className='balance-close-btn' onClick={balanceBtn}>X</button>
          <span>
            <label htmlFor=''>Amout:</label>
            <input 
              id='amount'
              type="text"
              required
              placeholder='How much?'
              value={amount} 
              onChange={(event) => setAmount(event.target.value)}
            />
          </span>
          <button className='balance-submit-btn'>Submit</button>
        </form>
      </div> 
      : null}
      <Link to='admin' onClick={() => dispatch(switchToAdmin())}><p>Admin</p></Link>
      {show? 
        <>
          <Link to='/'><p>Home</p></Link>
          <Link to='cart'><p>Cart</p></Link>
          <Link to='receipt'><p>Receipt</p></Link>
        </>
        : null
      }
      <img className='burger-svg' onClick={openMenu} src={burger_svg}/>
    </nav>
  )
}

export default UserNavigation