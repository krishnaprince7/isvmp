import React from 'react';
import { Search } from 'lucide-react';

// --- Dummy Data ---
const usersData = [
  { id: 'USR-001', name: 'Dr. R.K. Sharma', role: 'Transport Commissioner', district: 'State Level', lastLogin: '2026-03-15 09:15', status: 'Active' },
  { id: 'USR-002', name: 'Ankit Verma', role: 'RTO', district: 'Lucknow', lastLogin: '2026-03-15 08:42', status: 'Active' },
  { id: 'USR-003', name: 'Priya Singh', role: 'ARTO', district: 'Kanpur', lastLogin: '2026-03-14 17:30', status: 'Active' },
  { id: 'USR-004', name: 'Suresh Kumar', role: 'BSA', district: 'Agra', lastLogin: '2026-03-14 16:15', status: 'Active' },
  { id: 'USR-005', name: 'Meena Gupta', role: 'School Admin', district: 'Lucknow', lastLogin: '2026-03-15 07:30', status: 'Active' },
  { id: 'USR-006', name: 'Rajesh Tiwari', role: 'Vendor', district: 'Lucknow', lastLogin: '2026-03-13 14:20', status: 'Active' },
  { id: 'USR-007', name: 'Amit Pandey', role: 'RI/MVI', district: 'Varanasi', lastLogin: '2026-03-15 06:45', status: 'Active' },
  { id: 'USR-008', name: 'Sanjay Mishra', role: 'DM', district: 'Lucknow', lastLogin: '2026-03-14 10:00', status: 'Active' },
  { id: 'USR-009', name: 'Kavita Rao', role: 'Police', district: 'Lucknow', lastLogin: '2026-03-14 09:00', status: 'Active' },
  { id: 'USR-010', name: 'Mohd. Farooq', role: 'Vendor', district: 'Meerut', lastLogin: '2026-02-28 11:30', status: 'Inactive' },
];

const getStatusStyles = (status) => {
  if (status === 'Active') {
    return { text: 'text-emerald-700', bg: 'bg-emerald-100', dot: 'bg-emerald-500' };
  }
  return { text: 'text-blue-700', bg: 'bg-blue-100', dot: 'bg-blue-500' };
};

const AllUsers = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden font-sans">
      
      {/* Table Toolbar */}
      <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
        <h3 className="font-semibold text-slate-800">All Users</h3>
        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full sm:w-64 pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
            />
          </div>
          <select className="border border-gray-200 rounded-md text-sm px-4 py-2 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none min-w-[120px]">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">NAME</th>
              <th className="px-6 py-4">ROLE</th>
              <th className="px-6 py-4">DISTRICT</th>
              <th className="px-6 py-4">LAST LOGIN</th>
              <th className="px-6 py-4">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {usersData.map((user, index) => {
              const styles = getStatusStyles(user.status);
              
              return (
                <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700">
                  <td className="px-6 py-4 font-bold text-slate-900 text-xs">{user.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{user.name}</td>
                  
                  {/* Role Pill */}
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-[#1e3a8a] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {user.role}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4 text-slate-500">{user.district}</td>
                  <td className="px-6 py-4 text-slate-500">{user.lastLogin}</td>
                  
                  {/* Status Pill */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${styles.bg} ${styles.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                      {user.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllUsers;