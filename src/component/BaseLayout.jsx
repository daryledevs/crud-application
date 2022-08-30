import React from 'react';
import Navigation from './base/Navigation';
import Footer from './base/Footer';

import {Outlet} from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className='base-layout-container'>
      <header className='header-container'>
        <h1>CRUD Application</h1>
      </header>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default BaseLayout