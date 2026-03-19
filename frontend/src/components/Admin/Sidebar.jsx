import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Map, UserSquare, GraduationCap, ShieldCheck, School,
  Users, Bus, ClipboardList, CheckCircle, AlertTriangle, MapPin, X,
  BarChart2, Trophy, Bell, UserCog, Settings, LogIn
} from 'lucide-react';

const SideBar = ({ isOpen, setSidebarOpen }) => {
  const navLinkClasses = ({ isActive }) => 
    `flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-blue-600/20 text-blue-400' 
        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
    }`;

  return (
    <>
      {/* Mobile Overlay Background - Only visible on small screens when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside 
        className={`fixed md:static h-screen bg-[#1a233a] shadow-xl z-30 overflow-hidden flex flex-col font-sans transition-all duration-300 ease-in-out shrink-0 ${
          isOpen ? 'w-64 translate-x-0' : 'w-64 md:w-20 -translate-x-full md:translate-x-0'
        }`}
      >
        
        {/* 1. Header / Logo Area */}
        <div className={`flex items-center py-5 border-b border-gray-700/50 relative ${isOpen ? 'px-6 gap-3' : 'justify-center px-0'}`}>
          <div className="w-10 h-10 shrink-0 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm">
            UP
          </div>
          {isOpen && (
            <div className="whitespace-nowrap transition-opacity duration-300 flex-1">
              <h1 className="text-white font-bold text-lg leading-tight tracking-wide">ISVMP</h1>
              <p className="text-[10px] text-gray-400 font-medium">Transport Commissioner</p>
            </div>
          )}
          
          {/* Mobile Close Button */}
          {isOpen && (
            <button 
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-gray-400 hover:text-white absolute right-4"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* 2. Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
          
          {/* DASHBOARDS SECTION */}
          <div className="mb-4">
            {isOpen ? (
              <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Dashboards</h2>
            ) : (
              <div className="w-full h-px bg-gray-700/50 my-3 hidden md:block"></div>
            )}
            <ul className="space-y-1">
              <li><NavLink to="/dashboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><LayoutDashboard className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">State Dashboard</span>}</NavLink></li>
              <li><NavLink to="/district-dashboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><Map className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">District Dashboard</span>}</NavLink></li>
              <li><NavLink to="/dm-dashboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><UserSquare className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">DM Dashboard</span>}</NavLink></li>
              <li><NavLink to="/bsa-dashboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><GraduationCap className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">BSA Dashboard</span>}</NavLink></li>
              <li><NavLink to="/police-dashboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><ShieldCheck className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Police Dashboard</span>}</NavLink></li>
              <li><NavLink to="/school-dashboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><School className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">School Dashboard</span>}</NavLink></li>
            </ul>
          </div>

          {/* MANAGEMENT SECTION */}
          <div className="mb-4">
            {isOpen ? (
              <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 mt-4">Management</h2>
            ) : (
              <div className="w-full h-px bg-gray-700/50 my-3 hidden md:block"></div>
            )}
            <ul className="space-y-1">
              <li><NavLink to="/school-management" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><School className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">School Management</span>}</NavLink></li>
              <li><NavLink to="/bus-management" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><Bus className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Bus Management</span>}</NavLink></li>
              <li><NavLink to="/vendor-management" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><Users className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Vendor Management</span>}</NavLink></li>
            </ul>
          </div>

          {/* COMPLIANCE SECTION */}
          <div className="mb-4">
            {isOpen ? (
              <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 mt-4">Compliance</h2>
            ) : (
              <div className="w-full h-px bg-gray-700/50 my-3 hidden md:block"></div>
            )}
            <ul className="space-y-1">
              <li><NavLink to="/compliance-monitoring" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><CheckCircle className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Compliance Monitoring</span>}</NavLink></li>
              <li><NavLink to="/inspections" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><ClipboardList className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Inspections</span>}</NavLink></li>
              <li><NavLink to="/violations" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><AlertTriangle className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Violations</span>}</NavLink></li>
              <li><NavLink to="/map-monitoring" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><MapPin className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Map Monitoring</span>}</NavLink></li>
            </ul>
          </div>

          {/* ANALYTICS SECTION */}
          <div className="mb-4">
            {isOpen ? (
              <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 mt-4">Analytics</h2>
            ) : (
              <div className="w-full h-px bg-gray-700/50 my-3 hidden md:block"></div>
            )}
            <ul className="space-y-1">
              <li><NavLink to="/reports-analytics" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><BarChart2 className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Reports & Analytics</span>}</NavLink></li>
              <li><NavLink to="/district-leaderboard" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><Trophy className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">District Leaderboard</span>}</NavLink></li>
              <li><NavLink to="/alerts-notifications" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><Bell className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Alerts & Notifications</span>}</NavLink></li>
            </ul>
          </div>

          {/* SYSTEM SECTION */}
          <div className="mb-4">
            {isOpen ? (
              <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 mt-4">System</h2>
            ) : (
              <div className="w-full h-px bg-gray-700/50 my-3 hidden md:block"></div>
            )}
            <ul className="space-y-1">
              <li><NavLink to="/user-management" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><UserCog className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">User Management</span>}</NavLink></li>
              <li><NavLink to="/settings" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)} className={navLinkClasses}><Settings className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Settings</span>}</NavLink></li>
              <li>
              <NavLink to=""
               onClick={() => window.innerWidth < 768 && setSidebarOpen(false)}
               className={navLinkClasses}><LogIn className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Login</span>}</NavLink></li>
            </ul>
          </div>

        </nav>

        {/* 3. Footer Profile Area */}
        <div className={`p-4 border-t border-gray-700/50 hover:bg-white/5 cursor-pointer transition-colors mt-auto flex items-center ${isOpen ? 'gap-3' : 'justify-center'}`}>
          <div className="w-8 h-8 shrink-0 rounded-full bg-[#2a3655] flex items-center justify-center text-blue-400 font-bold text-xs border border-gray-600">
            TC
          </div>
          {isOpen && (
            <div className="whitespace-nowrap">
              <p className="text-sm font-medium text-gray-200 leading-tight">Transport Commissioner</p>
              <p className="text-[10px] text-gray-500">State Level</p>
            </div>
          )}
        </div>

      </aside>
    </>
  );
};

export default SideBar;