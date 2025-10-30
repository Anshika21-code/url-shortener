import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Linkify
            </Link>
          </div>

          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              to="/customization"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Customization
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-700">Welcome, {user?.username || 'User'}</span>
                <Link
                  to="/dashboard"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
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
