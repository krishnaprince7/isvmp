import React from 'react';
import { PanelLeft, Search, ChevronDown, Bell } from 'lucide-react';

// Props me toggleSidebar receive kiya
const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm w-full">
      
      <div className="flex items-center flex-1 gap-4">
        <button 
          onClick={toggleSidebar} 
          className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md transition-colors focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <PanelLeft className="w-5 h-5" />
        </button>

        <div className="relative flex items-center w-full max-w-lg bg-gray-50/50 border border-gray-200 rounded-md px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400">
          <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search buses, schools, districts..."
            className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 pl-4">
        <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">
          All Districts
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        <button className="relative p-1.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors focus:outline-none">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer pl-2 border-l border-gray-200">
          <div className="flex items-center justify-center w-8 h-8 bg-[#1a2b53] text-white rounded-full text-xs font-bold tracking-wider">
            TC
          </div>
          <span className="text-sm font-semibold text-[#1a2b53]">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;