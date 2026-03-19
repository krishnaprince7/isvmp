import React from 'react';
import { 
  Building2, Bus, ShieldCheck, ShieldAlert, 
  ClipboardList, AlertTriangle 
} from 'lucide-react';
import DmDetails from './DmDetails';

const DMOverview = () => {
  return (
    <div className="w-full  mx-auto space-y-6">
      
      <div>
        <h1 className="text-2xl font-bold text-gray-800">District Administration Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          District Magistrate — Lucknow • School Transport Safety Overview
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-tight">Total<br/>Schools</p>
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md"><Building2 className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-3">524</h3>
        </div>

        <div className="bg-[#1e3a8a] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-blue-900 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-blue-200 uppercase tracking-wider leading-tight">Total<br/>Vehicles</p>
            <div className="p-1.5 bg-blue-800 text-blue-200 rounded-md"><Bus className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">1,078</h3>
        </div>

        <div className="bg-[#10b981] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-emerald-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-green-100 uppercase tracking-wider leading-tight">Compliant</p>
            <div className="p-1.5 bg-green-600 text-green-100 rounded-md"><ShieldCheck className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">900</h3>
        </div>

        <div className="bg-[#ef4444] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-red-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-red-100 uppercase tracking-wider leading-tight">Non-<br/>Compliant</p>
            <div className="p-1.5 bg-red-600 text-red-100 rounded-md"><ShieldAlert className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">178</h3>
        </div>

        <div className="bg-[#f59e0b] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-amber-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-yellow-100 uppercase tracking-wider leading-tight">Pending<br/>Inspections</p>
            <div className="p-1.5 bg-yellow-600 text-yellow-100 rounded-md"><ClipboardList className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">81</h3>
        </div>

        <div className="bg-[#ef4444] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white opacity-90 hover:opacity-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-red-100 uppercase tracking-wider leading-tight">Active<br/>Violations</p>
            <div className="p-1.5 bg-red-500 text-red-100 rounded-md"><AlertTriangle className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">67</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-gray-800 mb-4">Thana-wise Overview</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-[11px] text-gray-400 uppercase font-bold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-2">Thana</th>
                  <th className="py-3 px-2">Schools</th>
                  <th className="py-3 px-2">Vehicles</th>
                  <th className="py-3 px-2">Compliant</th>
                  <th className="py-3 px-2">Violations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-700">
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-3 px-2 font-medium">Sadar</td>
                  <td className="py-3 px-2">45</td>
                  <td className="py-3 px-2">120</td>
                  <td className="py-3 px-2 font-medium text-green-600">102</td>
                  <td className="py-3 px-2 font-medium">8</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-3 px-2 font-medium">Hazratganj</td>
                  <td className="py-3 px-2">32</td>
                  <td className="py-3 px-2">85</td>
                  <td className="py-3 px-2 font-medium text-green-600">72</td>
                  <td className="py-3 px-2 font-medium">5</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-3 px-2 font-medium">Gomti Nagar</td>
                  <td className="py-3 px-2">55</td>
                  <td className="py-3 px-2">150</td>
                  <td className="py-3 px-2 font-medium text-green-600">118</td>
                  <td className="py-3 px-2 font-medium text-red-500">14</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-3 px-2 font-medium">Aliganj</td>
                  <td className="py-3 px-2">28</td>
                  <td className="py-3 px-2">68</td>
                  <td className="py-3 px-2 font-medium text-green-600">58</td>
                  <td className="py-3 px-2 font-medium">4</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-3 px-2 font-medium">Chinhat</td>
                  <td className="py-3 px-2">38</td>
                  <td className="py-3 px-2">95</td>
                  <td className="py-3 px-2 font-medium text-green-600">75</td>
                  <td className="py-3 px-2 font-medium text-red-500">12</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer border-b-transparent">
                  <td className="py-3 px-2 font-medium">Cantonment</td>
                  <td className="py-3 px-2">22</td>
                  <td className="py-3 px-2">52</td>
                  <td className="py-3 px-2 font-medium text-green-600">48</td>
                  <td className="py-3 px-2 font-medium">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '35%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '22.5%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '55%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '42.5%' }}></div>
              <div className="w-10 bg-[#1e3a8a] rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer" style={{ height: '62.5%' }}></div>
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
      <DmDetails/>

    </div>
  );
};

export default DMOverview;