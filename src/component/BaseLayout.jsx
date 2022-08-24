import React from 'react';
import Header from './Base/Header';
import Navigation from './Base/Navigation';
import Footer from './Base/Footer';

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