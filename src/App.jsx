import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import './styles/globals.scss';

const MainPage = lazy(() => import('./pages/MainPage'));
const Layout  = lazy(() => import('./components/Layout/Layout'));






function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
