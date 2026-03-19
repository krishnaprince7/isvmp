import React from 'react';
import { FileText, Users, ChevronLeft, ChevronRight, Check, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AffidavitUpload = () => {
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
        
        {/* The green progress line connecting Step 1 to Step 3 */}
        <div className="absolute top-6 left-[12%] right-[38%] h-[2px] bg-[#22c55e] -z-10"></div>

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

        {/* Step 3 - Active */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-md">
            <FileText size={20} />
          </div>
          <span className="text-xs font-bold text-[#1e3a8a] text-center">Affidavit Upload</span>
        </div>

        {/* Step 4 - Inactive */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center">
            <Users size={20} />
          </div>
          <span className="text-xs font-medium text-gray-400 text-center">Vehicle<br/>Committee</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-8 mb-8">
        
        {/* Form Header */}
        <div className="flex items-center gap-2 mb-6">
          <FileText size={20} className="text-[#1e3a8a]" />
          <h2 className="text-lg font-bold text-slate-800">Step 3: Affidavit Upload</h2>
        </div>

        {/* Info Alert Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-sm font-medium text-amber-600">
            Schools must upload an affidavit in the prescribed format provided by the Transport Department confirming compliance with all safety norms.
          </p>
        </div>

        {/* Upload Dropzone */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center bg-white mb-8 hover:bg-gray-50 hover:border-blue-300 transition-colors cursor-pointer">
          <Upload className="text-slate-600 mb-3" size={28} />
          <h3 className="text-[15px] font-semibold text-slate-800 mb-1">Upload Affidavit</h3>
          <p className="text-sm text-slate-500 mb-2">Prescribed format as per Transport Department notification</p>
          <p className="text-[11px] font-medium text-slate-400 mb-6 uppercase tracking-wider">PDF, JPG, PNG • Max 10MB</p>
          <button 
            type="button" 
            className="flex items-center gap-2 px-5 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-100 transition-all shadow-sm"
          >
            <Upload size={16} />
            Choose File
          </button>
        </div>

        {/* Inputs section */}
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-1.5 w-full max-w-xs">
            <label className="text-sm font-semibold text-slate-700">Affidavit Date</label>
            <input 
              type="date" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Notary Details</label>
            <input 
              type="text" 
              placeholder="Enter notary name and registration number" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

        </form>
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
        
        <span className="text-sm text-gray-500 font-medium">Step 3 of 4</span>
        
        <button
        onClick={()=>{
            navigate("/school-management/register-vehicles-committee")
        }}
         className="flex items-center gap-1.5 px-6 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          Next
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default AffidavitUpload;