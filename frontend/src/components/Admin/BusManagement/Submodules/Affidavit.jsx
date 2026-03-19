import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, FileText, User, ShieldCheck, Building2, 
  FileSignature, ChevronLeft, Upload 
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Vehicle Details', icon: Check, status: 'completed' },
  { id: 2, label: 'Documents', icon: Check, status: 'completed' },
  { id: 3, label: 'Driver Details', icon: Check, status: 'completed' },
  { id: 4, label: 'Safety Equipment', icon: Check, status: 'completed' },
  { id: 5, label: 'School Attachment', icon: Check, status: 'completed' },
  { id: 6, label: 'Affidavit', icon: FileSignature, status: 'active' },
];

const Affidavit = () => {
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
          {/* Green Progress Fill - covers distance from Step 1 to Step 6 */}
          <div className="absolute top-0 left-0 h-full bg-[#22c55e] w-full transition-all duration-500"></div>
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
                    <Icon size={16} strokeWidth={step.status === 'completed' ? 3 : 2} />
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
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-4xl mx-auto flex flex-col min-h-[450px]">
        
        <div className="p-6 md:p-8 flex-1">
          {/* Step Header */}
          <div className="mb-8">
            <h2 className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
              <FileSignature size={18} className="text-[#1e3a8a]" />
              Step 6: Affidavit
            </h2>
            <p className="text-sm text-slate-500 mt-1 ml-6">
              Upload affidavit in prescribed format
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Warning Banner */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4 text-sm text-amber-700 font-medium">
              Schools must upload an affidavit in the prescribed format provided by the Transport Department.
            </div>

            {/* Drag and Drop / File Upload Box */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-slate-50/50 hover:border-blue-300 transition-colors cursor-pointer">
              
              <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mb-4">
                <Upload size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-sm font-bold text-slate-800 mb-1">Upload Affidavit</h3>
              <p className="text-[13px] text-slate-600 font-medium mb-1">Prescribed format as per Transport Department</p>
              <p className="text-[11px] text-slate-400 font-medium mb-6">PDF, JPG, PNG • Max 10MB</p>

              <button className="flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 text-sm font-semibold rounded-lg shadow-sm transition-colors">
                <Upload size={16} className="text-slate-500" />
                Choose File
              </button>
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
            Step 6 of 6
          </span>

          <button 
            onClick={() => {
              // Yahan aap final submit logic handle kar sakte hain
              alert("Registration Submitted Successfully!");
              navigate('/bus-management');
            }} 
            className="flex items-center gap-2 px-6 py-2.5 bg-[#22c55e] hover:bg-green-600 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
          >
            <Check size={18} strokeWidth={3} />
            Submit Registration
          </button>
        </div>

      </div>

    </div>
  );
};

export default Affidavit;