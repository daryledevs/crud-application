import React from 'react'
import {Link} from 'react-router-dom'
const DataToElements = ({itemData, setItemData}) => {

  function handleDelete(id){
    const delete_id = itemData.filter(find_ID => find_ID.id !== id);
    const new_itemData = delete_id.map(({id, name, imageURL, price}) => {
      return {id: (id-1), name: name, imageURL: imageURL, price: price}
    })
    setItemData(new_itemData); 
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