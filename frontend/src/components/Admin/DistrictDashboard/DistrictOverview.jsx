import React, { useState } from 'react';
import { 
  Building2, Bus, ShieldCheck, ShieldAlert, 
  ClipboardList, ChevronRight, ChevronDown,
  CalendarPlus, FileWarning, BarChart3, AlertTriangle
} from 'lucide-react';
import BusesPendingCompliance from './Submodules/BusesPendingCompliance';
import BusesViolations from './Submodules/BusesViolations';
import UpcomingInspections from './Submodules/UpcomingInspections';

const DistrictOverview = () => {
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <div className="w-full  mx-auto space-y-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">District Transport Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            RTO / ARTO View — District Level Monitoring
          </p>
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium cursor-pointer shadow-sm">
            <option>Lucknow</option>
            <option>Kanpur</option>
            <option>Agra</option>
            <option>Varanasi</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total<br/>Schools</p>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Building2 className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-4">524</h3>
        </div>

        <div className="bg-[#1e3a8a] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-blue-900 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider">Total<br/>Buses</p>
            <div className="p-2 bg-blue-800 text-blue-200 rounded-lg"><Bus className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-bold mt-4">1,078</h3>
        </div>

        <div className="bg-[#10b981] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-emerald-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-green-100 uppercase tracking-wider">Compliant</p>
            <div className="p-2 bg-green-600 text-green-100 rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-bold mt-4">900</h3>
        </div>

        <div className="bg-[#ef4444] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-red-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-red-100 uppercase tracking-wider">Non-<br/>Compliant</p>
            <div className="p-2 bg-red-600 text-red-100 rounded-lg"><ShieldAlert className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-bold mt-4">178</h3>
        </div>

        <div className="bg-[#f59e0b] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-amber-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-yellow-100 uppercase tracking-wider">Pending<br/>Inspections</p>
            <div className="p-2 bg-yellow-600 text-yellow-100 rounded-lg"><ClipboardList className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-bold mt-4">81</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Tehsil / Block Drilldown</h3>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Lucknow District</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-[11px] text-gray-500 uppercase font-bold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-2">Tehsil</th>
                  <th className="py-3 px-2">Schools</th>
                  <th className="py-3 px-2">Buses</th>
                  <th className="py-3 px-2">Compliant</th>
                  <th className="py-3 px-2">Violations</th>
                  <th className="py-3 px-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-700">
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-3 px-2 font-medium">Sadar</td>
                  <td className="py-3 px-2">145</td>
                  <td className="py-3 px-2">320</td>
                  <td className="py-3 px-2 font-medium text-green-600">280</td>
                  <td className="py-3 px-2 font-medium text-red-500">18</td>
                  <td className="py-3 px-2 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-3 px-2 font-medium">Mohanlalganj</td>
                  <td className="py-3 px-2">89</td>
                  <td className="py-3 px-2">180</td>
                  <td className="py-3 px-2 font-medium text-green-600">145</td>
                  <td className="py-3 px-2 font-medium text-gray-500">12</td>
                  <td className="py-3 px-2 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-3 px-2 font-medium">Malihabad</td>
                  <td className="py-3 px-2">72</td>
                  <td className="py-3 px-2">140</td>
                  <td className="py-3 px-2 font-medium text-green-600">110</td>
                  <td className="py-3 px-2 font-medium text-gray-500">15</td>
                  <td className="py-3 px-2 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-3 px-2 font-medium">Bakshi Ka Talab</td>
                  <td className="py-3 px-2">68</td>
                  <td className="py-3 px-2">130</td>
                  <td className="py-3 px-2 font-medium text-green-600">108</td>
                  <td className="py-3 px-2 font-medium text-gray-500">8</td>
                  <td className="py-3 px-2 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-3 px-2 font-medium">Chinhat</td>
                  <td className="py-3 px-2">95</td>
                  <td className="py-3 px-2">210</td>
                  <td className="py-3 px-2 font-medium text-green-600">175</td>
                  <td className="py-3 px-2 font-medium text-red-500">22</td>
                  <td className="py-3 px-2 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer group border-b-transparent">
                  <td className="py-3 px-2 font-medium">Kakori</td>
                  <td className="py-3 px-2">55</td>
                  <td className="py-3 px-2">98</td>
                  <td className="py-3 px-2 font-medium text-green-600">82</td>
                  <td className="py-3 px-2 font-medium text-gray-500">6</td>
                  <td className="py-3 px-2 text-right text-gray-300 group-hover:text-blue-500"><ChevronRight className="w-4 h-4 ml-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6">Block-wise Compliance</h3>
          
          <div className="relative h-64 w-full pt-4">
            <div className="absolute left-0 top-0 h-[calc(100%-24px)] flex flex-col justify-between text-[10px] text-gray-400">
              <span>100</span>
              <span>90</span>
              <span>80</span>
              <span>70</span>
              <span>60</span>
            </div>

            <div className="ml-8 h-[calc(100%-24px)] relative flex items-end justify-around pb-0 border-b border-gray-200 z-10">
              <div className="absolute inset-0 flex flex-col justify-between -z-10">
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full h-0"></div>
              </div>

              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '70%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '52.5%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '47.5%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '57.5%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '57.5%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '60%' }}></div>
            </div>

            <div className="absolute bottom-0 left-8 right-0 flex justify-around text-[10px] text-gray-400">
              <span className="w-10 text-center truncate">Sadar</span>
              <span className="w-10 text-center truncate">Mohanlalganj</span>
              <span className="w-10 text-center truncate">Malihabad</span>
              <span className="w-10 text-center truncate">BKT</span>
              <span className="w-10 text-center truncate">Chinhat</span>
              <span className="w-10 text-center truncate">Kakori</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50/50 p-2 overflow-x-auto custom-scrollbar">
          <div className="flex gap-2 min-w-max">
            <button 
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'pending' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Buses Pending Compliance
            </button>
            <button 
              onClick={() => setActiveTab('violations')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'violations' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Buses with Violations
            </button>
            <button 
              onClick={() => setActiveTab('inspections')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'inspections' 
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Upcoming Inspections
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'pending' && (
            <BusesPendingCompliance/>
          )}
          
          {activeTab === 'violations' && (
            <BusesViolations/>
          )}

          {activeTab === 'inspections' && (
            <UpcomingInspections/>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all cursor-pointer group">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <CalendarPlus className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-700">Schedule Inspection</h4>
            <p className="text-xs text-gray-500 mt-1">Create new inspection schedule</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all cursor-pointer group">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileWarning className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-700">Issue Notice</h4>
            <p className="text-xs text-gray-500 mt-1">Send compliance notice to school</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all cursor-pointer group">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-700">View Reports</h4>
            <p className="text-xs text-gray-500 mt-1">District compliance reports</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center hover:bg-red-50/50 hover:border-red-200 transition-all cursor-pointer group">
            <div className="p-2 bg-red-100 text-red-600 rounded-lg mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-red-700">Manage Violations</h4>
            <p className="text-xs text-gray-500 mt-1">Track and resolve violations</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DistrictOverview;