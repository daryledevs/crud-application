import React from 'react';
import Header from '../component/base/Header';
import Navigation from '../component/base/Navigation';
import Footer from '../component/base/Footer';

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