import React from 'react';
import { Calendar } from 'lucide-react';

const UpcomingInspections = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="text-[11px] text-gray-500 uppercase font-bold border-b border-gray-100 bg-gray-50/50">
          <tr>
            <th className="py-3 px-4">Bus No.</th>
            <th className="py-3 px-4">School</th>
            <th className="py-3 px-4">Scheduled Date</th>
            <th className="py-3 px-4">Inspector</th>
            <th className="py-3 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 text-gray-700">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 KL 2345</td>
            <td className="py-4 px-4 text-gray-600">GD Goenka</td>
            <td className="py-4 px-4 font-medium text-gray-800">2026-03-16</td>
            <td className="py-4 px-4 text-gray-500">R.K. Sharma</td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-gray-400" /> Reschedule
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 MN 6789</td>
            <td className="py-4 px-4 text-gray-600">Ryan International</td>
            <td className="py-4 px-4 font-medium text-gray-800">2026-03-17</td>
            <td className="py-4 px-4 text-gray-500">A. Verma</td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-gray-400" /> Reschedule
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
            <td className="py-4 px-4 font-bold text-[11px] text-gray-800">UP32 OP 1357</td>
            <td className="py-4 px-4 text-gray-600">Kendriya Vidyalaya</td>
            <td className="py-4 px-4 font-medium text-gray-800">2026-03-18</td>
            <td className="py-4 px-4 text-gray-500">S. Kumar</td>
            <td className="py-4 px-4 text-right">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-gray-400" /> Reschedule
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingInspections;