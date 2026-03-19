import React from 'react';
import { 
  Building2, School, Bus, ShieldCheck, ShieldAlert, 
  ClipboardList, AlertTriangle, CheckCircle2, TrendingUp 
} from 'lucide-react';
import DashboardDetails from './DashboardDetails';

const DashboardOverview = () => {
  return (
    <div className="w-full  mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">State Level Monitoring Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Transport Commissioner Office, Uttar Pradesh — Integrated School Vehicle Monitoring Portal
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-blue-50/50 border border-blue-100 p-3 rounded-lg hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-2.5 py-1 rounded text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          VAHAN Connected
        </div>
        <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-2.5 py-1 rounded text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          SARATHI Connected
        </div>
        <span className="text-xs text-gray-500 ml-2">
          Vehicle & driver data auto-verified from central databases
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-tight">Total<br/>Schools</p>
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md"><Building2 className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-3">24,856</h3>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-tight">Schools w/<br/>Vehicles</p>
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md"><School className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-3">18,432</h3>
        </div>

        <div className="bg-[#1e3a8a] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-blue-900 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-blue-200 uppercase tracking-wider leading-tight">Registered<br/>Vehicles</p>
            <div className="p-1.5 bg-blue-800 text-blue-200 rounded-md"><Bus className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">42,891</h3>
        </div>

        <div className="bg-[#10b981] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-emerald-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-green-100 uppercase tracking-wider leading-tight">Compliant</p>
            <div className="p-1.5 bg-green-600 text-green-100 rounded-md"><ShieldCheck className="w-4 h-4" /></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mt-3">34,712</h3>
            <p className="text-[10px] text-green-100 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 4.2% vs last month
            </p>
          </div>
        </div>

        <div className="bg-[#ef4444] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-red-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-red-100 uppercase tracking-wider leading-tight">Non-<br/>Compliant</p>
            <div className="p-1.5 bg-red-600 text-red-100 rounded-md"><ShieldAlert className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">8,179</h3>
        </div>

        <div className="bg-[#f59e0b] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:bg-amber-600 hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-yellow-100 uppercase tracking-wider leading-tight">Pending<br/>Inspections</p>
            <div className="p-1.5 bg-yellow-600 text-yellow-100 rounded-md"><ClipboardList className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">3,241</h3>
        </div>

        <div className="bg-[#ef4444] p-4 rounded-xl shadow-sm flex flex-col justify-between text-white opacity-90 hover:opacity-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-red-100 uppercase tracking-wider leading-tight">Active<br/>Violations</p>
            <div className="p-1.5 bg-red-500 text-red-100 rounded-md"><AlertTriangle className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold mt-3">1,847</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm lg:col-span-2 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Compliance Trend (State Level)</h3>
          <div className="relative h-64 w-full">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pb-6">
              <span>100</span>
              <span>80</span>
              <span>65</span>
              <span>50</span>
            </div>
            
            <div className="ml-8 h-[calc(100%-1.5rem)] w-[calc(100%-2rem)] relative">
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
                <div className="w-full border-b border-gray-200 h-0"></div>
              </div>
              
              <div className="absolute inset-0">
                <svg className="w-full h-full overflow-visible hover:opacity-80 transition-opacity cursor-pointer" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline 
                    points="0,80 14.3,75 28.6,65 42.9,55 57.1,58 71.4,45 85.7,38 100,30" 
                    fill="none" 
                    stroke="#1e3a8a" 
                    strokeWidth="2" 
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '0%', top: '80%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '14.3%', top: '75%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '28.6%', top: '65%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '42.9%', top: '55%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '57.1%', top: '58%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '71.4%', top: '45%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '85.7%', top: '38%' }}></div>
                <div className="absolute w-3 h-3 bg-[#1e3a8a] rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer" style={{ left: '100%', top: '30%' }}></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-400">
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Violation Distribution</h3>
          
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-40 h-40 rounded-full mb-8 hover:scale-105 transition-transform cursor-pointer" style={{
              background: 'conic-gradient(#ef4444 0% 35%, #f59e0b 35% 60%, #3b82f6 60% 80%, #8b5cf6 80% 95%, #10b981 95% 100%)'
            }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full"></div>
            </div>

            <div className="w-full space-y-2.5">
              <div className="flex justify-between items-center text-sm p-1.5 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  No Fire Extinguisher
                </div>
                <span className="font-semibold text-gray-800">245</span>
              </div>
              <div className="flex justify-between items-center text-sm p-1.5 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  GPS Not Working
                </div>
                <span className="font-semibold text-gray-800">189</span>
              </div>
              <div className="flex justify-between items-center text-sm p-1.5 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  Speed Governor Missing
                </div>
                <span className="font-semibold text-gray-800">156</span>
              </div>
              <div className="flex justify-between items-center text-sm p-1.5 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                  Expired Fitness
                </div>
                <span className="font-semibold text-gray-800">134</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <DashboardDetails/>
    </div>
  );
};

export default DashboardOverview;