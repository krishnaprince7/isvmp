import React, { useState } from 'react';
import { Save } from 'lucide-react';

// Ek helper component taaki toggles baar-baar na likhne padein
const ToggleRow = ({ label, isOn, onToggle }) => {
  return (
    <div 
      className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
      onClick={onToggle}
    >
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <button 
        type="button"
        className={`w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none shrink-0 ${isOn ? 'bg-[#1e3a8a]' : 'bg-slate-200'}`}
      >
        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${isOn ? 'left-6' : 'left-1'}`}></div>
      </button>
    </div>
  );
};

const General = () => {
  // State to manage all the toggles
  const [toggles, setToggles] = useState({
    autoSchedule: true,
    smsAlerts: true,
    gpsTracking: false,
    vendorRegistration: true,
    riskPrediction: false,
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="animate-in fade-in duration-300">
      <h2 className="text-base font-bold text-slate-800 mb-6">General Settings</h2>
      
      {/* Top Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* System Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">System Name</label>
          <input 
            type="text" 
            defaultValue="School Bus Compliance Monitoring Portal"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
          />
        </div>

        {/* Organization */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Organization</label>
          <input 
            type="text" 
            defaultValue="Transport Commissioner Office, UP"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
          />
        </div>

        {/* Default Language */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Default Language</label>
          <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Time Zone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Time Zone</label>
          <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
            <option value="IST">IST (UTC+5:30)</option>
          </select>
        </div>
        
      </div>

      {/* System Features (Toggles) */}
      <div className="mb-8">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">System Features</h3>
        
        {/* Toggle List Container */}
        <div className="border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden shadow-sm">
          
          <ToggleRow 
            label="Auto-schedule inspections for expiring documents" 
            isOn={toggles.autoSchedule} 
            onToggle={() => handleToggle('autoSchedule')} 
          />
          <ToggleRow 
            label="Send SMS alerts for violations" 
            isOn={toggles.smsAlerts} 
            onToggle={() => handleToggle('smsAlerts')} 
          />
          <ToggleRow 
            label="Enable GPS live tracking" 
            isOn={toggles.gpsTracking} 
            onToggle={() => handleToggle('gpsTracking')} 
          />
          <ToggleRow 
            label="Allow vendor self-registration" 
            isOn={toggles.vendorRegistration} 
            onToggle={() => handleToggle('vendorRegistration')} 
          />
          <ToggleRow 
            label="Enable compliance risk prediction" 
            isOn={toggles.riskPrediction} 
            onToggle={() => handleToggle('riskPrediction')} 
          />

        </div>
      </div>

      {/* Save Button */}
      <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
        <Save size={16} strokeWidth={2.5} />
        Save Settings
      </button>
      
    </div>
  );
};

export default General;