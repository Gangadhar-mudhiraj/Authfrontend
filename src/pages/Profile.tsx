import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <p className="text-gray-900">{user?.name}</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <p className="text-gray-900">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;