import React from 'react';
import { Building2, User, FileText, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SchoolProfile = () => {
    const navigate = useNavigate()
  return (
    <div className="  min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col mb-5 justify-between max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#1e3a8a] mb-1">School Registration</h1>
        <p className="text-slate-500 text-sm">Register school on the Integrated School Vehicle Monitoring Portal</p>
      </div>

      {/* Stepper Navigation */}
      <div className="flex items-center justify-between max-w-4xl mx-auto mb-12">
        {/* Step 1 - Active */}
        <div className="flex flex-col items-center gap-2 ">
          <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-sm">
            <Building2 size={20} />
          </div>
          <span className="text-xs font-semibold text-[#1e3a8a] text-center">School Profile</span>
        </div>

        <div className="flex-1 border-t border-gray-200 -mt-6"></div>

        {/* Step 2 - Inactive */}
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center">
            <User size={20} />
          </div>
          <span className="text-xs font-medium text-gray-400 text-center">Transport Nodal<br/>Officer</span>
        </div>

        <div className="flex-1 border-t border-gray-200 -mt-6"></div>

        {/* Step 3 - Inactive */}
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center">
            <FileText size={20} />
          </div>
          <span className="text-xs font-medium text-gray-400 text-center">Affidavit Upload</span>
        </div>

        <div className="flex-1 border-t border-gray-200 -mt-6"></div>

        {/* Step 4 - Inactive */}
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center">
            <Users size={20} />
          </div>
          <span className="text-xs font-medium text-gray-400 text-center">Vehicle<br/>Committee</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-center gap-2 mb-8">
          <Building2 size={20} className="text-[#1e3a8a]" />
          <h2 className="text-lg font-bold text-slate-800">Step 1: School Profile</h2>
        </div>

        <form className="grid grid-cols-2 gap-x-8 gap-y-6">
          {/* School Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">School Name</label>
            <input 
              type="text" 
              placeholder="Enter school name" 
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
          </div>

          {/* UDISE Code */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">UDISE Code</label>
            <input 
              type="text" 
              placeholder="e.g., 09101234567" 
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
            <span className="text-[10px] text-gray-400">Unified District Information System for Education</span>
          </div>

          {/* District */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">District</label>
            <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors cursor-pointer">
              <option value="" disabled selected>Select district</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Block */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">Block</label>
            <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors cursor-pointer">
              <option value="" disabled selected>Select block</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Thana */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">Thana</label>
            <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors cursor-pointer">
              <option value="" disabled selected>Select thana</option>
              {/* Add options here */}
            </select>
          </div>

          {/* School Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">School Type</label>
            <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors cursor-pointer">
              <option value="" disabled selected>Select type</option>
              {/* Add options here */}
            </select>
          </div>

          {/* School Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">School Address</label>
            <textarea 
              placeholder="Complete address" 
              rows="3"
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none"
            ></textarea>
          </div>

          {/* Total Students */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">Total Students</label>
            <input 
              type="text" 
              placeholder="e.g., 2500" 
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
          </div>
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8">
        <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
          <ChevronLeft size={16} />
          Previous
        </button>
        
        <span className="text-sm text-gray-500 font-medium">Step 1 of 4</span>
        
        <button
        onClick={()=>{
            navigate("/school-management/register-transport")
        }}
         className="flex items-center gap-1.5 px-6 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          Next
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default SchoolProfile;