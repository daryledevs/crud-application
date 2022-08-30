import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../../redux file/features/ItemSlice';
import {Link} from 'react-router-dom';
import star from './star.png'
const DisplayItems = () => {
  const itemData = useSelector(selectAllItems);
  return (
    <div className='display-item-container'>
      {
        itemData.map(item => (
          <Link to={`item/${item.id}`} >
            <ul className='display-item-list-container' key={item.id}>
              <li><img src={item.imageURL}/></li>
              <li><h2>{item.name}</h2></li>
              <li className='star-container'><img className='star-img' src={star}/><span>({item.ratings})</span><span>{item.reviews}</span></li>
              <li>P{item.price}</li>
              <li>{item.place}</li>
            </ul>
          </Link>
          ))
        }
    </div>
  )
}

export default DisplayItems