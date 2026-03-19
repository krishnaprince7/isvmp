import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, FileText, User, ShieldCheck, Building2, 
  FileSignature, ChevronLeft, ChevronRight, Upload 
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Vehicle Details', icon: Check, status: 'completed' },
  { id: 2, label: 'Documents', icon: FileText, status: 'active' },
  { id: 3, label: 'Driver Details', icon: User, status: 'inactive' },
  { id: 4, label: 'Safety Equipment', icon: ShieldCheck, status: 'inactive' },
  { id: 5, label: 'School Attachment', icon: Building2, status: 'inactive' },
  { id: 6, label: 'Affidavit', icon: FileSignature, status: 'inactive' },
];

const documentsList = [
  { title: 'Permit Document', desc: 'Valid transport permit' },
  { title: 'Fitness Certificate', desc: 'Valid fitness certificate from RTO' },
  { title: 'Insurance Certificate', desc: 'Comprehensive insurance' },
  { title: 'PUC Certificate', desc: 'Pollution Under Control certificate' },
  { title: 'Registration Certificate', desc: 'Vehicle registration document' },
];

const Documents = () => {
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

      {/* Stepper / Progress Bar */}
      <div className="relative mb-12 max-w-5xl mx-auto px-4">
        {/* Connecting Background Line */}
        <div className="absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-gray-200 z-0 hidden md:block">
          {/* Green Progress Fill - covers distance from Step 1 to Step 2 */}
          <div className="absolute top-0 left-0 h-full bg-[#22c55e] w-[20%]"></div>
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
              <FileText size={18} className="text-[#1e3a8a]" />
              Step 2: Documents
            </h2>
            <p className="text-sm text-slate-500 mt-1 ml-6">
              Verify documents fetched from VAHAN
            </p>
          </div>

          {/* Document Upload Rows */}
          <div className="space-y-4">
            {documentsList.map((doc, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-200 transition-colors">
                
                {/* Left Side: Title & Desc */}
                <div className="mb-3 md:mb-0">
                  <h4 className="font-semibold text-slate-800 text-sm mb-0.5">{doc.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{doc.desc}</p>
                </div>
                
                {/* Right Side: Date & Upload Btn */}
                <div className="flex items-center gap-3">
                  <input 
                    type="date" 
                    className="w-[140px] px-3 py-2 border border-gray-200 rounded-md text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all bg-white cursor-pointer"
                  />
                  <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm min-w-[100px]">
                    <Upload size={16} className="text-slate-500" />
                    Upload
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Form Footer / Navigation */}
        <div className="p-6 border-t border-gray-100 bg-slate-50/50 rounded-b-xl flex justify-between items-center">
          
          {/* Working Previous Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          
          <span className="text-xs font-semibold text-slate-500">
            Step 2 of 6
          </span>

          {/* Next Button (Dummy Route for now) */}
          <button 
            onClick={() => navigate('/bus-management/register-driver')} // Apne hisaab se route set kar lena
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

export default Documents;