import React, { useState } from 'react';
import { 
  Megaphone, ShieldAlert, AlertTriangle, Info, Bell, 
  Clock, Smartphone, Mail, Monitor 
} from 'lucide-react';

// --- Dummy Data ---
const alertsData = [
  { id: 1, title: 'Speed Governor Missing', type: 'Safety', desc: 'Bus UP32 AB 1234 - DPS Lucknow reported without speed governor', time: '5 min ago', severity: 'critical', actions: ['SMS', 'Portal'] },
  { id: 2, title: 'Fitness Certificate Expiring in 7 Days', type: 'Document Expiry', desc: 'Bus UP78 CD 5678 fitness certificate expires on March 22', time: '12 min ago', severity: 'warning', actions: ['SMS', 'Email', 'Portal'] },
  { id: 3, title: 'Inspection Overdue', type: 'Inspection', desc: '15 buses in Meerut district have overdue inspections', time: '1 hour ago', severity: 'critical', actions: ['Portal'] },
  { id: 4, title: 'Insurance Expiring in 15 Days', type: 'Document Expiry', desc: 'Bus UP65 OP 1357 insurance expires on March 31', time: '2 hours ago', severity: 'warning', actions: ['SMS', 'Email', 'Portal'] },
  { id: 5, title: 'GPS Malfunction', type: 'Safety', desc: 'Bus UP54 GH 3456 GPS not transmitting data since 8:00 AM', time: '3 hours ago', severity: 'warning', actions: ['SMS', 'Portal'] },
  { id: 6, title: 'Permit Expiring in 25 Days', type: 'Document Expiry', desc: 'Bus UP32 KL 2345 permit expires on April 10', time: '3.5 hours ago', severity: 'warning', actions: ['Email', 'Portal'] },
  { id: 7, title: 'Non-Compliance Notice', type: 'Compliance', desc: '12 schools in Gorakhpur district below 70% compliance', time: '4 hours ago', severity: 'critical', actions: ['SMS', 'Email', 'Portal'] },
  { id: 8, title: 'Vehicle Marked Unfit — Re-Inspection Pending', type: 'Inspection', desc: 'Bus UP78 CD 5678 requires re-inspection after corrective action', time: '4.5 hours ago', severity: 'warning', actions: ['SMS', 'Portal'] },
  { id: 9, title: 'New Vendor Registration', type: 'System', desc: 'Metro Transport Services applied for vendor registration', time: '5 hours ago', severity: 'info', actions: ['Portal'] },
  { id: 10, title: 'PUC Certificate Expiring in 20 Days', type: 'Document Expiry', desc: 'Bus UP54 QR 2468 PUC expires on April 5', time: '5.5 hours ago', severity: 'warning', actions: ['Email', 'Portal'] },
  { id: 11, title: 'Batch Inspection Completed', type: 'Inspection', desc: '23 buses inspected in Agra — 20 Fit, 3 Unfit', time: '6 hours ago', severity: 'info', actions: ['Portal'] },
];

const tabs = ['All Alerts', 'Document Expiry', 'Safety', 'Inspection'];

// --- Helper Functions for Styling ---
const getCardStyles = (severity) => {
  switch (severity) {
    case 'critical':
      return { border: 'border-red-200', bg: 'bg-red-50', iconText: 'text-red-500', Icon: ShieldAlert };
    case 'warning':
      return { border: 'border-amber-200', bg: 'bg-amber-50', iconText: 'text-amber-500', Icon: AlertTriangle };
    case 'info':
    default:
      return { border: 'border-blue-200', bg: 'bg-blue-50', iconText: 'text-blue-500', Icon: Bell };
  }
};

const getActionIcon = (action) => {
  switch (action) {
    case 'SMS': return <Smartphone size={12} className="text-gray-400" />;
    case 'Email': return <Mail size={12} className="text-gray-400" />;
    case 'Portal': return <Monitor size={12} className="text-gray-400" />;
    default: return null;
  }
};

const AlertsNotifications = () => {
  const [activeTab, setActiveTab] = useState('All Alerts');

  // Filter alerts based on active tab
  const filteredAlerts = activeTab === 'All Alerts' 
    ? alertsData 
    : alertsData.filter(alert => alert.type === activeTab);

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Alerts & Notifications</h1>
        <p className="text-slate-500 text-sm mt-1">
          <span className="font-semibold text-slate-700">3 critical, 6 warnings</span> — Automated 30-day expiry tracking active
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-red-50/50 border border-red-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-red-600 mb-1">3</h2>
          <p className="text-sm font-medium text-slate-600">Critical</p>
        </div>
        <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-amber-500 mb-1">6</h2>
          <p className="text-sm font-medium text-slate-600">Warnings</p>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-blue-500 mb-1">2</h2>
          <p className="text-sm font-medium text-slate-600">Informational</p>
        </div>
        <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-amber-500 mb-1">4</h2>
          <p className="text-sm font-medium text-slate-600">Expiry Alerts (30d)</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3.5 mb-8 flex items-center gap-3 shadow-sm">
        <Megaphone size={18} className="text-[#ef4444]" />
        <p className="text-sm text-[#1e3a8a] font-medium">
          Automated alerts notify stakeholders via SMS, Email & Portal when fitness, insurance, permit, or PUC certificates are within 30 days of expiry.
        </p>
      </div>

      {/* NEW Tabs (Segmented Control Style) */}
      <div className="inline-flex bg-slate-100/80 p-1.5 rounded-xl mb-6 shadow-inner overflow-x-auto max-w-full">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 text-sm rounded-lg transition-all duration-200 whitespace-nowrap ${
              activeTab === tab 
                ? 'bg-white text-slate-800 font-bold shadow-sm' 
                : 'text-slate-500 font-medium hover:text-slate-700 hover:bg-slate-200/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="flex flex-col gap-4">
        {filteredAlerts.map(alert => {
          const { border, bg, iconText, Icon } = getCardStyles(alert.severity);
          
          return (
            <div key={alert.id} className={`bg-white border ${border} rounded-xl p-4 shadow-sm flex items-start gap-4 transition-colors hover:bg-slate-50/50`}>
              
              {/* Left Icon */}
              <div className={`${bg} ${iconText} p-2.5 rounded-lg shrink-0`}>
                <Icon size={20} strokeWidth={2.5} />
              </div>

              {/* Center Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-800 text-[15px]">{alert.title}</h3>
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide">
                    {alert.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2.5">{alert.desc}</p>
                
                {/* Actions (SMS, Email, Portal) */}
                <div className="flex items-center gap-4">
                  {alert.actions.map(action => (
                    <div key={action} className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      {getActionIcon(action)}
                      {action}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Time Area */}
              <div className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Clock size={12} />
                {alert.time}
              </div>

            </div>
          );
        })}

        {filteredAlerts.length === 0 && (
          <div className="text-center py-10 text-slate-500">
            No alerts found for this category.
          </div>
        )}
      </div>

    </div>
  );
};

export default AlertsNotifications;