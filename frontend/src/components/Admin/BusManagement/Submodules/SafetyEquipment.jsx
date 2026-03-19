import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, FileText, User, ShieldCheck, Building2, 
  FileSignature, ChevronLeft, ChevronRight 
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Vehicle Details', icon: Check, status: 'completed' },
  { id: 2, label: 'Documents', icon: Check, status: 'completed' },
  { id: 3, label: 'Driver Details', icon: Check, status: 'completed' },
  { id: 4, label: 'Safety Equipment', icon: ShieldCheck, status: 'active' },
  { id: 5, label: 'School Attachment', icon: Building2, status: 'inactive' },
  { id: 6, label: 'Affidavit', icon: FileSignature, status: 'inactive' },
];

const safetyItems = [
  { id: 'fire_ext', title: 'Fire Extinguisher', desc: 'Valid fire extinguisher installed in the bus' },
  { id: 'first_aid', title: 'First Aid Kit', desc: 'Complete first aid kit available' },
  { id: 'cctv', title: 'CCTV Camera', desc: 'Functioning CCTV cameras inside the bus' },
  { id: 'gps', title: 'GPS Device', desc: 'GPS tracking device installed and active' },
  { id: 'speed_gov', title: 'Speed Governor', desc: 'Speed governor set to 40 km/h' },
  { id: 'emergency_exit', title: 'Emergency Exit', desc: 'Emergency exit door functional' },
  { id: 'reflective_tape', title: 'Reflective Tape', desc: 'Reflective tape on rear and sides' },
  { id: 'reverse_horn', title: 'Reverse Horn', desc: 'Reverse horn/alarm functional' },
  { id: 'name_board', title: 'School Name Board', desc: 'School name and contact displayed on vehicle' },
  { id: 'helpline', title: 'Helpline Number', desc: 'Emergency helpline number displayed' },
];

const SafetyEquipment = () => {
  const navigate = useNavigate();
  // State to handle which items are checked
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800 animate-in fade-in duration-300">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-10 px-2">
        <h1 className="text-2xl font-bold text-slate-800">
          Vehicle Onboarding
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Register a school-owned or affiliated vehicle on the portal
        </p>
      </div>

      {/* Stepper / Progress Bar (FIXED ALIGNMENT & GAP TRICK) */}
      <div className="relative mb-12 max-w-5xl mx-auto px-4">
        {/* Connecting Background Line - Centered Vertically */}
        <div className="absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-gray-200 z-0 hidden md:block">
          {/* Green Progress Fill - covers distance from Step 1 to Step 4 */}
          <div className="absolute top-0 left-0 h-full bg-[#22c55e] w-[60%] transition-all duration-500"></div>
        </div>
        
        {/* Yahan se scroll hata diya gaya hai */}
        <div className="flex justify-between relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            
            // Determine styles based on step status
            let circleStyle = 'bg-white text-slate-400 border-gray-100 border-[3px]';
            let textStyle = 'text-slate-400';
            
            if (step.status === 'completed') {
              circleStyle = 'bg-[#22c55e] text-white border-[#22c55e] border-[3px] shadow-sm';
              textStyle = 'text-[#22c55e]';
            } else if (step.status === 'active') {
              circleStyle = 'bg-[#1e3a8a] text-white  shadow-md ring-[#1e3a8a]/20';
              textStyle = 'text-[#1e3a8a]';
            }

            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-transparent w-24 shrink-0 relative">
                {/* YAHAN GAP TRICK ADD KI HAI: bg-slate-50 px-2 */}
                <div className="bg-slate-50 px-4 rounded-full relative z-10">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${circleStyle}`}>
                    <Icon size={18} strokeWidth={step.status === 'completed' ? 3 : 2} />
                  </div>
                </div>
                <span className={`text-[11px] font-semibold text-center mt-1 leading-tight ${textStyle}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-4xl mx-auto flex flex-col min-h-[500px]">
        
        <div className="p-6 md:p-8 flex-1">
          {/* Step Header */}
          <div className="mb-8">
            <h2 className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
              <ShieldCheck size={18} className="text-[#1e3a8a]" />
              Step 4: Safety Equipment
            </h2>
            <p className="text-sm text-slate-500 mt-1 ml-6">
              Physical safety equipment checklist
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyItems.map((item) => (
              <label 
                key={item.id} 
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${
                  checkedItems[item.id] 
                    ? 'border-[#1e3a8a] bg-blue-50/30' 
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  <input 
                    type="checkbox" 
                    checked={!!checkedItems[item.id]}
                    onChange={() => handleCheck(item.id)}
                    className="w-4 h-4 text-[#1e3a8a] bg-white border-gray-300 rounded focus:ring-[#1e3a8a] cursor-pointer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 mb-0.5">{item.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500 leading-snug">{item.desc}</p>
                </div>
              </label>
            ))}
          </div>

        </div>

        {/* Form Footer / Navigation */}
        <div className="p-6 border-t border-gray-100 bg-slate-50/50 rounded-b-xl flex justify-between items-center">
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          
          <span className="text-xs font-semibold text-slate-500">
            Step 4 of 6
          </span>

          <button 
            onClick={() => navigate('/bus-management/register-school')} // Aap apne route ke hisaab se update kar lena
            className="flex items-center gap-1.5 px-6 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default SafetyEquipment;