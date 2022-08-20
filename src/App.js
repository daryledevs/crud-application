import React from "react";
import Home from "./component/Content/Home";
import BaseLayout from "./component/BaseLayout";
import AddLayout from "./component/Function/AddLayout";
import EditLayout from './component/Function/EditLayout';
import FullPage from './component/Content/FullPage'
import{Routes, Route} from 'react-router-dom'


function App() {
  // state for adding items
  const [addImageURL, setAddImageURL] = React.useState('');
  const [addName, setAddName] = React.useState('');
  const [addPrice, setAddPrice] = React.useState('');
  // state for editing items
  const [editImageURL, setEditImageURL] = React.useState('');
  const [editName, setEditName] = React.useState('');
  const [editPrice, setEditPrice] = React.useState('');
  // state for data
  const [itemData, setItemData] = React.useState([
    {
      id: 1,
      imageURL : 'https://via.placeholder.com/300x250?',
      name: 'Item 1',
      price: '500'
    },
    {
      id: 2,
      imageURL : 'https://via.placeholder.com/300x250?',
      name: 'Item 2',
      price: '500'
    },
    {
      id: 3,
      imageURL : 'https://via.placeholder.com/300x250?',
      name: 'Item 3',
      price: '500'
    }
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout itemData={itemData}/>}>
          <Route index element={
            <Home
              itemData={itemData}
              setItemData={setItemData}
            />} 
          /> {/* Home end route */}
          <Route path='page/:id' element={<FullPage itemData={itemData} />}
          />
          <Route path="add">
            <Route index element={
              <AddLayout
                itemData={itemData}
                setItemData={setItemData}
                addName={addName}
                setAddName={setAddName}
                addImageURL={addImageURL}
                setAddImageURL={setAddImageURL}
                addPrice={addPrice}
                setAddPrice={setAddPrice}
              />
              }
            /> {/* element AddLayout end route */}
          </Route> {/* end route of "Add" path */}
          <Route path="edit/:id">
            <Route index element={
              <EditLayout 
                itemData={itemData}
                setItemData={setItemData}
                editName={editName}
                setEditName={setEditName}
                editImageURL={editImageURL}
                setEditImageURL={setEditImageURL}
                editPrice={editPrice}
                setEditPrice={setEditPrice}
              />} />
          </Route> {/* end route of "Edit" path */}
        </Route> {/* BaseLayout end routes */}
      </Routes> 
    </div>
  );
}
export default App;

