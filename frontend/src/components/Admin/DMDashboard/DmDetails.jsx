import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DmDetails = () => {
  return (
    <div className="w-full  mx-auto space-y-6 mt-6">
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" /> Critical Issues Requiring Attention
        </h3>
        
        <div className="flex flex-col gap-3">
          
          <div className="border border-red-100 bg-red-50/30 rounded-lg p-4 flex justify-between items-center hover:bg-red-50 transition-colors cursor-pointer">
            <div>
              <h4 className="font-bold text-sm text-gray-800">City Montessori</h4>
              <p className="text-xs text-gray-500 mt-1">8 buses non-compliant • Gomti Nagar</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-100 text-red-700 border border-red-200 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Critical
            </span>
          </div>

          <div className="border border-red-100 bg-red-50/30 rounded-lg p-4 flex justify-between items-center hover:bg-red-50 transition-colors cursor-pointer">
            <div>
              <h4 className="font-bold text-sm text-gray-800">Ryan International</h4>
              <p className="text-xs text-gray-500 mt-1">3 buses expired fitness • Chinhat</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-100 text-red-700 border border-red-200 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Critical
            </span>
          </div>

          <div className="border border-amber-100 bg-amber-50/30 rounded-lg p-4 flex justify-between items-center hover:bg-amber-50 transition-colors cursor-pointer">
            <div>
              <h4 className="font-bold text-sm text-gray-800">St. Francis College</h4>
              <p className="text-xs text-gray-500 mt-1">Driver verification pending • Sadar</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
            </span>
          </div>

          <div className="border border-amber-100 bg-amber-50/30 rounded-lg p-4 flex justify-between items-center hover:bg-amber-50 transition-colors cursor-pointer">
            <div>
              <h4 className="font-bold text-sm text-gray-800">Modern Public School</h4>
              <p className="text-xs text-gray-500 mt-1">GPS non-functional on 2 buses • Aliganj</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
            </span>
          </div>

        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="border border-gray-200 rounded-lg p-5 flex flex-col justify-center text-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group shadow-sm hover:shadow">
            <h4 className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">View Transport Report</h4>
            <p className="text-xs text-gray-500 mt-1.5">District transport compliance</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 flex flex-col justify-center text-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group shadow-sm hover:shadow">
            <h4 className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">School Compliance</h4>
            <p className="text-xs text-gray-500 mt-1.5">BSA compliance dashboard</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 flex flex-col justify-center text-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group shadow-sm hover:shadow">
            <h4 className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">Violation Summary</h4>
            <p className="text-xs text-gray-500 mt-1.5">All active violations</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 flex flex-col justify-center text-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group shadow-sm hover:shadow">
            <h4 className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">Inspection Status</h4>
            <p className="text-xs text-gray-500 mt-1.5">Pending & completed</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DmDetails;