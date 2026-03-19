import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const ComplianceChecklist = () => {
  const items = [
    { task: "All vehicles registered with Transport Department", status: "Done" },
    { task: "Valid fitness certificates (VAHAN verified)", status: "Done" },
    { task: "Insurance current for all vehicles (VAHAN verified)", status: "Done" },
    { task: "GPS installed and active on all vehicles", status: "Pending" },
    { task: "CCTV cameras operational", status: "Pending" },
    { task: "Speed governors installed (40 km/h limit)", status: "Done" },
    { task: "Fire extinguishers present & valid", status: "Done" },
    { task: "First aid kits available", status: "Done" },
    { task: "Emergency exit doors functional", status: "Done" },
    { task: "Driver police verification completed", status: "Pending" },
  ];

  return (
    <div className=" animate-in p-2 fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">School Compliance Checklist</h3>
        <span className="text-xs font-bold text-gray-400">10/14 completed</span>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className={`flex justify-between items-center p-3 rounded-lg border ${item.status === 'Done' ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
            <div className="flex items-center gap-3">
              {item.status === 'Done' ? <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50" /> : <Circle className="w-5 h-5 text-gray-300" />}
              <span className={`text-sm font-medium ${item.status === 'Done' ? 'text-gray-700' : 'text-gray-500'}`}>{item.task}</span>
            </div>
            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${item.status === 'Done' ? 'text-green-600' : 'text-red-500'}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ComplianceChecklist;