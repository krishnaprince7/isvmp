import React from 'react';

const ThanaSummary = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="p-5 border-b border-gray-200">
        <h3 className="font-bold text-gray-800">Thana-wise Driver & Vehicle Summary</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Thana</th>
              <th className="px-6 py-4">Vehicles</th>
              <th className="px-6 py-4">Drivers Verified</th>
              <th className="px-6 py-4">Pending</th>
              <th className="px-6 py-4">Challans</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Sadar</td>
              <td className="px-6 py-4 font-medium text-gray-600">120</td>
              <td className="px-6 py-4 text-green-600 font-medium">108</td>
              <td className="px-6 py-4 text-amber-600 font-medium">12</td>
              <td className="px-6 py-4 text-red-600 font-medium">5</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Gomti Nagar</td>
              <td className="px-6 py-4 font-medium text-gray-600">150</td>
              <td className="px-6 py-4 text-green-600 font-medium">125</td>
              <td className="px-6 py-4 text-amber-600 font-medium">25</td>
              <td className="px-6 py-4 text-red-600 font-medium">8</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Hazratganj</td>
              <td className="px-6 py-4 font-medium text-gray-600">85</td>
              <td className="px-6 py-4 text-green-600 font-medium">78</td>
              <td className="px-6 py-4 text-amber-600 font-medium">7</td>
              <td className="px-6 py-4 text-red-600 font-medium">3</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Aliganj</td>
              <td className="px-6 py-4 font-medium text-gray-600">68</td>
              <td className="px-6 py-4 text-green-600 font-medium">55</td>
              <td className="px-6 py-4 text-amber-600 font-medium">13</td>
              <td className="px-6 py-4 text-red-600 font-medium">2</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-800">Chinhat</td>
              <td className="px-6 py-4 font-medium text-gray-600">95</td>
              <td className="px-6 py-4 text-green-600 font-medium">70</td>
              <td className="px-6 py-4 text-amber-600 font-medium">25</td>
              <td className="px-6 py-4 text-red-600 font-medium">6</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
              <td className="px-6 py-4 font-bold text-gray-800">Cantonment</td>
              <td className="px-6 py-4 font-medium text-gray-600">52</td>
              <td className="px-6 py-4 text-green-600 font-medium">50</td>
              <td className="px-6 py-4 text-amber-600 font-medium">2</td>
              <td className="px-6 py-4 text-red-600 font-medium">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThanaSummary;