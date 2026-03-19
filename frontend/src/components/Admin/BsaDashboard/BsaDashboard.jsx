import React from 'react';
import { Building2, ShieldAlert, Shield, Search, ChevronDown } from 'lucide-react';

const BsaDashboard = () => {
  return (
    <div className="w-full  mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">BSA Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Education Department — School Compliance Monitoring
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#2f4c8c] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider">Schools with Buses</p>
            <div className="p-2 bg-white/10 rounded-lg"><Building2 className="w-5 h-5 text-blue-100" /></div>
          </div>
          <h3 className="text-4xl font-bold mt-2">524</h3>
        </div>

        <div className="bg-[#f59e0b] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-yellow-100 uppercase tracking-wider">Without Registered Buses</p>
            <div className="p-2 bg-white/10 rounded-lg"><Shield className="w-5 h-5 text-yellow-100" /></div>
          </div>
          <div>
            <h3 className="text-4xl font-bold mt-2">187</h3>
            <p className="text-[11px] text-yellow-100 mt-1 opacity-90">Schools operating unregistered transport</p>
          </div>
        </div>

        <div className="bg-[#ef4444] p-5 rounded-xl shadow-sm flex flex-col justify-between text-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-red-100 uppercase tracking-wider">Non-Compliant Schools</p>
            <div className="p-2 bg-white/10 rounded-lg"><ShieldAlert className="w-5 h-5 text-red-100" /></div>
          </div>
          <h3 className="text-4xl font-bold mt-2">89</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-gray-800 mb-6">Block-wise School Compliance</h3>
        
        <div className="relative h-64 w-full pt-4">
          <div className="absolute left-0 top-0 h-[calc(100%-24px)] flex flex-col justify-between text-[10px] text-gray-400">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          <div className="ml-8 h-[calc(100%-24px)] relative flex items-end justify-around pb-0 border-b border-gray-200 z-10">
            <div className="absolute inset-0 flex flex-col justify-between -z-10">
              <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
              <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
              <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
              <div className="w-full border-b border-gray-100 border-dashed h-0"></div>
              <div className="w-full h-0"></div>
            </div>

            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '88%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '74%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '69%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '82%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '77%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '85%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '71%' }}></div>
            <div className="w-16 bg-[#0f172a] rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" style={{ height: '90%' }}></div>
          </div>

          <div className="absolute bottom-0 left-8 right-0 flex justify-around text-[10px] text-gray-400">
            <span className="w-16 text-center truncate">Sadar</span>
            <span className="w-16 text-center truncate">Mohanlalganj</span>
            <span className="w-16 text-center truncate">Malihabad</span>
            <span className="w-16 text-center truncate">BKT</span>
            <span className="w-16 text-center truncate">Chinhat</span>
            <span className="w-16 text-center truncate">Kakori</span>
            <span className="w-16 text-center truncate">Mall</span>
            <span className="w-16 text-center truncate">Nagar</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800">School Safety Ranking</h3>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search schools..." 
                className="pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 w-full sm:w-48"
              />
            </div>
            <div className="relative hidden sm:block">
              <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                <option>All Blocks</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">School Name</th>
                <th className="px-6 py-4">Block</th>
                <th className="px-6 py-4">Total Buses</th>
                <th className="px-6 py-4">Compliance Score</th>
                <th className="px-6 py-4 text-center">Violations</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#1</td>
                <td className="px-6 py-4 font-medium text-gray-800">Delhi Public School</td>
                <td className="px-6 py-4 text-gray-600">Sadar</td>
                <td className="px-6 py-4 font-medium">12</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{width: '96%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">96%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Compliant
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#2</td>
                <td className="px-6 py-4 font-medium text-gray-800">Modern Academy</td>
                <td className="px-6 py-4 text-gray-600">Chinhat</td>
                <td className="px-6 py-4 font-medium">7</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{width: '94%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">94%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Compliant
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#3</td>
                <td className="px-6 py-4 font-medium text-gray-800">Kendriya Vidyalaya</td>
                <td className="px-6 py-4 text-gray-600">BKT</td>
                <td className="px-6 py-4 font-medium">4</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{width: '91%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">91%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">1</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Compliant
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#4</td>
                <td className="px-6 py-4 font-medium text-gray-800">GD Goenka Public School</td>
                <td className="px-6 py-4 text-gray-600">Sadar</td>
                <td className="px-6 py-4 font-medium">10</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{width: '82%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">82%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-amber-600">3</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#5</td>
                <td className="px-6 py-4 font-medium text-gray-800">City Montessori School</td>
                <td className="px-6 py-4 text-gray-600">Mohanlalganj</td>
                <td className="px-6 py-4 font-medium">28</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{width: '67%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">67%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-amber-600">8</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#6</td>
                <td className="px-6 py-4 font-medium text-gray-800">Ryan International</td>
                <td className="px-6 py-4 text-gray-600">Kakori</td>
                <td className="px-6 py-4 font-medium">15</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{width: '55%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">55%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-red-500">12</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">#7</td>
                <td className="px-6 py-4 font-medium text-gray-800">St. Francis College</td>
                <td className="px-6 py-4 text-gray-600">Malihabad</td>
                <td className="px-6 py-4 font-medium">6</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{width: '48%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">48%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-red-500">9</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
                <td className="px-6 py-4 font-bold text-gray-800">#8</td>
                <td className="px-6 py-4 font-medium text-gray-800">Public Inter College</td>
                <td className="px-6 py-4 text-gray-600">Mall</td>
                <td className="px-6 py-4 font-medium">3</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{width: '42%'}}></div>
                    </div>
                    <span className="font-medium text-gray-800">42%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-red-500">5</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default BsaDashboard;