import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllItems } from '../../redux file/action/ItemSlice'
const Footer = () => {
  const itemData = useSelector(selectAllItems);
  const number_of_items = (arr) =>{
    if(arr.length > 1){
      return `${arr.length} items`
    } else {
      return `${arr.length} item`
    }
  }
  return (
    <footer  className='footer-container'>
      <h3>{number_of_items(itemData)} </h3>
    </footer>
  )
}

export default Footer