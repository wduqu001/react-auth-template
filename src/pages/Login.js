import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Context } from '../Context/AuthContext';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => handleLogin(() => navigate('/users'))}>
      Entrar
    </button>
  );
}