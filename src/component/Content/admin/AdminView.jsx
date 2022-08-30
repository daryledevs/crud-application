import React from 'react'
import DataToElements from './DataToElements';
import './adminview.css'

function AdminView() {
  return (
    <div className='home-container'>
      <table className='home-table'>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Image</td>
          <td>Price</td>
          <td className='available-item-title'>Available <br/>Item</td>
          <td>Operation</td>
        </thead>
        <DataToElements/>
      </table>
    </div>
  );
};

export default AdminView