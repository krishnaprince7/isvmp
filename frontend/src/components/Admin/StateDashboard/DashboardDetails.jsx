import React from 'react';
import { ChevronRight, AlertTriangle, FileText } from 'lucide-react';

const DashboardDetails = () => {
  return (
    <div className="w-full  mx-auto space-y-6 mt-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">District Performance Ranking</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-gray-400 uppercase font-semibold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-2">District</th>
                  <th className="py-3 px-2">Vehicles</th>
                  <th className="py-3 px-2">Compliance</th>
                  <th className="py-3 px-2 text-right">Violations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-700">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Lucknow</td>
                  <td className="py-3 px-2">1,240</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{width: '89%'}}></div>
                      </div>
                      <span className="font-medium">89%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">23</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Kanpur</td>
                  <td className="py-3 px-2">980</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full" style={{width: '76%'}}></div>
                      </div>
                      <span className="font-medium">76%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right text-red-500 font-medium">45</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Agra</td>
                  <td className="py-3 px-2">860</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{width: '82%'}}></div>
                      </div>
                      <span className="font-medium">82%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">31</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Varanasi</td>
                  <td className="py-3 px-2">720</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full" style={{width: '71%'}}></div>
                      </div>
                      <span className="font-medium">71%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right text-red-500 font-medium">52</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Prayagraj</td>
                  <td className="py-3 px-2">650</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="font-medium">85%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">19</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Meerut</td>
                  <td className="py-3 px-2">540</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full" style={{width: '68%'}}></div>
                      </div>
                      <span className="font-medium">68%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right text-red-500 font-medium">67</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Gorakhpur</td>
                  <td className="py-3 px-2">480</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full" style={{width: '74%'}}></div>
                      </div>
                      <span className="font-medium">74%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">38</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-medium">Bareilly</td>
                  <td className="py-3 px-2">420</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full" style={{width: '79%'}}></div>
                      </div>
                      <span className="font-medium">79%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">28</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Recent Violations</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-gray-400 uppercase font-semibold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-2">Vehicle No.</th>
                  <th className="py-3 px-2">School</th>
                  <th className="py-3 px-2">Violation</th>
                  <th className="py-3 px-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-700">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-bold text-[11px] text-gray-800">UP32 AB 1234</td>
                  <td className="py-3 px-2">DPS Lucknow</td>
                  <td className="py-3 px-2 text-gray-500">Speed Governor Missing</td>
                  <td className="py-3 px-2 text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-bold text-[11px] text-gray-800">UP78 CD 5678</td>
                  <td className="py-3 px-2">City Montessori</td>
                  <td className="py-3 px-2 text-gray-500">Expired Fitness Certificate</td>
                  <td className="py-3 px-2 text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-bold text-[11px] text-gray-800">UP65 EF 9012</td>
                  <td className="py-3 px-2">St. Xavier's Agra</td>
                  <td className="py-3 px-2 text-gray-500">No Fire Extinguisher</td>
                  <td className="py-3 px-2 text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 font-bold text-[11px] text-gray-800">UP54 GH 3456</td>
                  <td className="py-3 px-2">Army Public School</td>
                  <td className="py-3 px-2 text-gray-500">GPS Malfunction</td>
                  <td className="py-3 px-2 text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Warning
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-b-transparent">
                  <td className="py-3 px-2 font-bold text-[11px] text-gray-800">UP70 IJ 7890</td>
                  <td className="py-3 px-2">Delhi Public School</td>
                  <td className="py-3 px-2 text-gray-500">No First Aid Kit</td>
                  <td className="py-3 px-2 text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-700 border border-red-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Violation
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" /> Documents Expiring Within 30 Days
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="border border-amber-100 bg-amber-50/30 rounded-lg p-4 flex gap-3 hover:bg-amber-50 transition-colors cursor-pointer">
            <div className="mt-1 p-2 bg-amber-100 text-amber-600 rounded-md shrink-0 h-fit">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">UP32 KL 2345</h4>
              <p className="text-xs text-gray-600 mt-0.5">Fitness Certificate — GD Goenka</p>
              <p className="text-xs text-amber-600 font-medium mt-1">Expires: 2026-04-05 (20 days)</p>
            </div>
          </div>

          <div className="border border-amber-100 bg-amber-50/30 rounded-lg p-4 flex gap-3 hover:bg-amber-50 transition-colors cursor-pointer">
            <div className="mt-1 p-2 bg-amber-100 text-amber-600 rounded-md shrink-0 h-fit">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">UP78 MN 6789</h4>
              <p className="text-xs text-gray-600 mt-0.5">Insurance — Ryan International</p>
              <p className="text-xs text-amber-600 font-medium mt-1">Expires: 2026-04-10 (25 days)</p>
            </div>
          </div>

          <div className="border border-red-100 bg-red-50/30 rounded-lg p-4 flex gap-3 hover:bg-red-50 transition-colors cursor-pointer">
            <div className="mt-1 p-2 bg-red-100 text-red-600 rounded-md shrink-0 h-fit">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">UP65 OP 1357</h4>
              <p className="text-xs text-gray-600 mt-0.5">Permit — Kendriya Vidyalaya</p>
              <p className="text-xs text-red-600 font-medium mt-1">Expires: 2026-03-25 (9 days)</p>
            </div>
          </div>

          <div className="border border-amber-100 bg-amber-50/30 rounded-lg p-4 flex gap-3 hover:bg-amber-50 transition-colors cursor-pointer">
            <div className="mt-1 p-2 bg-amber-100 text-amber-600 rounded-md shrink-0 h-fit">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">UP54 QR 2468</h4>
              <p className="text-xs text-gray-600 mt-0.5">PUC Certificate — Army Public</p>
              <p className="text-xs text-amber-600 font-medium mt-1">Expires: 2026-03-28 (12 days)</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DashboardDetails;