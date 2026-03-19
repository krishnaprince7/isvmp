import React from 'react';
import { Search } from 'lucide-react';

const DriverVerification = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="font-bold text-gray-800">Driver Police Verification Status</h3>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search driver..." 
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 w-full sm:w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Driver Name</th>
              <th className="px-6 py-4">DL Number</th>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">School</th>
              <th className="px-6 py-4">Thana</th>
              <th className="px-6 py-4">Police Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Ramesh Kumar</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP3220220012345</td>
              <td className="px-6 py-4 text-gray-600">UP32 AB 1234</td>
              <td className="px-6 py-4 text-gray-600">DPS Lucknow</td>
              <td className="px-6 py-4 text-gray-600">Sadar</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Verified
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Sunil Yadav</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP3220210054321</td>
              <td className="px-6 py-4 text-gray-600">UP32 CD 5678</td>
              <td className="px-6 py-4 text-gray-600">City Montessori</td>
              <td className="px-6 py-4 text-gray-600">Gomti Nagar</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Verified
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Amit Singh</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP3220190098765</td>
              <td className="px-6 py-4 text-gray-600">UP32 EF 9012</td>
              <td className="px-6 py-4 text-gray-600">St. Xavier's</td>
              <td className="px-6 py-4 text-gray-600">Chinhat</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Pending
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Rajesh Tiwari</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP3220200076543</td>
              <td className="px-6 py-4 text-gray-600">UP32 GH 3456</td>
              <td className="px-6 py-4 text-gray-600">Army Public</td>
              <td className="px-6 py-4 text-gray-600">Cantonment</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Verified
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Mohammad Ali</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP3220230011111</td>
              <td className="px-6 py-4 text-gray-600">UP32 IJ 7890</td>
              <td className="px-6 py-4 text-gray-600">Modern Academy</td>
              <td className="px-6 py-4 text-gray-600">Aliganj</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Pending
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
              <td className="px-6 py-4 font-bold text-gray-800">Vikram Chauhan</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP3220220022222</td>
              <td className="px-6 py-4 text-gray-600">UP32 KL 2345</td>
              <td className="px-6 py-4 text-gray-600">GD Goenka</td>
              <td className="px-6 py-4 text-gray-600">Hazratganj</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Pending
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverVerification;