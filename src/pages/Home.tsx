import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to MERN Auth</h1>
      {user ? (
        <p className="text-xl text-gray-600">
          Hello, {user.name}! You are logged in.
        </p>
      ) : (
        <p className="text-xl text-gray-600">
          Please login or register to get started.
        </p>
      )}
    </div>
  );
};

export default Home;