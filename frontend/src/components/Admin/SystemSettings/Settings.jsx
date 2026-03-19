import React, { useState } from 'react';
import { Settings as SettingsIcon, MapPin, ShieldCheck, Bell, Building } from 'lucide-react';
import General from './Submodules/General';
import District from './Submodules/District';
import Compliance from './Submodules/Compliance';
import Notifications from './Submodules/Notifications';
import VendorApproved from './Submodules/VendorApproved';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');

  // Tab definitions with their respective icons
  const tabs = [
    { id: 'General', label: 'General', icon: SettingsIcon },
    { id: 'Districts', label: 'Districts', icon: MapPin },
    { id: 'Compliance Rules', label: 'Compliance Rules', icon: ShieldCheck },
    { id: 'Notifications', label: 'Notifications', icon: Bell },
    { id: 'Vendor Approval', label: 'Vendor Approval', icon: Building },
  ];

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">System Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Configure system parameters, compliance rules, and notifications</p>
      </div>

      {/* Tabs Navigation */}
      <div className="inline-flex bg-slate-100/80 p-1.5 rounded-xl mb-6 shadow-inner overflow-x-auto max-w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm rounded-lg transition-all duration-200 whitespace-nowrap ${
                isActive 
                  ? 'bg-white text-slate-800 font-bold shadow-sm' 
                  : 'text-slate-500 font-medium hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              <Icon size={16} className={isActive ? "text-[#1e3a8a]" : "text-slate-400"} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Area */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        
        {/* --- GENERAL TAB CONTENT --- */}
        {activeTab === 'General' && (
          <General/>
        )}

        {/* --- OTHER TABS PLACEHOLDERS --- */}
        {activeTab === 'Districts' && (
          <District/>
        )}

        {activeTab === 'Compliance Rules' && (
          <Compliance/>
        )}

        {activeTab === 'Notifications' && (
          <Notifications/>
        )}

        {activeTab === 'Vendor Approval' && (
          <VendorApproved/>
        )}

      </div>
    </div>
  );
};

export default Settings;