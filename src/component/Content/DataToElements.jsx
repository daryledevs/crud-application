import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllItems } from '../../redux file/action/ItemSlice'
import { deleteItem } from '../../redux file/action/ItemSlice';
const DataToElements = () => {
  const itemData = useSelector(selectAllItems);
  const dispatch = useDispatch();
  function handleDelete(id){
    dispatch(deleteItem(id));
    console.log(itemData)
  }
  return (
    <tbody>
      {
        itemData.map((tableData) => (        
            <tr key={tableData.id}>
              
                <td><Link to={`page/${tableData.id}`} className='data-link'>{tableData.id}</Link></td>
                <td><Link to={`page/${tableData.id}`} className='data-link'>{tableData.name}</Link></td>
                <td><Link to={`page/${tableData.id}`} className='data-link'><img src={tableData.imageURL} width="40px"/></Link></td>
                <td><Link to={`page/${tableData.id}`} className='data-link'>{tableData.price}</Link></td>
                <td className='last-item'>
                <Link to={`edit/${tableData.id}`}><button className='edit-button'>Edit</button></Link>
                <button className='delete-button'
                  onClick={() => handleDelete(tableData.id)}
                >Delete</button>
              </td>
            </tr>
        ))
      }
    </tbody>
  )
}

export default DataToElements