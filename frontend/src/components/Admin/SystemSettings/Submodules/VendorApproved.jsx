import React from 'react';

// --- Dummy Data ---
const pendingApprovals = [
  {
    id: 1,
    name: 'Metro Transport Services',
    district: 'Lucknow',
    fleet: 12,
    applied: '2026-03-14'
  },
  {
    id: 2,
    name: 'Shree Balaji Travels',
    district: 'Agra',
    fleet: 8,
    applied: '2026-03-13'
  }
];

const VendorApproved = () => {
  return (
    <div className="animate-in fade-in duration-300">
      
      <h2 className="text-[15px] font-bold text-slate-800 mb-6">Vendor Approval System</h2>
      
      {/* Top Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Minimum Fleet Size */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Minimum Fleet Size</label>
          <input 
            type="number" 
            defaultValue="5"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
          />
        </div>

        {/* Required Documents */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Required Documents</label>
          <input 
            type="text" 
            defaultValue="GST, PAN, Trade License, Insurance"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
          />
        </div>

        {/* Auto-Approval Threshold */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Auto-Approval Threshold</label>
          <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
            <option value="Manual Approval Only">Manual Approval Only</option>
            <option value="Score > 90">Score &gt; 90</option>
          </select>
        </div>

        {/* Approval Authority */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Approval Authority</label>
          <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
            <option value="RTO">RTO</option>
            <option value="ARTO">ARTO</option>
            <option value="Transport Commissioner">Transport Commissioner</option>
          </select>
        </div>
        
      </div>

      {/* Pending Approvals Section */}
      <div>
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">Pending Approvals</h3>
        
        <div className="flex flex-col gap-3">
          {pendingApprovals.map((vendor) => (
            <div 
              key={vendor.id} 
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors bg-white shadow-sm"
            >
              <div className="mb-3 sm:mb-0">
                <h4 className="text-sm font-semibold text-slate-800 mb-0.5">{vendor.name}</h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  {vendor.district} &bull; Fleet: {vendor.fleet} &bull; Applied: {vendor.applied}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors border border-rose-100">
                  Reject
                </button>
                <button className="px-4 py-1.5 text-xs font-semibold text-white bg-[#1e3a8a] hover:bg-blue-800 rounded-md transition-colors shadow-sm">
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default VendorApproved;