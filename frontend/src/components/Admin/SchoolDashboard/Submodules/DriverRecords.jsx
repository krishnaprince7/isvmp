import React from 'react';
import { Check, X } from 'lucide-react';

const DriverRecords = () => {
  const drivers = [
    { name: 'Ramesh Kumar', dl: 'UP3220220012345', expiry: '2028-05-15', phone: '+91 98765 43210', vehicle: 'UP32 AB 1234', sarathi: 'Verified', verification: 'Verified' },
    { name: 'Sunil Yadav', dl: 'UP3220210054321', expiry: '2027-11-20', phone: '+91 87654 32109', vehicle: 'UP32 CD 5678', sarathi: 'Verified', verification: 'Verified' },
    { name: 'Amit Singh', dl: 'UP3220190098765', expiry: '2026-06-10', phone: '+91 76543 21098', vehicle: 'UP32 EF 9012', sarathi: 'Verified', verification: 'Pending' },
    { name: 'Rajesh Tiwari', dl: 'UP3220200076543', expiry: '2029-02-28', phone: '+91 65432 10987', vehicle: 'UP32 GH 3456', sarathi: 'Verified', verification: 'Verified' },
  ];

  return (
    <div className="animate-in p-2 fade-in slide-in-from-bottom-2 duration-300">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Driver Name</th>
              <th className="px-6 py-4">DL Number</th>
              <th className="px-6 py-4">DL Expiry</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">SARATHI</th>
              <th className="px-6 py-4">Police Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {drivers.map((d, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">{d.name}</td>
                <td className="px-6 py-4 text-gray-500 font-medium">{d.dl}</td>
                <td className="px-6 py-4 text-gray-600">{d.expiry}</td>
                <td className="px-6 py-4 text-gray-600">{d.phone}</td>
                <td className="px-6 py-4 font-bold text-[11px]">{d.vehicle}</td>
                <td className="px-6 py-4 text-green-600 flex items-center gap-1 text-[11px]"><Check className="w-3 h-3" /> Verified</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${d.verification === 'Verified' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${d.verification === 'Verified' ? 'bg-green-500' : 'bg-red-500'}`}></div> {d.verification}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DriverRecords;