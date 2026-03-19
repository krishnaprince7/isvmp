import React from 'react';
import { User, FileText, Users, ChevronLeft, ChevronRight, Check, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransportNodal = () => {
    const navigate = useNavigate()
  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="relative flex flex-col items-start justify-between max-w-4xl mx-auto mb-12">
        <h1 className="text-2xl font-bold text-[#1e3a8a] mb-1">School Registration</h1>
        <p className="text-slate-500 text-sm">Register school on the Integrated School Vehicle Monitoring Portal</p>
      </div>

      {/* Stepper Navigation */}
      <div className="relative flex items-start justify-between max-w-4xl mx-auto mb-12 z-0">
        {/* The single continuous background gray line */}
        <div className="absolute top-6 left-[12%] right-[12%] h-[2px] bg-gray-200 -z-20"></div>
        
        {/* The green progress line connecting Step 1 to Step 2 */}
        <div className="absolute top-6 left-[12%] right-[62%] h-[2px] bg-[#22c55e] -z-10"></div>

        {/* Step 1 - Completed */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-sm">
            <Check size={20} strokeWidth={3} />
          </div>
          <span className="text-xs font-medium text-gray-500 text-center">School Profile</span>
        </div>

        {/* Step 2 - Active */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-md">
            <User size={20} />
          </div>
          <span className="text-xs font-bold text-[#1e3a8a] text-center">Transport Nodal<br/>Officer</span>
        </div>

        {/* Step 3 - Inactive */}
        <div className="flex flex-col items-center gap-2 w-32 bg-slate-50">
          <div className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center">
            <FileText size={20} />
          </div>
          <span className="text-xs font-medium text-gray-400 text-center">Affidavit Upload</span>
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
          <User size={20} className="text-[#1e3a8a]" />
          <h2 className="text-lg font-bold text-slate-800">Step 2: Transport Nodal Officer</h2>
        </div>

        {/* Info Alert Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
          <p className="text-sm font-medium text-blue-600">
            Each school must designate a Transport Nodal Officer responsible for vehicle compliance and portal management.
          </p>
        </div>

        {/* Locked 2-Column Grid */}
        <form className="grid grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Row 1 */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Nodal Officer Name</label>
            <input 
              type="text" 
              placeholder="Enter full name" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Designation</label>
            <input 
              type="text" 
              placeholder="e.g., Vice Principal" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Mobile Number</label>
            <input 
              type="text" 
              placeholder="+91 XXXXX XXXXX" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Email Address</label>
            <input 
              type="email" 
              placeholder="nodal@school.edu.in" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">Aadhaar Number</label>
            <input 
              type="text" 
              placeholder="XXXX XXXX XXXX" 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-slate-700">ID Proof Upload</label>
            <button 
              type="button" 
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-pointer"
            >
              <Upload size={16} />
              Upload ID Proof
            </button>
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
        
        <span className="text-sm text-gray-500 font-medium">Step 2 of 4</span>
        
        <button
        onClick={()=>{
            navigate("/school-management/register-affidavit-upload")
        }}
         className="flex items-center gap-1.5 px-6 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          Next
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default TransportNodal;