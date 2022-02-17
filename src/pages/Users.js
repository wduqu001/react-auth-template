import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../api';
import { Context } from '../Context/AuthContext';

export default function Users() {
  const { handleLogout } = useContext(Context);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  }, []);

  const getUsers = () => {
    return (
      <div className="flex flex-wrap">
        {users.map((user) => (
          <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4" key={user.id}>
            <div className="flex flex-col">
              <a href={user.website} >
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={user.photo} />
              </a>

              <div className="mt-2">
                <h1 className="text-gray-900 text-xl font-bold  text-center">
                  {user.name}
                </h1>

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 text-4xl font-bold mb-8">
                Meet the users
              </h1>

              <p className="text-gray-700 text-lg font-light">
                The more diverse your team, the better you'll be at identifying what a diversity of users perceive as problems. — David Livermore
              </p>
            </div>
          </div>
          {getUsers()}
        </div>
      </div>


      <button
        className="text-base font-medium rounded-lg p-3"
        aria-label="Logout"
        type="button"
        onClick={() => handleLogout(() => navigate('/login'))}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
          </path>
        </svg>
        Logout
      </button>
    </>
  );
}
