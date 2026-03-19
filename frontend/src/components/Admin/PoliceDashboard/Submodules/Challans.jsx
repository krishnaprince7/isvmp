import React from 'react';

const Challans = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="p-5 border-b border-gray-200">
        <h3 className="font-bold text-gray-800">Challans Issued Against School Vehicles</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Challan No.</th>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Violation</th>
              <th className="px-6 py-4">Thana</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-[11px] text-gray-800">CH-2026-4521</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP32 AB 1234</td>
              <td className="px-6 py-4 text-gray-600">Over-speeding near school zone</td>
              <td className="px-6 py-4 text-gray-600">Sadar</td>
              <td className="px-6 py-4 font-medium text-gray-800">2026-03-14</td>
              <td className="px-6 py-4 font-bold text-red-600">₹5,000</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-[11px] text-gray-800">CH-2026-4518</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP78 CD 5678</td>
              <td className="px-6 py-4 text-gray-600">Driving without valid badge</td>
              <td className="px-6 py-4 text-gray-600">Gomti Nagar</td>
              <td className="px-6 py-4 font-medium text-gray-800">2026-03-13</td>
              <td className="px-6 py-4 font-bold text-red-600">₹2,000</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-[11px] text-gray-800">CH-2026-4510</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP32 EF 9012</td>
              <td className="px-6 py-4 text-gray-600">Overcrowding (48 students in 40-seater)</td>
              <td className="px-6 py-4 text-gray-600">Chinhat</td>
              <td className="px-6 py-4 font-medium text-gray-800">2026-03-12</td>
              <td className="px-6 py-4 font-bold text-red-600">₹10,000</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
              <td className="px-6 py-4 font-bold text-[11px] text-gray-800">CH-2026-4505</td>
              <td className="px-6 py-4 font-medium text-gray-600">UP54 GH 3456</td>
              <td className="px-6 py-4 text-gray-600">No reflective tape</td>
              <td className="px-6 py-4 text-gray-600">Cantonment</td>
              <td className="px-6 py-4 font-medium text-gray-800">2026-03-11</td>
              <td className="px-6 py-4 font-bold text-red-600">₹1,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Challans;