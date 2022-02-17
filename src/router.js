import React, { useContext } from 'react';
import { Route, Navigate, Routes, Outlet, BrowserRouter } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

function RequireAuth() {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    console.log("still loading...");
    return <h1>Loading...</h1>;
  }

  if (!authenticated) {
    console.error("user not authenticated !");
    return <Navigate to="/login" />
  }

  console.log("authenticated !");
  return <Outlet />;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path='/users' element={<Users />} />
        </Route>
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}