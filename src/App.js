import React from "react";
import Home from "./component/Content/Home";
import BaseLayout from "./component/BaseLayout";
import AddLayout from "./component/Function/AddLayout";
import EditLayout from './component/Function/EditLayout';
import FullPage from './component/Content/FullPage'
import{Routes, Route} from 'react-router-dom'
function App() {
  const [itemData, setItemData] = React.useState([
    {
      id: 1,
      imageURL : 'https://via.placeholder.com/300x250?',
      name: 'Item 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
      price: '500'
    },
    {
      id: 2,
      imageURL : 'https://via.placeholder.com/300x250?',
      name: 'Item 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
      price: '500'
    },
    {
      id: 3,
      imageURL : 'https://via.placeholder.com/300x250?',
      name: 'Item 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
      price: '500'
    }
  ]);
  // console.log(storeItem.name)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home/>} /> 
          <Route path='page/:id' element={<FullPage/>}/>
          <Route path="add">
            <Route index element={<AddLayout/>}/> 
          </Route>
          <Route path="edit/:id">
            <Route index element={<EditLayout />} />
          </Route> {/* end route of "Edit" path */}
        </Route> {/* BaseLayout end routes */}
      </Routes> 
    </div>
  );
}
export default App;