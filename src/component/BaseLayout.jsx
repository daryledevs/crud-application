import React from 'react';
import Header from './base/Header';
import Navigation from './base/Navigation';
import Footer from './base/Footer';

import {Outlet} from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className='base-layout-container'>
      <Header/>      
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default BaseLayout