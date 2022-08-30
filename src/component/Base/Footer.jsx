import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllItems } from '../../redux file/features/ItemSlice';
import { selectAllMode } from '../../redux file/features/SwitchMode';
const Footer = () => {
  const itemData = useSelector(selectAllItems);
  const mode = useSelector(selectAllMode)
  const number_of_items = (arr) =>{
    if(arr.length > 1){
      return `${arr.length} items`
    } else {
      return `${arr.length} item`
    }
  }
  return (
    <footer  className='footer-container'>
      <h3>{mode.isUserModeOn? number_of_items(itemData) : `Happy Shopping!`} </h3>
    </footer>
  )
}

export default Footer