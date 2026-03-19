import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Notifications = () => {
  // State to manage notification settings
  const [notifications, setNotifications] = useState([
    { 
      id: 'docExpiry', 
      title: 'Document Expiry Alerts', 
      desc: 'Send alerts when documents are about to expire', 
      hasInput: true, 
      inputValue: 30, 
      enabled: true 
    },
    { 
      id: 'inspReminder', 
      title: 'Inspection Due Reminder', 
      desc: 'Remind inspectors of upcoming inspections', 
      hasInput: true, 
      inputValue: 7, 
      enabled: true 
    },
    { 
      id: 'violAlerts', 
      title: 'Violation Alerts', 
      desc: 'Notify RTO/ARTO when new violations are recorded', 
      hasInput: false, 
      enabled: true 
    },
    { 
      id: 'compDrop', 
      title: 'Compliance Score Drop', 
      desc: 'Alert when district compliance drops below threshold', 
      hasInput: false, 
      enabled: true 
    },
    { 
      id: 'vendorReg', 
      title: 'Vendor Registration', 
      desc: 'Notify admin of new vendor registration requests', 
      hasInput: false, 
      enabled: true 
    },
  ]);

  // Handler for toggle switches
  const handleToggle = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
    ));
  };

  // Handler for number inputs
  const handleInputChange = (id, value) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, inputValue: value } : notif
    ));
  };

  return (
    <div className="animate-in fade-in duration-300">
      
      <h2 className="text-[15px] font-bold text-slate-800 mb-6 px-1">Notification Settings</h2>
      
      {/* Settings List Container */}
      <div className="border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden shadow-sm bg-white mb-8">
        
        {notifications.map((notif) => (
          <div key={notif.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4 hover:bg-slate-50/50 transition-colors">
            
            {/* Left side: Title and Description */}
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-slate-800">{notif.title}</h3>
              <p className="text-[13px] text-slate-500">{notif.desc}</p>
            </div>

            {/* Right side: Input (if any) + Toggle */}
            <div className="flex items-center gap-4 shrink-0">
              
              {/* Optional Days Input */}
              {notif.hasInput && (
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={notif.inputValue}
                    onChange={(e) => handleInputChange(notif.id, e.target.value)}
                    className="w-14 px-2 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-center text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                  />
                  <span className="text-[13px] text-slate-400 font-medium">days before</span>
                </div>
              )}

              {/* Toggle Switch */}
              <button 
                type="button"
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none shrink-0 ${notif.enabled ? 'bg-[#1e3a8a]' : 'bg-slate-200'}`}
                onClick={() => handleToggle(notif.id)}
              >
                <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${notif.enabled ? 'left-6' : 'left-1'}`}></div>
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Save Button */}
      <div className="px-1">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
          <Save size={16} strokeWidth={2.5} />
          Save Notifications
        </button>
      </div>

    </div>
  );
};

export default Notifications;