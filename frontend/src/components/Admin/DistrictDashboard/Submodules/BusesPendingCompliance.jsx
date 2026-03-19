import React from 'react';
import { AlertCircle } from 'lucide-react';

const BusesPendingCompliance = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="text-[11px] text-gray-500 uppercase font-bold border-b border-gray-100 bg-gray-50/50">
          <tr>
            <th className="py-3 px-4">Bus No.</th>
            <th className="py-3 px-4">School</th>
            <th className="py-3 px-4">Issue</th>
            <th className="py-3 px-4">Pending Days</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 text-gray-700">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 AB 1234</td>
            <td className="py-4 px-4 text-gray-600">DPS Lucknow</td>
            <td className="py-4 px-4 text-gray-500">Speed Governor Missing</td>
            <td className="py-4 px-4 font-medium text-gray-800">5 days</td>
            <td className="py-4 px-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
              </span>
            </td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400" /> Issue Notice
              </button>
            </td>
          </tr>
          
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 CD 5678</td>
            <td className="py-4 px-4 text-gray-600">City Montessori</td>
            <td className="py-4 px-4 text-gray-500">Fitness Expiring in 7 days</td>
            <td className="py-4 px-4 font-medium text-gray-800">7 days</td>
            <td className="py-4 px-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
              </span>
            </td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400" /> Issue Notice
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 EF 9012</td>
            <td className="py-4 px-4 text-gray-600">St. Francis</td>
            <td className="py-4 px-4 text-gray-500">No CCTV Camera</td>
            <td className="py-4 px-4 font-medium text-gray-800">3 days</td>
            <td className="py-4 px-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
              </span>
            </td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400" /> Issue Notice
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 GH 3456</td>
            <td className="py-4 px-4 text-gray-600">Army Public School</td>
            <td className="py-4 px-4 text-gray-500">Insurance Expired</td>
            <td className="py-4 px-4 font-medium text-gray-800">10 days</td>
            <td className="py-4 px-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
              </span>
            </td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400" /> Issue Notice
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 IJ 7890</td>
            <td className="py-4 px-4 text-gray-600">Modern Academy</td>
            <td className="py-4 px-4 text-gray-500">GPS Not Working</td>
            <td className="py-4 px-4 font-medium text-gray-800">2 days</td>
            <td className="py-4 px-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
              </span>
            </td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400" /> Issue Notice
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BusesPendingCompliance;