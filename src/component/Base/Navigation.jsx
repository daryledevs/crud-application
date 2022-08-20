import React from 'react'
import './base.css'
import { Link } from 'react-router-dom'

import burger_svg from './burger.svg'
const Navigation = () => {
  const [show, setShow] = React.useState(false);

  const openMenu = () => {
    setShow(!show)
  }

  return (
    <nav className='navigation-container'>
      {show? 
        <>
          <Link to='/'><p>Home</p></Link>
          <Link to='add'><p>Add</p></Link>
        </>
        : null
      }
      <img className='burger-svg' onClick={openMenu} src={burger_svg}/>
    </nav>
  )
}

export default Navigation