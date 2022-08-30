import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../../redux file/features/UserBalance';
const Receipt = () => {
  const balance = useSelector(selectBalance);
  const receipt = balance.userReceipt;

  const receiptElements = receipt.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.quantity}</td>
      <td>{element.price}</td>
      <td>{element.date}</td>
    </tr> 
  ))
  console.log(receipt)
  return (
    <table className='receipt-table'>
      <thead>
        <td>ID</td>
        <td>Name</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Date</td>
      </thead>
      <tbody>
        {receiptElements}
      </tbody>
    </table>
  )
}

export default Receipt