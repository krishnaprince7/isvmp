import React, { useState } from 'react';
import { Search, Plus, Building, Bus, Building2, ShieldCheck, X } from 'lucide-react';

const vendorData = [
  { name: 'Sharma Transport Co.', district: 'Lucknow', fleetSize: 45, schoolsServed: 12, compliantBuses: '38/45', status: 'Compliant' },
  { name: 'UP School Bus Services', district: 'Kanpur', fleetSize: 72, schoolsServed: 22, compliantBuses: '50/72', status: 'Warning' },
  { name: 'SafeRide Pvt. Ltd.', district: 'Agra', fleetSize: 34, schoolsServed: 8, compliantBuses: '33/34', status: 'Compliant' },
  { name: 'Royal Transport', district: 'Varanasi', fleetSize: 28, schoolsServed: 6, compliantBuses: '15/28', status: 'Violation' },
  { name: 'Green Line Buses', district: 'Prayagraj', fleetSize: 56, schoolsServed: 18, compliantBuses: '48/56', status: 'Compliant' },
  { name: 'City Link Transport', district: 'Meerut', fleetSize: 19, schoolsServed: 5, compliantBuses: '12/19', status: 'Warning' },
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'Compliant':
      return { text: 'text-emerald-700', bg: 'bg-emerald-100', dot: 'bg-emerald-500' };
    case 'Warning':
      return { text: 'text-amber-700', bg: 'bg-amber-100', dot: 'bg-amber-500' };
    case 'Violation':
      return { text: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' };
    default:
      return { text: 'text-gray-700', bg: 'bg-gray-100', dot: 'bg-gray-500' };
  }
};

const Vendor = () => {
  // State for the bottom-right toast notification shown in your screenshot
  const [showToast, setShowToast] = useState(true);

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800 relative">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Vendor Management</h1>
          <p className="text-slate-500 text-sm mt-1">Manage bus vendors and their fleet compliance</p>
        </div>
        <button 
          onClick={() => setShowToast(true)}
          className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Add Vendor
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        
        {/* Total Vendors */}
        <div className="bg-[#1e3a8a] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2">Total Vendors</p>
            <h2 className="text-3xl font-bold">2,341</h2>
          </div>
          <div className="bg-blue-800/50 p-3 rounded-lg">
            <Building size={24} className="text-blue-200" />
          </div>
        </div>

        {/* Total Fleet */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Fleet</p>
            <h2 className="text-3xl font-bold text-slate-800">42,891</h2>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <Bus size={24} className="text-[#1e3a8a]" />
          </div>
        </div>

        {/* Schools Served */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Schools Served</p>
            <h2 className="text-3xl font-bold text-slate-800">18,432</h2>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <Building2 size={24} className="text-[#1e3a8a]" />
          </div>
        </div>

        {/* Avg Compliance */}
        <div className="bg-[#22c55e] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-green-100 text-xs font-semibold uppercase tracking-wider mb-2">Avg Compliance</p>
            <h2 className="text-3xl font-bold">81%</h2>
          </div>
          <div className="bg-green-600/50 p-3 rounded-lg">
            <ShieldCheck size={24} className="text-green-100" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">All Vendors</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search vendors..." 
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">VENDOR NAME</th>
                <th className="px-6 py-4">DISTRICT</th>
                <th className="px-6 py-4">FLEET SIZE</th>
                <th className="px-6 py-4">SCHOOLS SERVED</th>
                <th className="px-6 py-4">COMPLIANT BUSES</th>
                <th className="px-6 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vendorData.map((vendor, index) => {
                const styles = getStatusStyles(vendor.status);
                
                return (
                  <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                    <td className="px-6 py-4 font-medium text-slate-900">{vendor.name}</td>
                    <td className="px-6 py-4 text-slate-500">{vendor.district}</td>
                    <td className="px-6 py-4 font-medium">{vendor.fleetSize}</td>
                    <td className="px-6 py-4 text-slate-500">{vendor.schoolsServed}</td>
                    <td className="px-6 py-4 font-medium">{vendor.compliantBuses}</td>
                    
                    {/* Status Pill */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${styles.bg} ${styles.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                        {vendor.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Toast Notification (Bottom Right) */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 z-50 animate-in slide-in-from-bottom-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-sm font-semibold text-slate-800">Add Vendor</h4>
            <button 
              onClick={() => setShowToast(false)} 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-slate-500">Vendor registration form will be available soon.</p>
        </div>
      )}

    </div>
  );
};

export default Vendor;