import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Map, UserSquare, GraduationCap, ShieldCheck, School,
  Users, Bus, ClipboardList, CheckCircle, AlertTriangle, MapPin,
  BarChart2, Trophy, Bell, Smartphone, UserCog, Settings, LogIn
} from 'lucide-react';

const SideBar = ({ isOpen }) => {
  // Navigation links ki styling, jab open ho toh left align, close ho toh center align
  const navLinkClasses = ({ isActive }) => 
    `flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-blue-600/20 text-blue-400' 
        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
    }`;

  return (
    <aside 
      // yahan w-64 (open) aur w-20 (closed mini-sidebar) ka transition hai
      className={`h-screen bg-[#1a233a] shadow-xl z-20 overflow-hidden flex flex-col font-sans transition-all duration-300 ease-in-out shrink-0 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      
      {/* 1. Header / Logo Area */}
      <div className={`flex items-center py-5 border-b border-gray-700/50 ${isOpen ? 'px-6 gap-3' : 'justify-center px-0'}`}>
        <div className="w-10 h-10 shrink-0 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm">
          UP
        </div>
        {/* Sirf tabhi dikhega jab open ho */}
        {isOpen && (
          <div className="whitespace-nowrap transition-opacity duration-300">
            <h1 className="text-white font-bold text-lg leading-tight tracking-wide">ISVMP</h1>
            <p className="text-[10px] text-gray-400 font-medium">Transport Commissioner</p>
          </div>
        )}
      </div>

      {/* 2. Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
        
        {/* DASHBOARDS SECTION */}
        <div className="mb-4">
          {isOpen ? (
            <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Dashboards</h2>
          ) : (
            <div className="w-full h-px bg-gray-700/50 my-3"></div> // Close hone pe ek line aayegi
          )}
          <ul className="space-y-1">
            <li><NavLink to="/dashboard" className={navLinkClasses}><LayoutDashboard className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">State Dashboard</span>}</NavLink></li>
            <li><NavLink to="/district-dashboard" className={navLinkClasses}><Map className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">District Dashboard</span>}</NavLink></li>
            <li><NavLink to="/dm-dashboard" className={navLinkClasses}><UserSquare className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">DM Dashboard</span>}</NavLink></li>
            <li><NavLink to="/bsa-dashboard" className={navLinkClasses}><GraduationCap className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">BSA Dashboard</span>}</NavLink></li>
            <li><NavLink to="/police-dashboard" className={navLinkClasses}><ShieldCheck className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Police Dashboard</span>}</NavLink></li>
            <li><NavLink to="/school-dashboard" className={navLinkClasses}><School className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">School Dashboard</span>}</NavLink></li>
          </ul>
        </div>

        {/* MANAGEMENT SECTION */}
        <div className="mb-4">
          {isOpen ? (
            <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 mt-4">Management</h2>
          ) : (
            <div className="w-full h-px bg-gray-700/50 my-3"></div>
          )}
          <ul className="space-y-1">
            <li><NavLink to="/school-management" className={navLinkClasses}><School className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">School Management</span>}</NavLink></li>
            <li><NavLink to="/bus-management" className={navLinkClasses}><Bus className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Bus Management</span>}</NavLink></li>
            <li><NavLink to="/vendor-management" className={navLinkClasses}><Users className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Vendor Management</span>}</NavLink></li>
          </ul>
        </div>

        {/* COMPLIANCE SECTION */}
        <div className="mb-4">
          {isOpen ? (
            <h2 className="px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 mt-4">Compliance</h2>
          ) : (
            <div className="w-full h-px bg-gray-700/50 my-3"></div>
          )}
          <ul className="space-y-1">
            <li><NavLink to="/compliance-monitoring" className={navLinkClasses}><CheckCircle className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Compliance Monitoring</span>}</NavLink></li>
            <li><NavLink to="/inspections" className={navLinkClasses}><ClipboardList className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Inspections</span>}</NavLink></li>
            <li><NavLink to="/violations" className={navLinkClasses}><AlertTriangle className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Violations</span>}</NavLink></li>
            <li><NavLink to="/map-monitoring" className={navLinkClasses}><MapPin className="w-5 h-5 shrink-0" /> {isOpen && <span className="whitespace-nowrap">Map Monitoring</span>}</NavLink></li>
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
  );
};

export default SideBar;