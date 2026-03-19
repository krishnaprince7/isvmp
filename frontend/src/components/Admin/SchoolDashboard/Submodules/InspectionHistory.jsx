import React from 'react';

const InspectionHistory = () => {
  const history = [
    { id: 'INS-2026-089', date: '2026-03-10', inspector: 'R.K. Sharma', vehicles: 4, score: 87, result: 'Fit' },
    { id: 'INS-2025-342', date: '2025-12-15', inspector: 'A. Verma', vehicles: 4, score: 72, result: 'Unfit' },
    { id: 'INS-2025-201', date: '2025-09-20', inspector: 'S. Kumar', vehicles: 3, score: 91, result: 'Fit' },
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-sm  ">
          <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Inspector</th>
              <th className="px-6 py-4 text-center">Vehicles</th>
              <th className="px-6 py-4">Compliance Score</th>
              <th className="px-6 py-4 text-right">Final Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 bg-white">
            {history.map((h, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-[11px] text-[#1e3a8a]">{h.id}</td>
                <td className="px-6 py-4 font-medium">{h.date}</td>
                <td className="px-6 py-4 text-gray-600">{h.inspector}</td>
                <td className="px-6 py-4 text-center font-bold">{h.vehicles}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 w-full max-w-[200px]">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${h.score > 80 ? 'bg-green-500' : 'bg-amber-500'}`} 
                        style={{ width: `${h.score}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-[11px] min-w-[30px]">{h.score}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${
                    h.result === 'Fit' 
                      ? 'bg-green-50 text-green-700 border-green-200' 
                      : 'bg-red-50 text-red-700 border-red-200'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${h.result === 'Fit' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    {h.result}
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

export default InspectionHistory;