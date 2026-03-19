import React from 'react';
import { Building2, Users, ChevronLeft, Check, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VehicleCommittee = () => {
  const navigate = useNavigate()
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col mb-5 justify-between max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#1e3a8a] mb-1">School Registration</h1>
        <p className="text-slate-500 text-sm">Register school on the Integrated School Vehicle Monitoring Portal</p>
      </div>

      {/* Stepper Navigation */}
      <div className="relative flex items-start justify-between max-w-4xl mx-auto mb-12 z-0">
        {/* The single continuous background gray line */}
        <div className="absolute top-6 left-[12%] right-[12%] h-[2px] bg-gray-200 -z-20"></div>
        
        {/* The green progress line connecting Step 1 to Step 4 */}
        <div className="absolute top-6 left-[12%] right-[12%] h-[2px] bg-[#22c55e] -z-10"></div>

        {/* Step 1 - Completed */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-sm">
            <Check size={20} strokeWidth={3} />
          </div>
          <span className="text-xs font-medium text-gray-500 text-center">School Profile</span>
        </div>

        {/* Step 2 - Completed */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-sm">
            <Check size={20} strokeWidth={3} />
          </div>
          <span className="text-xs font-medium text-gray-500 text-center">Transport Nodal<br/>Officer</span>
        </div>

        {/* Step 3 - Completed */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-sm">
            <Check size={20} strokeWidth={3} />
          </div>
          <span className="text-xs font-medium text-gray-500 text-center">Affidavit Upload</span>
        </div>

        {/* Step 4 - Active */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-md">
            <Building2 size={20} />
          </div>
          <span className="text-xs font-bold text-[#1e3a8a] text-center">Vehicle<br/>Committee</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-8 mb-8">
        
        {/* Form Header */}
        <div className="flex items-center gap-2 mb-6">
          <Building2 size={20} className="text-[#1e3a8a]" />
          <h2 className="text-lg font-bold text-slate-800">Step 4: Vehicle Committee</h2>
        </div>

        {/* Info Alert Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
          <p className="text-sm font-medium text-blue-600">
            Schools must upload details of School Transport Vehicle Committee meetings, conducted once every three months.
          </p>
        </div>

        {/* Locked 2-Column Grid for Inputs */}
        <form className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
          
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Committee Chairman</label>
            <input 
              type="text" 
              placeholder="Name of chairman" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Total Members</label>
            <input 
              type="text" 
              placeholder="e.g., 5" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Last Meeting Date</label>
            <input 
              type="date" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Next Meeting Due</label>
            <input 
              type="date" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all cursor-pointer"
            />
          </div>

        </form>

        {/* Upload Dropzone */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-sm font-semibold text-slate-700">Upload Meeting Minutes</label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center bg-white hover:bg-gray-50 hover:border-blue-300 transition-colors cursor-pointer mt-1">
            <Upload className="text-slate-600 mb-3" size={24} />
            <h3 className="text-[15px] font-semibold text-slate-800 mb-1">Upload Minutes of Meeting</h3>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">PDF format • Max 10MB</p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8">
        <button
        onClick={()=>{
          navigate(-1)
        }}
         className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-black transition-colors">
          <ChevronLeft size={16} />
          Previous
        </button>
        
        <span className="text-sm text-gray-500 font-medium">Step 4 of 4</span>
        
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#22c55e] hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
          <Check size={18} strokeWidth={2.5} />
          Submit Registration
        </button>
      </div>

    </div>
  );
};

export default VehicleCommittee;