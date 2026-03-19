import React from 'react';
import { Plus, Check, X, ChevronRight } from 'lucide-react';

const VehicleList = () => {
  const vehicles = [
    { id: 'UP32 AB 1234', type: 'Standard', ownership: 'School Owned', driver: 'Ramesh Kumar', vahan: 'Verified', compliance: 94, status: 'Compliant' },
    { id: 'UP32 CD 5678', type: 'Mini Bus', ownership: 'Affiliated', driver: 'Sunil Yadav', vahan: 'Verified', compliance: 78, status: 'Warning' },
    { id: 'UP32 EF 9012', type: 'AC Bus', ownership: 'Affiliated', driver: 'Amit Singh', vahan: 'Pending', compliance: 45, status: 'Violation' },
    { id: 'UP32 GH 3456', type: 'Standard', ownership: 'School Owned', driver: 'Rajesh Tiwari', vahan: 'Verified', compliance: 92, status: 'Compliant' },
  ];

  return (
    <div className="animate-in p-2 fade-in slide-in-from-bottom-2 duration-300">
      <div className="p-5 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-bold text-gray-800">School-Owned & Affiliated Vehicles</h3>
        <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-blue-900 transition-colors">
          <Plus className="w-4 h-4" /> Add Vehicle
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Vehicle No.</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Ownership</th>
              <th className="px-6 py-4">Driver</th>
              <th className="px-6 py-4">VAHAN</th>
              <th className="px-6 py-4">Compliance</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {vehicles.map((v, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 font-bold text-[11px] text-gray-800">{v.id}</td>
                <td className="px-6 py-4 text-gray-600 font-medium">{v.type}</td>
                <td className="px-6 py-4 text-gray-600">{v.ownership}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">{v.driver}</td>
                <td className={`px-6 py-4 flex items-center gap-1 text-[11px] font-medium ${v.vahan === 'Verified' ? 'text-green-600' : 'text-red-500'}`}>
                  {v.vahan === 'Verified' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />} {v.vahan}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${v.compliance > 80 ? 'bg-green-500' : v.compliance > 50 ? 'bg-amber-500' : 'bg-red-500'}`} style={{width: `${v.compliance}%`}}></div>
                    </div>
                    <span className="font-bold text-[11px]">{v.compliance}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${v.status === 'Compliant' ? 'bg-green-50 text-green-700 border-green-200' : v.status === 'Warning' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${v.status === 'Compliant' ? 'bg-green-500' : v.status === 'Warning' ? 'bg-amber-500' : 'bg-red-500'}`}></div> {v.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default VehicleList;