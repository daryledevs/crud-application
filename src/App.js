import React from "react";
import Home from "./component/Content/Home";
import BaseLayout from "./component/BaseLayout";
import AddLayout from "./component/Function/AddLayout";
import EditLayout from './component/Function/EditLayout';
import FullPage from './component/Content/FullPage'
import{Routes, Route} from 'react-router-dom'
function App() {
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