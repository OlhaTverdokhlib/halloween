import React from 'react';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = ({ children }) => {
  return (
    <>
     
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      
    </>
  );
};

export default Layout;
