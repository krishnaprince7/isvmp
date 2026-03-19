import React from 'react';
import { 
  Bus, FileText, User, ShieldCheck, Building2, 
  FileSignature, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { id: 1, label: 'Vehicle Details', icon: Bus, active: true },
  { id: 2, label: 'Documents', icon: FileText, active: false },
  { id: 3, label: 'Driver Details', icon: User, active: false },
  { id: 4, label: 'Safety Equipment', icon: ShieldCheck, active: false },
  { id: 5, label: 'School Attachment', icon: Building2, active: false },
  { id: 6, label: 'Affidavit', icon: FileSignature, active: false },
];

const VehicleOnboarding = () => {
    const navigate = useNavigate();

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
        <div className="absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-gray-200 z-0 hidden md:block"></div>
        
        {/* Yahan se scroll hata diya gaya hai */}
        <div className="flex justify-between relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            
            // Determine styles based on step status
            let circleStyle = 'bg-white text-slate-400 border-gray-100 border-[3px]';
            let textStyle = 'text-slate-400';
            
            if (step.active) {
              circleStyle = 'bg-[#1e3a8a] text-white  shadow-md  ring-[#1e3a8a]/20';
              textStyle = 'text-[#1e3a8a]';
            }

            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-transparent w-24 shrink-0 relative">
                {/* GAP TRICK: bg-slate-50 px-4 */}
                <div className="bg-slate-50 px-4 rounded-full relative z-10">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${circleStyle}`}>
                    <Icon size={18} strokeWidth={step.active ? 2.5 : 2} />
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
              <Bus size={18} className="text-[#1e3a8a]" />
              Step 1: Vehicle Details
            </h2>
            <p className="text-sm text-slate-500 mt-1 ml-6">
              Enter vehicle number — details auto-fetched from VAHAN
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            
            {/* VAHAN Fetch Row */}
            <div className="flex flex-col md:flex-row items-end gap-4">
              <div className="flex-1 w-full flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Vehicle Registration Number</label>
                <input 
                  type="text" 
                  placeholder="e.g., UP32 AB 1234" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>
              <button className="w-full md:w-auto px-6 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap">
                Fetch from VAHAN
              </button>
            </div>

            {/* Grid Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Chassis Number</label>
                <input 
                  type="text" 
                  placeholder="Enter chassis number" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Engine Number</label>
                <input 
                  type="text" 
                  placeholder="Enter engine number" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Vehicle Type</label>
                <select className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
                  <option value="" disabled selected>Select type</option>
                  <option value="bus">School Bus</option>
                  <option value="van">Van / Mini Bus</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Seating Capacity</label>
                <input 
                  type="number" 
                  placeholder="e.g., 40" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Manufacturing Year</label>
                <input 
                  type="number" 
                  placeholder="e.g., 2022" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Fuel Type</label>
                <select className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
                  <option value="" disabled selected>Select fuel</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Ownership Type</label>
                <select className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer appearance-none">
                  <option value="" disabled selected>Select ownership</option>
                  <option value="school_owned">School Owned</option>
                  <option value="vendor">Vendor / Contractor</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        {/* Form Footer / Navigation */}
        <div className="p-6 border-t border-gray-100 bg-slate-50/50 rounded-b-xl flex justify-between items-center">
          <button className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-slate-400 cursor-not-allowed">
            <ChevronLeft size={16} />
            Previous
          </button>
          
          <span className="text-xs font-semibold text-slate-500">
            Step 1 of 6
          </span>

          <button
            onClick={()=>{
              navigate("/bus-management/register-documents")
            }}
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

export default VehicleOnboarding;