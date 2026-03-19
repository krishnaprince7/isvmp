import React, { useState } from 'react';
import { 
  User, CheckCircle, Shield, AlertTriangle, Search, FileText, Map
} from 'lucide-react';
import DriverVerification from './Submodules/DriverVerification';
import Challans from './Submodules/Challans';
import ThanaSummary from './Submodules/ThanaSummary';

const PoliceDashboard = () => {
  const [activeTab, setActiveTab] = useState('verification');

  return (
    <div className="w-full  mx-auto space-y-6">
      
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Police Department Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Driver Verification & Enforcement — Lucknow District
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#254b8c] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider">Total Drivers</p>
            <div className="p-2 bg-white/10 rounded-lg"><User className="w-5 h-5 text-blue-100" /></div>
          </div>
          <h3 className="text-4xl font-bold mt-2">6</h3>
        </div>

        <div className="bg-[#10b981] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-green-100 uppercase tracking-wider">Verified</p>
            <div className="p-2 bg-white/10 rounded-lg"><CheckCircle className="w-5 h-5 text-green-100" /></div>
          </div>
          <h3 className="text-4xl font-bold mt-2">3</h3>
        </div>

        <div className="bg-[#f59e0b] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-yellow-100 uppercase tracking-wider">Pending Verification</p>
            <div className="p-2 bg-white/10 rounded-lg"><Shield className="w-5 h-5 text-yellow-100" /></div>
          </div>
          <h3 className="text-4xl font-bold mt-2">3</h3>
        </div>

        <div className="bg-[#ef4444] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-red-100 uppercase tracking-wider">Challans Issued</p>
            <div className="p-2 bg-white/10 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-100" /></div>
          </div>
          <h3 className="text-4xl font-bold mt-2">4</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
        
        <div className="border-b border-gray-200 bg-gray-50/50 p-2 overflow-x-auto custom-scrollbar">
          <div className="flex gap-2 min-w-max">
            <button 
              onClick={() => setActiveTab('verification')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'verification' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Driver Verification
            </button>
            <button 
              onClick={() => setActiveTab('challans')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'challans' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Challans
            </button>
            <button 
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'summary' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Thana-wise Summary
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'verification' && (
            <div className="animate-in ml-5 mt-2 fade-in slide-in-from-bottom-2 duration-300">
              <DriverVerification/>
            </div>
          )}

          {activeTab === 'challans' && (
             <div className="animate-in ml-5 mt-2 fade-in slide-in-from-bottom-2 duration-300">
              <Challans/>
            </div>
          )}

          {activeTab === 'summary' && (
             <div className="animate-in ml-5 mt-2 fade-in slide-in-from-bottom-2 duration-300">
              <ThanaSummary/>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default PoliceDashboard;