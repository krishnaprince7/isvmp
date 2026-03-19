import React, { useState } from 'react';
import { 
  Plus, ClipboardCheck, ThumbsUp, ThumbsDown, 
  Clock, RotateCcw, Camera, MapPin, RefreshCw 
} from 'lucide-react';

// --- Dummy Data ---
const allInspectionsData = [
  { id: 'INS-2026-001', vehicleNo: 'UP32 AB 1234', school: 'DPS Lucknow', inspector: 'R.K. Sharma', date: '2026-03-14', selfie: true, geoTag: true, result: 'Fit' },
  { id: 'INS-2026-002', vehicleNo: 'UP78 CD 5678', school: 'City Montessori', inspector: 'A. Verma', date: '2026-03-14', selfie: true, geoTag: true, result: 'Unfit' },
  { id: 'INS-2026-003', vehicleNo: 'UP65 EF 9012', school: "St. Xavier's", inspector: 'M. Singh', date: '2026-03-13', selfie: true, geoTag: true, result: 'Unfit' },
  { id: 'INS-2026-004', vehicleNo: 'UP54 GH 3456', school: 'Army Public School', inspector: 'P. Kumar', date: '2026-03-13', selfie: true, geoTag: true, result: 'Fit' },
];

const reInspectionsData = [
  { id: 'RE-INS-001', vehicleNo: 'UP78 CD 5678', school: 'City Montessori', originalDate: '2026-03-14', reDate: '2026-03-20', deficiencies: 'Speed Governor Missing, No CCTV', status: 'Scheduled' },
  { id: 'RE-INS-002', vehicleNo: 'UP65 EF 9012', school: "St. Xavier's", originalDate: '2026-03-13', reDate: '2026-03-19', deficiencies: 'Expired Fitness, No Fire Extinguisher...', status: 'Corrected' },
];

// --- Helper Functions ---
const getStatusStyles = (status) => {
  switch (status) {
    case 'Fit':
    case 'Corrected':
      return { text: 'text-emerald-700', bg: 'bg-emerald-100', dot: 'bg-emerald-500' };
    case 'Unfit':
      return { text: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' };
    case 'Scheduled':
      return { text: 'text-blue-700', bg: 'bg-blue-100', dot: 'bg-blue-500' };
    default:
      return { text: 'text-gray-700', bg: 'bg-gray-100', dot: 'bg-gray-500' };
  }
};

const Inspections = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Physical Inspection Management</h1>
          <p className="text-slate-500 text-sm mt-1">Schedule, track & manage vehicle inspections with geo-tagged verification</p>
        </div>
        <button className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors shadow-sm">
          <Plus size={18} />
          Schedule Inspection
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {/* Total Inspections */}
        <div className="bg-[#1e3a8a] rounded-xl p-5 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <p className="text-blue-100 text-[11px] font-semibold uppercase tracking-wider">Total Inspections</p>
            <div className="bg-white/10 p-1.5 rounded-lg z-10">
              <ClipboardCheck size={18} className="text-blue-100" />
            </div>
          </div>
          <h2 className="text-3xl font-bold z-10">8,432</h2>
          <div className="absolute right-[-10%] bottom-[-10%] w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        {/* Fit */}
        <div className="bg-[#22c55e] rounded-xl p-5 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <p className="text-green-100 text-[11px] font-semibold uppercase tracking-wider">Fit</p>
            <div className="bg-white/20 p-1.5 rounded-lg z-10">
              <ThumbsUp size={18} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold z-10">5,191</h2>
          <div className="absolute right-[-10%] top-[-10%] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Unfit */}
        <div className="bg-[#ef4444] rounded-xl p-5 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <p className="text-red-100 text-[11px] font-semibold uppercase tracking-wider">Unfit</p>
            <div className="bg-white/20 p-1.5 rounded-lg z-10">
              <ThumbsDown size={18} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold z-10">1,254</h2>
          <div className="absolute right-[-10%] top-[-10%] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Pending */}
        <div className="bg-[#f59e0b] rounded-xl p-5 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <p className="text-yellow-100 text-[11px] font-semibold uppercase tracking-wider">Pending</p>
            <div className="bg-white/20 p-1.5 rounded-lg z-10">
              <Clock size={18} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold z-10">1,987</h2>
          <div className="absolute right-[-10%] top-[-10%] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Re-Inspections */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider">Re-Inspections</p>
            <div className="bg-slate-50 border border-slate-100 p-1.5 rounded-lg">
              <RotateCcw size={18} className="text-slate-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-800">187</h2>
        </div>
      </div>

      {/* This Week's Schedule */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
        <h3 className="font-bold text-sm text-slate-800 mb-4">This Week's Schedule</h3>
        <div className="grid grid-cols-5 gap-4">
          
          {/* Active Day */}
          <div className="border-2 border-[#1e3a8a] bg-blue-50/50 rounded-lg p-4 flex flex-col items-center justify-center shadow-sm">
            <p className="text-[#1e3a8a] font-semibold text-sm mb-1">Mon 15</p>
            <h4 className="text-[#1e3a8a] text-2xl font-bold">12</h4>
            <p className="text-blue-600/70 text-[10px] uppercase tracking-wider mt-1 font-medium">inspections</p>
          </div>

          {/* Inactive Days */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
            <p className="text-slate-500 font-medium text-sm mb-1">Tue 16</p>
            <h4 className="text-slate-700 text-2xl font-bold">8</h4>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1 font-medium">inspections</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
            <p className="text-slate-500 font-medium text-sm mb-1">Wed 17</p>
            <h4 className="text-slate-700 text-2xl font-bold">15</h4>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1 font-medium">inspections</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
            <p className="text-slate-500 font-medium text-sm mb-1">Thu 18</p>
            <h4 className="text-slate-700 text-2xl font-bold">6</h4>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1 font-medium">inspections</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
            <p className="text-slate-500 font-medium text-sm mb-1">Fri 19</p>
            <h4 className="text-slate-700 text-2xl font-bold">10</h4>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1 font-medium">inspections</p>
          </div>

        </div>
      </div>

      {/* Working Tabs */}
      <div className="inline-flex bg-slate-100 p-1 rounded-lg mb-6 shadow-inner">
        <button 
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${activeTab === 'all' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          All Inspections
        </button>
        <button 
          onClick={() => setActiveTab('reinspections')}
          className={`px-5 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${activeTab === 'reinspections' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Re-Inspections
        </button>
      </div>

      {/* Tab Content Rendering */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden min-h-[300px]">
        
        {/* --- TAB 1: ALL INSPECTIONS --- */}
        {activeTab === 'all' && (
          <div>
            <div className="p-5 border-b border-gray-200 bg-slate-50">
              <h3 className="font-semibold text-slate-800">Inspection Records</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">VEHICLE NO.</th>
                    <th className="px-6 py-4">SCHOOL</th>
                    <th className="px-6 py-4">INSPECTOR</th>
                    <th className="px-6 py-4">DATE</th>
                    <th className="px-6 py-4">SELFIE</th>
                    <th className="px-6 py-4">GEO-TAG</th>
                    <th className="px-6 py-4">RESULT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {allInspectionsData.map((row, index) => {
                    const styles = getStatusStyles(row.result);
                    return (
                      <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                        <td className="px-6 py-4 font-bold text-slate-900 text-xs">{row.id}</td>
                        <td className="px-6 py-4 font-medium">{row.vehicleNo}</td>
                        <td className="px-6 py-4">{row.school}</td>
                        <td className="px-6 py-4">{row.inspector}</td>
                        <td className="px-6 py-4 text-slate-500">{row.date}</td>
                        <td className="px-6 py-4">
                          {row.selfie && <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600"><Camera size={14} /> Yes</span>}
                        </td>
                        <td className="px-6 py-4">
                          {row.geoTag && <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600"><MapPin size={14} /> Yes</span>}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border border-transparent ${styles.bg} ${styles.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                            {row.result}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB 2: RE-INSPECTIONS --- */}
        {activeTab === 'reinspections' && (
          <div>
            <div className="p-5 border-b border-gray-200 bg-slate-50">
              <div className="flex items-center gap-2 mb-1">
                <RefreshCw size={18} className="text-[#1e3a8a]" />
                <h3 className="font-semibold text-slate-800">Re-Inspection Queue</h3>
              </div>
              <p className="text-xs text-slate-500">Vehicles marked Unfit — school confirms corrections → auto-notification → re-inspection</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">VEHICLE NO.</th>
                    <th className="px-6 py-4">SCHOOL</th>
                    <th className="px-6 py-4">ORIGINAL DATE</th>
                    <th className="px-6 py-4">RE-INSPECTION DATE</th>
                    <th className="px-6 py-4">DEFICIENCIES</th>
                    <th className="px-6 py-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reInspectionsData.map((row, index) => {
                    const styles = getStatusStyles(row.status);
                    return (
                      <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                        <td className="px-6 py-4 font-bold text-slate-900 text-xs">{row.id}</td>
                        <td className="px-6 py-4 font-medium">{row.vehicleNo}</td>
                        <td className="px-6 py-4">{row.school}</td>
                        <td className="px-6 py-4 text-slate-500">{row.originalDate}</td>
                        <td className="px-6 py-4 font-medium">{row.reDate}</td>
                        <td className="px-6 py-4 text-slate-500">{row.deficiencies}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border border-transparent ${styles.bg} ${styles.text}`}>
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
        )}

      </div>
    </div>
  );
};

export default Inspections;