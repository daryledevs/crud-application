import React from "react";
import AdminView from "./component/Content/admin/AdminView";
import UserView from "./component/Content/user/UserView";
import BaseLayout from "./component/BaseLayout";
import AddLayout from "./component/Function/AddLayout";
import EditLayout from './component/Function/EditLayout';
import FullPage from './component/Content/admin/FullPage';
import UserItemPage from "./component/Content/user/UserItemPage";
import Receipt from "./component/Content/user/Receipt";
import Cart from "./component/Content/user/Cart";
import{Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<UserView/>} />
          <Route path="item/:id" element={<UserItemPage/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="receipt" element={<Receipt/>}/>
          <Route path="admin">
            <Route index element={<AdminView/>} /> 
            <Route path='page/:id' element={<FullPage/>}/>
            <Route path="add">
              <Route index element={<AddLayout/>}/> 
            </Route>
            <Route path="edit/:id">
              <Route index element={<EditLayout />} />
            </Route> {/* end route of "Edit" path */}
          </Route>
        </Route> {/* BaseLayout end routes */}
      </Routes> 
    </div>
  );
}
export default App;