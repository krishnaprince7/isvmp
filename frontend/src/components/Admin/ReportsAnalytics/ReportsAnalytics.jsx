import React, { useState } from 'react';
import { ChevronDown, FileText, Download, FileSpreadsheet } from 'lucide-react';

// --- Dummy Data ---
const districtComplianceData = [
  { district: 'Bareilly', compliance: 78 },
  { district: 'Gorakhpur', compliance: 75 },
  { district: 'Meerut', compliance: 68 },
  { district: 'Prayagraj', compliance: 85 },
  { district: 'Varanasi', compliance: 72 },
  { district: 'Agra', compliance: 82 },
  { district: 'Kanpur', compliance: 76 },
  { district: 'Lucknow', compliance: 88 },
];

// Custom Line Chart Data points (approximate y-values mapped to 0-1200 scale)
const lineChartData = [
  { month: 'Oct', line1: 1020, line2: 880 },
  { month: 'Nov', line1: 980, line2: 920 },
  { month: 'Dec', line1: 1100, line2: 850 },
  { month: 'Jan', line1: 1050, line2: 960 },
  { month: 'Feb', line1: 1080, line2: 1020 },
  { month: 'Mar', line1: 1200, line2: 780 },
];

const reportTabs = ['All', 'Compliance', 'Inspection', 'Violation', 'Other'];

// Expanded Dummy Data for Reports
const reportsData = [
  // Compliance
  { id: 1, title: 'State Level Vehicle Summary', type: 'Summary', level: 'State Level', date: '2026-03-10', category: 'Compliance' },
  { id: 2, title: 'Fitness/Insurance/PUC Expiry Report', type: 'Document Expiry', level: 'State Level', date: '2026-03-10', category: 'Compliance' },
  { id: 3, title: 'Driver Background Verification Status', type: 'Driver Compliance', level: 'District Level', date: '2026-03-12', category: 'Compliance' },
  
  // Inspection
  { id: 4, title: 'Monthly Inspection Performance', type: 'Audit', level: 'State Level', date: '2026-03-15', category: 'Inspection' },
  { id: 5, title: 'Geo-tagging & Selfie Verification Log', type: 'Verification', level: 'Thana Level', date: '2026-03-14', category: 'Inspection' },
  { id: 6, title: 'Pending Re-inspections List', type: 'Follow-up', level: 'Block Level', date: '2026-03-16', category: 'Inspection' },

  // Violation
  { id: 7, title: 'Speed Governor Missing / Tampered', type: 'Safety Violation', level: 'District Level', date: '2026-03-13', category: 'Violation' },
  { id: 8, title: 'Overcrowding & Route Deviations', type: 'Operational Violation', level: 'School Level', date: '2026-03-11', category: 'Violation' },
  { id: 9, title: 'Penalty Collection & Outstanding Dues', type: 'Financial', level: 'State Level', date: '2026-03-18', category: 'Violation' },

  // Other
  { id: 10, title: 'Vendor Fleet Distribution Report', type: 'Vendor', level: 'District Level', date: '2026-03-09', category: 'Other' },
  { id: 11, title: 'School Portal Onboarding Progress', type: 'System', level: 'State Level', date: '2026-03-17', category: 'Other' },
];

const ReportsAnalytics = () => {
  // Default tab set to 'All'
  const [activeTab, setActiveTab] = useState('All');

  // Exact filtering logic
  const filteredReports = activeTab === 'All' 
    ? reportsData 
    : reportsData.filter(report => report.category === activeTab);

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Reports & Analytics</h1>
          <p className="text-slate-500 text-sm mt-1">School-wise, Block-wise, Thana-wise, District-wise & State Level reports</p>
        </div>
        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors shadow-sm">
          All Districts
          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* District-wise Compliance Bar Chart */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-sm text-slate-800 mb-6">District-wise Compliance Comparison</h3>
          
          <div className="relative pl-24 pr-4 py-4 h-64 flex flex-col justify-between">
            {/* Background Grid Lines (Vertical) */}
            <div className="absolute inset-y-4 left-24 right-4 flex justify-between pointer-events-none">
              {[0, 25, 50, 75, 100].map((val, i) => (
                <div key={i} className="h-full border-l border-dashed border-gray-200 relative">
                  <span className="absolute -bottom-6 -translate-x-1/2 text-[10px] text-gray-400 font-medium">{val}</span>
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              {districtComplianceData.map((data, index) => (
                <div key={index} className="flex items-center group">
                  <span className="absolute left-0 w-20 text-right text-xs text-slate-500 font-medium truncate pr-2">
                    {data.district}
                  </span>
                  <div className="w-full h-5 bg-transparent rounded-sm flex items-center">
                    <div 
                      className="h-4 bg-[#1e3a8a] rounded-r-sm group-hover:bg-blue-800 transition-colors"
                      style={{ width: `${data.compliance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inspection Performance Line Chart */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-sm text-slate-800 mb-6">Inspection Performance</h3>
          
          <div className="relative h-64 flex items-end ml-10 mb-6">
            
            {/* Y-Axis Guidelines & Labels */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1200, 900, 600, 300, 0].map((label, i) => (
                <div key={i} className="flex items-center w-full relative">
                  <span className="absolute -left-10 text-[10px] text-gray-400 font-medium w-8 text-right">{label}</span>
                  <div className="w-full border-t border-dashed border-gray-200"></div>
                </div>
              ))}
            </div>

            {/* Custom SVG Line Chart */}
            <div className="w-full h-[calc(100%-12px)] relative z-10">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                {/* Line 1 (Grey) */}
                <polyline 
                  points="5,15 23,18 41,6 59,10 77,8 95,-5" 
                  fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinejoin="round" 
                />
                {/* Line 2 (Green) */}
                <polyline 
                  points="5,25 23,24 41,30 59,20 77,16 95,35" 
                  fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round" 
                />
                
                {/* Data Points Line 1 */}
                <circle cx="5" cy="15" r="1.5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="23" cy="18" r="1.5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="41" cy="6" r="1.5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="59" cy="10" r="1.5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="77" cy="8" r="1.5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="95" cy="-5" r="1.5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Data Points Line 2 */}
                <circle cx="5" cy="25" r="1.5" fill="white" stroke="#22c55e" strokeWidth="1" />
                <circle cx="23" cy="24" r="1.5" fill="white" stroke="#22c55e" strokeWidth="1" />
                <circle cx="41" cy="30" r="1.5" fill="white" stroke="#22c55e" strokeWidth="1" />
                <circle cx="59" cy="20" r="1.5" fill="white" stroke="#22c55e" strokeWidth="1" />
                <circle cx="77" cy="16" r="1.5" fill="white" stroke="#22c55e" strokeWidth="1" />
                <circle cx="95" cy="35" r="1.5" fill="white" stroke="#22c55e" strokeWidth="1" />
              </svg>
            </div>
            
            {/* Solid Y and X Axis lines */}
            <div className="absolute left-0 top-0 bottom-0 border-l border-gray-400 z-10"></div>
            <div className="absolute bottom-0 w-full border-b border-gray-400 z-10"></div>
          </div>

          {/* X-Axis Labels */}
          <div className="w-full flex justify-between pl-10 pr-2">
            {lineChartData.map((data, index) => (
              <div key={index} className="text-[10px] text-gray-400 font-medium">
                {data.month}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Available Reports Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-sm text-slate-800 mb-4">Available Reports <span className="text-slate-500 font-normal">— Exportable as PDF & Excel</span></h3>
        
        {/* Tabs */}
        <div className="inline-flex bg-slate-50 p-1 rounded-lg mb-6 border border-gray-100 overflow-x-auto max-w-full">
          {reportTabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white text-slate-800 shadow-sm border border-gray-200' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Report List */}
        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredReports.map((report) => (
            <div key={report.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border border-gray-100 bg-gray-50/50 rounded-lg hover:bg-white transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-100 shrink-0">
                  <FileText className="text-[#1e3a8a]" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{report.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {report.type} &bull; {report.level} &bull; {report.date}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-end mt-2 sm:mt-0">
                <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 transition-colors shadow-sm flex-1 sm:flex-none">
                  <Download size={14} />
                  PDF
                </button>
                <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 transition-colors shadow-sm flex-1 sm:flex-none">
                  <FileSpreadsheet size={14} />
                  Excel
                </button>
              </div>
            </div>
          ))}
          {filteredReports.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              No reports found for this category.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default ReportsAnalytics;