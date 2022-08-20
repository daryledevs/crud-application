import React from 'react';
import Header from './Base/Header';
import Navigation from './Base/Navigation';
import Footer from './Base/Footer';

import {Outlet} from 'react-router-dom';

const BaseLayout = ({itemData}) => {
  return (
    <div className='base-layout-container'>
      <Header/>
      <Navigation/>
      <Outlet/>
      <Footer itemData={itemData} />
    </div>
  )
}

export default BaseLayout