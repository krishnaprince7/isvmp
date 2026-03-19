import React from 'react';
import { Search, Plus, ShieldCheck, ShieldAlert, Building2, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const schoolData = [
  { name: 'Delhi Public School', udise: '09101234567', block: 'Sadar / Sadar', district: 'Lucknow', owned: 12, affiliated: 4, nodal: 'Mr. A.K. Gupta', compliance: 94, status: 'Compliant' },
  { name: 'City Montessori School', udise: '09101234568', block: 'Gomti Nagar / Gomti Nagar', district: 'Lucknow', owned: 28, affiliated: 12, nodal: 'Mrs. S. Verma', compliance: 67, status: 'Warning' },
  { name: "St. Xavier's College", udise: '09201234567', block: 'Civil Lines / Sadar', district: 'Agra', owned: 8, affiliated: 3, nodal: 'Fr. Thomas', compliance: 42, status: 'Violation' },
  { name: 'Army Public School', udise: '09301234567', block: 'Cantonment / Cantonment', district: 'Varanasi', owned: 6, affiliated: 0, nodal: 'Col. R. Singh', compliance: 91, status: 'Compliant' },
  { name: 'Kendriya Vidyalaya', udise: '09401234567', block: 'Sector 12 / Civil Lines', district: 'Prayagraj', owned: 4, affiliated: 2, nodal: 'Mr. P. Kumar', compliance: 88, status: 'Compliant' },
  { name: 'Ryan International', udise: '09501234567', block: 'Swaroop Nagar / Kanpur Central', district: 'Kanpur', owned: 15, affiliated: 8, nodal: 'Ms. R. Sharma', compliance: 55, status: 'Violation' },
  { name: 'GD Goenka Public School', udise: '09101234569', block: 'Aliganj / Aliganj', district: 'Lucknow', owned: 10, affiliated: 5, nodal: 'Dr. M. Gupta', compliance: 78, status: 'Warning' },
  { name: 'Modern Academy', udise: '09101234570', block: 'Daliganj / Hazratganj', district: 'Lucknow', owned: 7, affiliated: 2, nodal: 'Mr. V. Tiwari', compliance: 96, status: 'Compliant' },
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

const SchoolManagement = () => {
  const navigate = useNavigate()
  return (
    <div className=" bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">School Management</h1>
          <p className="text-slate-500 text-sm mt-1">School-owned & affiliated vehicle monitoring</p>
        </div>
        <button
        onClick={()=>{
          navigate("register")
        }}
         className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
          <Plus size={18} />
          Register School
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Total Schools */}
        <div className="bg-[#1e3a8a] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2">Total Schools</p>
            <h2 className="text-3xl font-bold">24,856</h2>
          </div>
          <div className="bg-blue-800/50 p-3 rounded-lg">
            <Building2 size={24} className="text-blue-200" />
          </div>
        </div>

        {/* With Vehicles */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">With Vehicles</p>
            <h2 className="text-3xl font-bold text-slate-800">18,432</h2>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <Building2 size={24} className="text-[#1e3a8a]" />
          </div>
        </div>

        {/* Compliant */}
        <div className="bg-[#22c55e] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-green-100 text-xs font-semibold uppercase tracking-wider mb-2">Compliant</p>
            <h2 className="text-3xl font-bold">14,890</h2>
          </div>
          <div className="bg-green-600/50 p-3 rounded-lg">
            <ShieldCheck size={24} className="text-green-100" />
          </div>
        </div>

        {/* Non-Compliant */}
        <div className="bg-[#ef4444] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-red-100 text-xs font-semibold uppercase tracking-wider mb-2">Non-Compliant</p>
            <h2 className="text-3xl font-bold">3,542</h2>
          </div>
          <div className="bg-red-600/50 p-3 rounded-lg">
            <ShieldAlert size={24} className="text-red-100" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">All Schools</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name or UDISE." 
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="border border-gray-200 rounded-md text-sm px-4 py-2 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
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
            <thead className="bg-slate-50 text-slate-500 text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">SCHOOL NAME</th>
                <th className="px-6 py-4">UDISE CODE</th>
                <th className="px-6 py-4">BLOCK / THANA</th>
                <th className="px-6 py-4">DISTRICT</th>
                <th className="px-6 py-4">OWNED</th>
                <th className="px-6 py-4">AFFILIATED</th>
                <th className="px-6 py-4">NODAL OFFICER</th>
                <th className="px-6 py-4">COMPLIANCE</th>
                <th className="px-6 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schoolData.map((school, index) => {
                const styles = getStatusStyles(school.status);
                
                return (
                  <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                    <td className="px-6 py-4 font-medium text-slate-900">{school.name}</td>
                    <td className="px-6 py-4 text-slate-500">{school.udise}</td>
                    <td className="px-6 py-4 text-slate-500">{school.block}</td>
                    <td className="px-6 py-4 text-slate-500">{school.district}</td>
                    <td className="px-6 py-4 font-medium">{school.owned}</td>
                    <td className="px-6 py-4 font-medium">{school.affiliated}</td>
                    <td className="px-6 py-4 text-slate-600">{school.nodal}</td>
                    
                    {/* Compliance Progress Bar */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${styles.bar}`} 
                            style={{ width: `${school.compliance}%` }}
                          />
                        </div>
                        <span className="font-medium">{school.compliance}%</span>
                      </div>
                    </td>

                    {/* Status Pill */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${styles.bg} ${styles.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                        {school.status}
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

export default SchoolManagement;