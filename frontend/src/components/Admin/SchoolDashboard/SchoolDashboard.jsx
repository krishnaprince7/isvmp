import React, { useState } from 'react';
import { 
  Bus, FileText, ShieldCheck, Calendar, ClipboardCheck, 
  User, CheckSquare, Users, History, ChevronRight, Plus, Check, X
} from 'lucide-react';
import VehicleList from './Submodules/VehicleList';
import DriverRecords from './Submodules/DriverRecords';
import ComplianceChecklist from './Submodules/ComplianceChecklist';
import VehicleCommittee from './Submodules/VehicleCommittee';
import InspectionHistory from './Submodules/InspectionHistory';

const SchoolDashboard = () => {
  const [activeTab, setActiveTab] = useState('vehicles');

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800">Delhi Public School, Lucknow</h1>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div> 87% Compliant
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          UDISE: 09101234567 • Nodal Officer: Mr. A.K. Gupta • Block: Sadar
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-[#254b8c] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider">Owned<br/>Vehicles</p>
            <div className="p-1.5 bg-white/10 rounded-lg"><Bus className="w-4 h-4 text-blue-100" /></div>
          </div>
          <h3 className="text-3xl font-bold mt-2">2</h3>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Affiliated</p>
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-4 h-4" /></div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">2</h3>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total<br/>Vehicles</p>
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg"><Bus className="w-4 h-4" /></div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">4</h3>
        </div>

        <div className="bg-[#10b981] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-bold text-green-100 uppercase tracking-wider">Compliance</p>
            <div className="p-1.5 bg-white/10 rounded-lg"><ShieldCheck className="w-4 h-4 text-green-100" /></div>
          </div>
          <h3 className="text-3xl font-bold mt-2">87%</h3>
        </div>

        <div className="bg-[#f59e0b] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-bold text-yellow-100 uppercase tracking-wider">Next<br/>Inspection</p>
            <div className="p-1.5 bg-white/10 rounded-lg"><Calendar className="w-4 h-4 text-yellow-100" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-2">Mar 25</h3>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Committee<br/>Due</p>
            <div className="p-1.5 bg-gray-50 text-gray-600 rounded-lg"><ClipboardCheck className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">Apr 15</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
        
        <div className="border-b border-gray-200 bg-gray-50/50 p-2 overflow-x-auto custom-scrollbar">
          <div className="flex gap-2 min-w-max">
            <button 
              onClick={() => setActiveTab('vehicles')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'vehicles' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Bus className="w-4 h-4" /> Vehicle List
            </button>
            <button 
              onClick={() => setActiveTab('drivers')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'drivers' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User className="w-4 h-4" /> Driver Records
            </button>
            <button 
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'checklist' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <CheckSquare className="w-4 h-4" /> Compliance Checklist
            </button>
            <button 
              onClick={() => setActiveTab('committee')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'committee' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Users className="w-4 h-4" /> Vehicle Committee
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'history' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <History className="w-4 h-4" /> Inspection History
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'vehicles' && (
             <VehicleList/>
          )}

          {activeTab === 'drivers' && (
             <DriverRecords/>
              )}

          {activeTab === 'checklist' && (
             <ComplianceChecklist/>
          )}

          {activeTab === 'committee' && (
             <VehicleCommittee/>
          )}

          {activeTab === 'history' && (
             <InspectionHistory/>
          )}

        </div>
      </div>

    </div>
  );
};

export default SchoolDashboard;