import React from 'react'
import './base.css'
import { Link } from 'react-router-dom'
import burger_svg from './burger.svg'
import {switchToUser} from '../../redux file/features/SwitchMode'
import { useDispatch } from 'react-redux'

const AdminNavigation = () => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const openMenu = () => {
    setShow(!show)
  }

  return (
    <nav className='navigation-container'>
    <Link to='/' onClick={() => dispatch(switchToUser())}><p>User</p></Link>
    {show? 
      <>
        <Link to='admin'><p>Home</p></Link>
        <Link to='admin/add'><p>Add</p></Link>
      </>
      : null
    }
    <img className='burger-svg' onClick={openMenu} src={burger_svg}/>
  </nav>
  )
}

export default AdminNavigation