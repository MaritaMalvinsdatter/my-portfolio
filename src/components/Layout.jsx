// Layout.jsx:

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header/>}
      <Outlet />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default Layout;
