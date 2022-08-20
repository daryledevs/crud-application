import React from 'react'
import DataToElements from './DataToElements';
import './home.css'

function Home(props) {
  return (
    <div className='home-container'>
      <table className='home-table'>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Image</td>
          <td>Price</td>
          <td>Operation</td>
        </thead>
        <DataToElements {...props}/>
      </table>
    </div>
  );
};

export default Home