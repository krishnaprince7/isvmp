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
  { id: 4, label: 'Safety Equipment', icon: Check, status: 'completed' },
  { id: 5, label: 'School Attachment', icon: Building2, status: 'active' },
  { id: 6, label: 'Affidavit', icon: FileSignature, status: 'inactive' },
];

const schoolsList = [
  { id: 1, name: 'Delhi Public School, Lucknow', udise: '09101234567', block: 'Sadar' },
  { id: 2, name: 'City Montessori School', udise: '09101234568', block: 'Gomti Nagar' },
  { id: 3, name: 'GD Goenka Public School', udise: '09101234569', block: 'Aliganj' },
];

const SchoolAttachment = () => {
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleSelect = (id) => {
    // Allows only one school to be selected at a time (like a radio button)
    setSelectedSchool(selectedSchool === id ? null : id);
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
          {/* Green Progress Fill - covers distance from Step 1 to Step 5 */}
          <div className="absolute top-0 left-0 h-full bg-[#22c55e] w-[80%] transition-all duration-500"></div>
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
              circleStyle = 'bg-[#1e3a8a] text-white  shadow-md  ring-[#1e3a8a]/20';
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
              <Building2 size={18} className="text-[#1e3a8a]" />
              Step 5: School Attachment
            </h2>
            <p className="text-sm text-slate-500 mt-1 ml-6">
              Attach vehicle to school
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            
            {/* Search & District Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Search School</label>
                <input 
                  type="text" 
                  placeholder="Search by school name or UDISE code..." 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">District</label>
                <select className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
                  <option value="" disabled selected>Select district</option>
                  <option value="lucknow">Lucknow</option>
                  <option value="kanpur">Kanpur</option>
                  <option value="agra">Agra</option>
                </select>
              </div>
            </div>

            {/* Select School List */}
            <div>
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                Select School
              </h3>
              
              <div className="space-y-3">
                {schoolsList.map((school) => (
                  <div 
                    key={school.id}
                    onClick={() => handleSelect(school.id)}
                    className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
                      selectedSchool === school.id 
                        ? 'border-[#1e3a8a] bg-blue-50/30' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* School Icon */}
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
                        <Building2 size={18} />
                      </div>
                      
                      {/* School Details */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-0.5">{school.name}</h4>
                        <p className="text-[11px] font-medium text-slate-500">
                          UDISE: {school.udise} &bull; Block: {school.block}
                        </p>
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div className="shrink-0 ml-4">
                      <input 
                        type="checkbox" 
                        checked={selectedSchool === school.id}
                        readOnly
                        className="w-4 h-4 text-[#1e3a8a] bg-white border-gray-300 rounded focus:ring-[#1e3a8a] cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Route Description */}
            <div className="flex flex-col gap-1.5 pt-2">
              <label className="text-xs font-semibold text-slate-700">Route Description</label>
              <input 
                type="text" 
                placeholder="e.g., Gomti Nagar -> Hazratganj -> Sadar -> School" 
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
            </div>

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
            Step 5 of 6
          </span>

          <button 
            onClick={() => navigate('/bus-management/register-affidavit')} // Aap apne last route ka path daal dena
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

export default SchoolAttachment;