import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Wallet } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                InvestWise
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/saved" className="nav-link">Saved Schemes</Link>
            <Link to="/about" className="nav-link">About</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};