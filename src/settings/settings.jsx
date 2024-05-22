import React from 'react';
import '../settings.css';

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-white p-5 border-r">
        <div className="flex items-center mb-8">
          <img src="https://placehold.it/50x50" alt="avatar" className="rounded-full" />
          <div className="ml-4">
            <p className="text-zinc-700">John Doe</p>
            <p className="text-zinc-600">Admin</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="space-x-4">
              <a href="#" className="block p-5 rounded-lg shadow bg-white border">
                <p className="text-2xl">Home</p>
              </a>
            </li>
            <li className="space-x-4">
              <a href="#" className="block p-5 rounded-lg shadow bg-white border">
                <p className="text-2xl">Dashboard</p>
              </a>
            </li>
            <li className="space-x-4">
              <a href="#" className="block p-5 rounded-lg shadow bg-white border">
                <p className="text-2xl">Users</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 bg-zinc-100 p-5">
        <h1 className="text-zinc-700 text-2xl mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg">User Information</h2>
            <div className="mt-1">
              <p className="text-red-500">Username:</p>
              <p className="text-zinc-600">John Doe</p>
            </div>
            <div className="mt-1">
              <p className="text-red-500">Email:</p>
              <p className="text-zinc-600">john.doe@example.com</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg">Profile Picture</h2>
            <img src="https://placehold.it/150x150" alt="profile" className="w-16 h-16 mt-1 object-cover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;