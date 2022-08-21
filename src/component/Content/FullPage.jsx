import React from 'react'
import {useParams} from 'react-router-dom'
const FullPage = ({itemData}) => {
  const {id} = useParams();
  const current_index = itemData.find((list) => (list.id).toString() === id);
  return (
    <div className='full-page-container'>
  
      <div className='img-container'>
       <img src={current_index.imageURL}/>
      </div>
      <h1>{current_index.name}</h1>
      <p>{current_index.description}</p>
      <h5>Price: P{current_index.price}</h5>
    </div>
  )
}

export default FullPage