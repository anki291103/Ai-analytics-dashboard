// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { FaBell, FaUserCircle, FaSearch, FaMoon, FaSun, FaLightbulb, FaBars } from 'react-icons/fa'; // Added FaBars

interface HeaderProps {
  onSearch: (query: string) => void;
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onToggleSidebar: () => void; // NEW: Prop for mobile sidebar toggle
}

const Header: React.FC<HeaderProps> = ({ onSearch, onToggleDarkMode, isDarkMode, onToggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      onSearch(searchQuery.trim());
      setSearchQuery('');
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery.trim());
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 shadow-sm p-4 flex items-center justify-between border-b dark:border-gray-700">
      {/* Mobile Hamburger Icon */}
      <button
        onClick={onToggleSidebar}
        className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ml-2"
        aria-label="Toggle sidebar"
      >
        <FaBars className="text-xl" />
      </button>

      {/* AI Search Bar */}
      <div className="relative flex-1 max-w-lg mx-4">
        <input
          type="text"
          placeholder="Ask me about sales, users, or anomalies (e.g., 'sales last 30 days', 'anomalies')"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ease-in-out
                     shadow-inner dark:shadow-md-dark"
        />
        <FaLightbulb className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500 text-xl" />
        <button
          onClick={handleSearchClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors duration-200"
          aria-label="Search or Ask AI"
        >
          <FaSearch className="text-lg" />
        </button>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4 mr-4">
        <button
          onClick={onToggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
        <button
          className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Notifications"
        >
          <FaBell className="text-xl" />
        </button>
        <button
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="User Profile"
        >
          <FaUserCircle className="text-3xl" />
          <span className="font-medium hidden sm:block">John Doe</span>
        </button>
      </div>
    </header>
  );
};

export default Header;