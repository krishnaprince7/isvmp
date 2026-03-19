import React, { useState } from 'react';
import { 
  UserPlus, Users, ShieldCheck, UserX, Search, X, User 
} from 'lucide-react';
import AllUsers from './AllUsers';

// --- Dummy Data ---
const rolesData = [
  { title: 'Transport Commissioner', perms: ['Full System Access', 'Configure Rules', 'Manage Users', 'View All Reports'], more: '+1 more' },
  { title: 'RTO', perms: ['District Dashboard', 'Schedule Inspections', 'Issue Notices', 'View Reports'], more: '+1 more' },
  { title: 'ARTO', perms: ['District Dashboard', 'Conduct Inspections', 'Record Violations', 'View Reports'] },
  { title: 'RI/MVI', perms: ['Mobile Inspection App', 'Inspection Checklist', 'Photo Upload', 'Geo-Tag'], more: '+1 more' },
  { title: 'BSA', perms: ['BSA Dashboard', 'School Compliance View', 'Block Reports', 'School Rankings'] },
  { title: 'DM', perms: ['DM Dashboard', 'Thana-wise Overview', 'Critical Issues', 'District Reports'] },
  { title: 'Police', perms: ['Police Dashboard', 'Driver Verification', 'Challan Management', 'Thana Summary'] },
  { title: 'School Admin', perms: ['School Dashboard', 'Vehicle Onboarding', 'Driver Records', 'Committee Uploads'], more: '+1 more' },
  { title: 'Vendor', perms: ['Vendor Dashboard', 'Fleet Management', 'Compliance Documents'] },
  { title: 'Inspector', perms: ['Inspection List', 'Inspection Checklist', 'Photo/Selfie Upload', 'Geo-Tag'], more: '+2 more' },
];

const UserManagement = () => {
  // State to handle the Add User Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800 relative">
      
      {/* --- Header Section --- */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
          <p className="text-slate-500 text-sm mt-1">OTP-based login credentials • Role-based access control</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors shadow-sm"
        >
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      {/* --- KPI Cards --- */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        
        {/* Total Users */}
        <div className="bg-[#1e3a8a] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-blue-100 text-[11px] font-semibold uppercase tracking-wider mb-2">Total Users</p>
            <h2 className="text-4xl font-bold">10</h2>
          </div>
          <div className="bg-blue-800/50 p-3 rounded-lg">
            <User size={24} className="text-blue-200" />
          </div>
        </div>

        {/* Active */}
        <div className="bg-[#22c55e] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-green-100 text-[11px] font-semibold uppercase tracking-wider mb-2">Active</p>
            <h2 className="text-4xl font-bold">9</h2>
          </div>
          <div className="bg-green-600/50 p-3 rounded-lg">
            <ShieldCheck size={24} className="text-green-100" />
          </div>
        </div>

        {/* Inactive */}
        <div className="bg-[#f59e0b] rounded-xl p-6 text-white shadow-sm flex justify-between items-center">
          <div>
            <p className="text-yellow-100 text-[11px] font-semibold uppercase tracking-wider mb-2">Inactive</p>
            <h2 className="text-4xl font-bold">1</h2>
          </div>
          <div className="bg-amber-600/50 p-3 rounded-lg">
            <UserX size={24} className="text-yellow-100" />
          </div>
        </div>

        {/* Roles */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-2">Roles</p>
            <h2 className="text-4xl font-bold text-slate-800">10</h2>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
            <Users size={24} className="text-[#1e3a8a]" />
          </div>
        </div>

      </div>

      {/* --- Role Permissions Matrix --- */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="font-bold text-sm text-slate-800 mb-6">Role Permissions Matrix</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {rolesData.map((role, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 transition-colors bg-white flex flex-col h-full">
              <h4 className="font-bold text-[#1e3a8a] text-sm mb-3">{role.title}</h4>
              <ul className="space-y-2 mb-2 flex-1">
                {role.perms.map((perm, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] font-medium text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                    {perm}
                  </li>
                ))}
              </ul>
              {role.more && (
                <div className="text-[10px] text-slate-400 font-medium mt-auto pt-2">
                  {role.more}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

     <AllUsers/>
    

      {/* --- ADD NEW USER MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          
          {/* Modal Container */}
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[440px] flex flex-col animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-slate-800">Add New User</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-md transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body (Form) */}
            <div className="p-6 flex flex-col gap-4">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter full name" 
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Mobile Number (for OTP Login)</label>
                <input 
                  type="text" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Email</label>
                <input 
                  type="email" 
                  placeholder="user@example.com" 
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Role</label>
                <select className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
                  <option value="" disabled selected>Select role</option>
                  {rolesData.map((r, i) => <option key={i} value={r.title}>{r.title}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">District</label>
                <select className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
                  <option value="" disabled selected>Select district</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Agra">Agra</option>
                </select>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3 bg-slate-50/50 rounded-b-xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-[#1e3a8a] hover:bg-blue-800 rounded-lg shadow-sm transition-colors">
                Create User
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default UserManagement;