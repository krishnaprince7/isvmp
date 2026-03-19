import React from 'react';
import { Search, AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';

// --- Dummy Data ---
const violationData = [
  { busNo: 'UP32 AB 1234', school: 'DPS Lucknow', type: 'Speed Governor Missing', district: 'Lucknow', date: '2026-03-14', penalty: '₹5,000', status: 'Violation' },
  { busNo: 'UP78 CD 5678', school: 'City Montessori', type: 'Expired Fitness Certificate', district: 'Kanpur', date: '2026-03-14', penalty: '₹10,000', status: 'Violation' },
  { busNo: 'UP65 EF 9012', school: "St. Xavier's", type: 'No Fire Extinguisher', district: 'Agra', date: '2026-03-13', penalty: '₹3,000', status: 'Warning' },
  { busNo: 'UP54 GH 3456', school: 'Army Public School', type: 'GPS Malfunction', district: 'Varanasi', date: '2026-03-13', penalty: '₹2,000', status: 'Warning' },
  { busNo: 'UP70 IJ 7890', school: 'Delhi Public School', type: 'No First Aid Kit', district: 'Prayagraj', date: '2026-03-12', penalty: '₹1,500', status: 'Violation' },
  { busNo: 'UP32 KL 2345', school: 'GD Goenka', type: 'No CCTV', district: 'Lucknow', date: '2026-03-11', penalty: '₹5,000', status: 'Pending' },
];

const chartData = [
  { month: 'Oct', value: 320 },
  { month: 'Nov', value: 290 },
  { month: 'Dec', value: 340 },
  { month: 'Jan', value: 280 },
  { month: 'Feb', value: 250 },
  { month: 'Mar', value: 190 },
];

const maxValue = 340; // Max value for chart Y-axis scaling

// --- Helper Functions ---
const getStatusStyles = (status) => {
  switch (status) {
    case 'Violation':
      return { text: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' };
    case 'Warning':
      return { text: 'text-amber-700', bg: 'bg-amber-100', dot: 'bg-amber-500' };
    case 'Pending':
      return { text: 'text-blue-700', bg: 'bg-blue-100', dot: 'bg-blue-500' };
    default:
      return { text: 'text-gray-700', bg: 'bg-gray-100', dot: 'bg-gray-500' };
  }
};

const Violations = () => {
  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Violation Management</h1>
        <p className="text-slate-500 text-sm mt-1">Track and manage safety violations</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        
        {/* Total Violations */}
        <div className="bg-[#ef4444] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-red-100 text-xs font-semibold uppercase tracking-wider mb-2">Total Violations</p>
            <h2 className="text-4xl font-bold">1,847</h2>
          </div>
          <div className="bg-white/20 p-3 rounded-lg relative z-10">
            <AlertTriangle size={24} className="text-white" />
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Open */}
        <div className="bg-[#f59e0b] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-yellow-100 text-xs font-semibold uppercase tracking-wider mb-2">Open</p>
            <h2 className="text-4xl font-bold">1,203</h2>
          </div>
          <div className="bg-white/20 p-3 rounded-lg relative z-10">
            <ShieldAlert size={24} className="text-white" />
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Resolved */}
        <div className="bg-[#22c55e] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-green-100 text-xs font-semibold uppercase tracking-wider mb-2">Resolved</p>
            <h2 className="text-4xl font-bold">644</h2>
          </div>
          <div className="bg-white/20 p-3 rounded-lg relative z-10">
            <CheckCircle2 size={24} className="text-white" />
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

      </div>

      {/* Violation Trend Custom Chart */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="font-bold text-sm text-slate-800 mb-6">Violation Trend</h3>
        
        {/* Chart Container */}
        <div className="relative h-64 flex items-end ml-8 mb-6">
          
          {/* Y-Axis Guidelines & Labels */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[340, 255, 170, 85, 0].map((label, i) => (
              <div key={i} className="flex items-center w-full relative">
                <span className="absolute -left-8 text-xs text-gray-400 font-medium w-6 text-right">{label}</span>
                <div className="w-full border-t border-dashed border-gray-200"></div>
              </div>
            ))}
          </div>

          {/* X-Axis & Bars Container */}
          <div className="w-full flex justify-around items-end h-[calc(100%-12px)] relative z-10">
            {chartData.map((data, index) => {
              const heightPercentage = (data.value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center w-full">
                  <div 
                    className="w-24 bg-[#ef4444] rounded-sm hover:bg-red-600 transition-colors"
                    style={{ height: `${heightPercentage}%` }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Solid Bottom Line */}
          <div className="absolute bottom-0 w-full border-b border-gray-300"></div>
        </div>

        {/* X-Axis Labels */}
        <div className="w-full flex justify-around pl-8">
          {chartData.map((data, index) => (
            <div key={index} className="text-xs text-gray-400 font-medium w-24 text-center">
              {data.month}
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">All Violations</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>
            <select className="border border-gray-200 rounded-md text-sm px-4 py-2 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer">
              <option>All Types</option>
              <option>Speed Governor Missing</option>
              <option>Expired Fitness Certificate</option>
              <option>No Fire Extinguisher</option>
              <option>GPS Malfunction</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">BUS NO.</th>
                <th className="px-6 py-4">SCHOOL</th>
                <th className="px-6 py-4">VIOLATION TYPE</th>
                <th className="px-6 py-4">DISTRICT</th>
                <th className="px-6 py-4">DATE</th>
                <th className="px-6 py-4">PENALTY</th>
                <th className="px-6 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {violationData.map((row, index) => {
                const styles = getStatusStyles(row.status);
                
                return (
                  <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                    <td className="px-6 py-4 font-bold text-slate-900">{row.busNo}</td>
                    <td className="px-6 py-4 font-medium">{row.school}</td>
                    <td className="px-6 py-4 text-slate-500">{row.type}</td>
                    <td className="px-6 py-4 text-slate-500">{row.district}</td>
                    <td className="px-6 py-4 text-slate-500">{row.date}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.penalty}</td>
                    
                    {/* Status Pill */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${styles.bg} ${styles.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Violations;