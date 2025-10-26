import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="bg-white border border-b-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
          </div>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user?.username || 'User'}</span>
                <Link
                  to="/dashboard"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;