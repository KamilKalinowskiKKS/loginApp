import React from 'react'
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { getToken } from './utils/session'
import ErrorPage from './compoments/ErrorPage';
import LoginPage from './compoments/LoginPage';
import HomePage from './compoments/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" exac element={<LoginPage />} />
          <Route exact path="HomePage" element={getToken() ? <HomePage /> : <Navigate to='/' replace />}/>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;