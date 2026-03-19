import React, { useState } from 'react';
import { MapPin, Save } from 'lucide-react';

const District = () => {
  // Initialize state for all 15 districts, setting them to 'true' (active) by default
  const [districts, setDistricts] = useState([
    { id: 1, name: 'Lucknow', enabled: true },
    { id: 2, name: 'Kanpur', enabled: true },
    { id: 3, name: 'Agra', enabled: true },
    { id: 4, name: 'Varanasi', enabled: true },
    { id: 5, name: 'Prayagraj', enabled: true },
    { id: 6, name: 'Meerut', enabled: true },
    { id: 7, name: 'Gorakhpur', enabled: true },
    { id: 8, name: 'Bareilly', enabled: true },
    { id: 9, name: 'Aligarh', enabled: true },
    { id: 10, name: 'Moradabad', enabled: true },
    { id: 11, name: 'Saharanpur', enabled: true },
    { id: 12, name: 'Firozabad', enabled: true },
    { id: 13, name: 'Ghaziabad', enabled: true },
    { id: 14, name: 'Noida', enabled: true },
    { id: 15, name: 'Mathura', enabled: true },
  ]);

  // Toggle handler
  const handleToggle = (id) => {
    setDistricts(districts.map(district => 
      district.id === id ? { ...district, enabled: !district.enabled } : district
    ));
  };

  return (
    <div className="animate-in fade-in duration-300">
      
      <h2 className="text-[15px] font-bold text-slate-800 mb-6">District Configuration</h2>
      
      {/* 3-Column Grid for Districts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        
        {districts.map((district) => (
          <div 
            key={district.id} 
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors cursor-pointer"
            onClick={() => handleToggle(district.id)}
          >
            {/* Left side: Icon + Name */}
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-slate-400" />
              <span className="text-sm font-medium text-slate-700">{district.name}</span>
            </div>

            {/* Right side: Toggle Switch */}
            <button 
              type="button"
              className={`w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none shrink-0 ${district.enabled ? 'bg-[#1e3a8a]' : 'bg-slate-200'}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevents double toggling when clicking the button directly
                handleToggle(district.id);
              }}
            >
              <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${district.enabled ? 'left-6' : 'left-1'}`}></div>
            </button>
          </div>
        ))}

      </div>

      {/* Save Button */}
      <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
        <Save size={16} strokeWidth={2.5} />
        Save Configuration
      </button>

    </div>
  );
};

export default District;