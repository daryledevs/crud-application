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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?</p>
      <h5>Price: P{current_index.price}</h5>
    </div>
  )
}

export default FullPage