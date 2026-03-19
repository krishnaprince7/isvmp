import React from 'react';
import { Search, Plus, Bus, ShieldCheck, ShieldAlert, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const busData = [
  { vehicleNo: 'UP32 AB 1234', type: 'Standard', school: 'DPS Lucknow', district: 'Lucknow', fitnessExpiry: '2026-08-15', compliance: 92, status: 'Compliant' },
  { vehicleNo: 'UP78 CD 5678', type: 'Mini Bus', school: 'City Montessori', district: 'Kanpur', fitnessExpiry: '2026-03-20', compliance: 65, status: 'Warning' },
  { vehicleNo: 'UP65 EF 9012', type: 'Standard', school: "St. Xavier's", district: 'Agra', fitnessExpiry: '2025-12-01', compliance: 38, status: 'Violation' },
  { vehicleNo: 'UP54 GH 3456', type: 'AC Bus', school: 'Army Public School', district: 'Varanasi', fitnessExpiry: '2026-11-30', compliance: 88, status: 'Compliant' },
  { vehicleNo: 'UP70 IJ 7890', type: 'Standard', school: 'Delhi Public School', district: 'Prayagraj', fitnessExpiry: '2026-06-15', compliance: 72, status: 'Warning' },
  { vehicleNo: 'UP32 KL 2345', type: 'Mini Bus', school: 'GD Goenka', district: 'Lucknow', fitnessExpiry: '2026-03-25', compliance: 95, status: 'Compliant' },
  { vehicleNo: 'UP78 MN 6789', type: 'Standard', school: 'Ryan International', district: 'Kanpur', fitnessExpiry: '2026-09-10', compliance: 45, status: 'Violation' },
  { vehicleNo: 'UP65 OP 1357', type: 'AC Bus', school: 'Kendriya Vidyalaya', district: 'Agra', fitnessExpiry: '2027-01-15', compliance: 98, status: 'Compliant' },
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'Compliant':
      return { text: 'text-emerald-700', bg: 'bg-emerald-100', dot: 'bg-emerald-500', bar: 'bg-emerald-500' };
    case 'Warning':
      return { text: 'text-amber-700', bg: 'bg-amber-100', dot: 'bg-amber-500', bar: 'bg-amber-500' };
    case 'Violation':
      return { text: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500', bar: 'bg-rose-500' };
    default:
      return { text: 'text-gray-700', bg: 'bg-gray-100', dot: 'bg-gray-500', bar: 'bg-gray-500' };
  }
};

const BusManagement = () => {

  const navigate = useNavigate()
  return (
    <div className=" bg-slate-50 min-h-screen font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Bus Management</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and monitor all registered school buses</p>
        </div>
        <button
        onClick={()=>{
          navigate("/bus-management/register")
        }}
         className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors shadow-sm">
          <Plus size={18} />
          Register Bus
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        
        {/* Total Buses */}
        <div className="bg-[#1e3a8a] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2">Total Buses</p>
            <h2 className="text-3xl font-bold">42,891</h2>
          </div>
          <div className="bg-white/10 p-3 rounded-lg relative z-10">
            <Bus size={24} className="text-white" />
          </div>
          {/* Decorative background shape */}
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Compliant */}
        <div className="bg-[#22c55e] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-green-100 text-xs font-semibold uppercase tracking-wider mb-2">Compliant</p>
            <h2 className="text-3xl font-bold">34,712</h2>
          </div>
          <div className="bg-white/10 p-3 rounded-lg relative z-10">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Non-Compliant */}
        <div className="bg-[#ef4444] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-red-100 text-xs font-semibold uppercase tracking-wider mb-2">Non-Compliant</p>
            <h2 className="text-3xl font-bold">8,179</h2>
          </div>
          <div className="bg-white/10 p-3 rounded-lg relative z-10">
            <ShieldAlert size={24} className="text-white" />
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Pending Inspection */}
        <div className="bg-[#f59e0b] rounded-xl p-6 text-white shadow-sm flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-yellow-100 text-xs font-semibold uppercase tracking-wider mb-2">Pending Inspection</p>
            <h2 className="text-3xl font-bold">3,241</h2>
          </div>
          <div className="bg-white/10 p-3 rounded-lg relative z-10">
            <ClipboardList size={24} className="text-white" />
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">All Registered Buses</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search buses..." 
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>
            <select className="border border-gray-200 rounded-md text-sm px-4 py-2 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer">
              <option>All Status</option>
              <option>Compliant</option>
              <option>Warning</option>
              <option>Violation</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">VEHICLE NO.</th>
                <th className="px-6 py-4">TYPE</th>
                <th className="px-6 py-4">SCHOOL</th>
                <th className="px-6 py-4">DISTRICT</th>
                <th className="px-6 py-4">FITNESS EXPIRY</th>
                <th className="px-6 py-4">COMPLIANCE</th>
                <th className="px-6 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {busData.map((bus, index) => {
                const styles = getStatusStyles(bus.status);
                
                return (
                  <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                    <td className="px-6 py-4 font-bold text-slate-900">{bus.vehicleNo}</td>
                    <td className="px-6 py-4 text-slate-500">{bus.type}</td>
                    <td className="px-6 py-4 font-medium text-slate-800">{bus.school}</td>
                    <td className="px-6 py-4 text-slate-500">{bus.district}</td>
                    <td className="px-6 py-4 text-slate-500">{bus.fitnessExpiry}</td>
                    
                    {/* Compliance Progress Bar */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${styles.bar}`} 
                            style={{ width: `${bus.compliance}%` }}
                          />
                        </div>
                        <span className="font-medium">{bus.compliance}%</span>
                      </div>
                    </td>

                    {/* Status Pill */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${styles.bg} ${styles.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                        {bus.status}
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

export default BusManagement;