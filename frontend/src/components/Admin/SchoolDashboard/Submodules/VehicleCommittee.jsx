import React from 'react';
import { Upload, Check } from 'lucide-react'; 

const VehicleCommittee = () => {
  return (
    <div className="w-full p-2  animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
      {/* Header Section */}
      <div className="w-full">
        <h3 className="font-bold text-gray-800 text-lg">School Transport Vehicle Committee</h3>
        <p className="text-xs text-gray-500">Meetings to be conducted once every three months</p>
      </div>
      
      {/* Stats Grid - 4 Columns spreading full width */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-xl w-full">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Chairman</p>
          <p className="text-sm font-bold text-gray-800 mt-1">Dr. A.K. Sharma (Principal)</p>
        </div>
        <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-xl w-full">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Members</p>
          <p className="text-sm font-bold text-gray-800 mt-1">5 members</p>
        </div>
        <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-xl w-full">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Last Meeting</p>
          <p className="text-sm font-bold text-gray-800 mt-1">2026-01-15</p>
        </div>
        <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-xl w-full">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Next Due</p>
          <p className="text-sm font-bold text-red-500 mt-1">2026-04-15</p>
        </div>
      </div>

      {/* Upload Section - Spread Full Width */}
      <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm text-gray-800">Meeting Minutes</h4>
            <p className="text-xs text-gray-500">Upload minutes of latest committee meeting</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-green-600">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-tight">Uploaded</span>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm active:scale-95">
              <Upload className="w-4 h-4" /> 
              Upload Minutes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCommittee;