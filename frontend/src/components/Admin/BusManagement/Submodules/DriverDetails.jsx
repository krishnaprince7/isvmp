import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, FileText, User, ShieldCheck, Building2, 
  FileSignature, ChevronLeft, ChevronRight, Upload 
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Vehicle Details', icon: Check, status: 'completed' },
  { id: 2, label: 'Documents', icon: Check, status: 'completed' },
  { id: 3, label: 'Driver Details', icon: User, status: 'active' },
  { id: 4, label: 'Safety Equipment', icon: ShieldCheck, status: 'inactive' },
  { id: 5, label: 'School Attachment', icon: Building2, status: 'inactive' },
  { id: 6, label: 'Affidavit', icon: FileSignature, status: 'inactive' },
];

const DriverDetails = () => {
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
        <div className="absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-gray-200 z-0 hidden md:block">
          {/* Green Progress Fill - covers distance from Step 1 to Step 3 */}
          <div className="absolute top-0 left-0 h-full bg-[#22c55e] w-[40%] transition-all duration-500"></div>
        </div>
        
        {/* Yahan se scroll hata diya gaya hai */}
        <div className="flex justify-between relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            
            // Determine styles based on step status
            let circleStyle = 'bg-white text-slate-400 border-gray-100 border-[3px]';
            let textStyle = 'text-slate-400';
            
            if (step.status === 'completed') {
              circleStyle = 'bg-[#22c55e] text-white border-transparent';
              textStyle = 'text-[#22c55e]';
            } else if (step.status === 'active') {
              circleStyle = 'bg-[#1e3a8a] text-white  shadow-md';
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
              <User size={18} className="text-[#1e3a8a]" />
              Step 3: Driver Details
            </h2>
            <p className="text-sm text-slate-500 mt-1 ml-6">
              Enter DL number — details auto-fetched from SARATHI
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            
            {/* SARATHI Fetch Row */}
            <div className="flex flex-col md:flex-row items-end gap-4">
              <div className="flex-1 w-full flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Driving License Number</label>
                <input 
                  type="text" 
                  placeholder="Enter DL number" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>
              <button className="w-full md:w-auto px-6 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap">
                Fetch from SARATHI
              </button>
            </div>

            {/* Fetch Results Banner */}
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-5">
              <div className="flex items-center gap-2 text-emerald-700 font-medium text-sm mb-4">
                <Check size={16} />
                Data fetched from SARATHI
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Driver Name</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">Ramesh Kumar</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Father's Name</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">Shri Mohan Kumar</p>
                </div>
              </div>
            </div>

            {/* Grid Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Contact Number</label>
                <input 
                  type="text" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Aadhaar Number</label>
                <input 
                  type="text" 
                  placeholder="XXXX XXXX XXXX" 
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                />
              </div>
            </div>

            {/* Warning Banner */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 text-sm text-amber-700 font-medium">
              Schools must ensure police verification of each and every driver
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <input 
                type="checkbox" 
                id="policeVer"
                className="w-4 h-4 text-[#1e3a8a] bg-gray-100 border-gray-300 rounded focus:ring-[#1e3a8a]"
              />
              <label htmlFor="policeVer" className="text-sm font-medium text-slate-700 cursor-pointer">
                Police verification has been completed for this driver
              </label>
            </div>

            {/* Upload Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Driver Photo</label>
                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-50 border border-gray-200 border-dashed hover:border-blue-400 hover:bg-blue-50 rounded-lg text-sm font-semibold text-slate-600 transition-colors">
                  <Upload size={16} className="text-slate-400" />
                  Upload Photo
                </button>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Police Verification Report</label>
                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-50 border border-gray-200 border-dashed hover:border-blue-400 hover:bg-blue-50 rounded-lg text-sm font-semibold text-slate-600 transition-colors">
                  <Upload size={16} className="text-slate-400" />
                  Upload Report
                </button>
              </div>
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
            Step 3 of 6
          </span>

          <button 
            onClick={() => navigate('/bus-management/register-safety')} 
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

export default DriverDetails;