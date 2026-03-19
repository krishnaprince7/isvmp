import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      
      {/* Sidebar ko uski current state pass kar rahe hain */}
      <SideBar isOpen={isSidebarOpen} />

      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fafc]">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Layout;