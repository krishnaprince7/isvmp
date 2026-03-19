import React from 'react';
import { Trophy, TrendingUp, TrendingDown, AlertTriangle, Activity } from 'lucide-react';

// --- Dummy Data ---
const leaderboardData = [
  { rank: '🥇', district: 'Noida', buses: 550, compliance: 91, trend: '+3.2%', isUp: true, violations: 8 },
  { rank: '🥈', district: 'Lucknow', buses: '1,240', compliance: 89, trend: '+2.1%', isUp: true, violations: 23 },
  { rank: '🥉', district: 'Ghaziabad', buses: 620, compliance: 86, trend: '+1.8%', isUp: true, violations: 12 },
  { rank: '#4', district: 'Prayagraj', buses: 650, compliance: 85, trend: '+0.5%', isUp: true, violations: 19 },
  { rank: '#5', district: 'Aligarh', buses: 380, compliance: 83, trend: '+1.2%', isUp: true, violations: 15 },
  { rank: '#6', district: 'Agra', buses: 860, compliance: 82, trend: '-0.3%', isUp: false, violations: 31 },
  { rank: '#7', district: 'Ayodhya', buses: 350, compliance: 80, trend: '+2.5%', isUp: true, violations: 20 },
  { rank: '#8', district: 'Bareilly', buses: 420, compliance: 79, trend: '+0.8%', isUp: true, violations: 28 },
  { rank: '#9', district: 'Kanpur', buses: 980, compliance: 76, trend: '-1.2%', isUp: false, violations: 45 },
  { rank: '#10', district: 'Gorakhpur', buses: 480, compliance: 74, trend: '+1%', isUp: true, violations: 38 },
  { rank: '#11', district: 'Sultanpur', buses: 190, compliance: 73, trend: '-0.5%', isUp: false, violations: 30 },
  { rank: '#12', district: 'Moradabad', buses: 340, compliance: 72, trend: '-1.8%', isUp: false, violations: 33 },
  { rank: '#13', district: 'Varanasi', buses: 720, compliance: 71, trend: '-0.8%', isUp: false, violations: 52 },
  { rank: '#14', district: 'Malihabad', buses: 140, compliance: 69, trend: '+0.2%', isUp: true, violations: 15 },
  { rank: '#15', district: 'Meerut', buses: 540, compliance: 68, trend: '-2.1%', isUp: false, violations: 67 },
  { rank: '#16', district: 'Mirzapur', buses: 160, compliance: 66, trend: '-1.5%', isUp: false, violations: 42 },
  { rank: '#17', district: 'Saharanpur', buses: 280, compliance: 65, trend: '-3%', isUp: false, violations: 48 },
  { rank: '#18', district: 'Jhansi', buses: 220, compliance: 62, trend: '-2.5%', isUp: false, violations: 55 },
];

const scoringAlgorithm = [
  { label: 'Safety Equipment', value: 83 },
  { label: 'Documents', value: 92 },
  { label: 'Driver Compliance', value: 87 },
  { label: 'Vehicle Fitness', value: 78 },
  { label: 'GPS/CCTV', value: 71 },
  { label: 'Speed Governor', value: 77 },
];

const riskPredictions = [
  { district: 'Jhansi', risk: 92, color: 'bg-[#ef4444]', desc: 'Low compliance, high violations, declining trend' },
  { district: 'Saharanpur', risk: 88, color: 'bg-[#ef4444]', desc: 'Steep decline (-3.0%), many violations' },
  { district: 'Meerut', risk: 85, color: 'bg-[#ef4444]', desc: '67 violations, below 70% compliance' },
  { district: 'Mirzapur', risk: 82, color: 'bg-[#f59e0b]', desc: 'Low fleet count, poor compliance, declining' },
  { district: 'Varanasi', risk: 74, color: 'bg-[#3b82f6]', desc: 'Large fleet with 52 violations' },
];

// --- Helper component for progress bars ---
const getComplianceColor = (value) => {
  if (value >= 80) return 'bg-[#22c55e]';
  if (value >= 70) return 'bg-[#f59e0b]';
  return 'bg-[#ef4444]';
};

const DistrictAnalytics = () => {
  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">District Ranking & Analytics</h1>
        <p className="text-slate-500 text-sm mt-1">Leaderboard, risk prediction & compliance scoring</p>
      </div>

      {/* Top 3 District Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Rank 1 */}
        <div className="bg-[#fefce8] border border-[#fef08a] rounded-xl p-6 shadow-sm flex flex-col items-center justify-center relative">
          <div className="absolute top-4 bg-[#fef08a] text-yellow-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Trophy size={14} /> 1
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mt-6 mb-4">Noida</h2>
          <div className="w-20 h-20 rounded-full border-4 border-[#22c55e] flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-slate-800">91%</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
            <TrendingUp size={16} /> +3.2%
          </span>
        </div>

        {/* Rank 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center relative">
          <div className="absolute top-4 bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Trophy size={14} className="text-slate-500" /> 2
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mt-6 mb-4">Lucknow</h2>
          <div className="w-20 h-20 rounded-full border-4 border-[#22c55e] flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-slate-800">89%</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
            <TrendingUp size={16} /> +2.1%
          </span>
        </div>

        {/* Rank 3 */}
        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-6 shadow-sm flex flex-col items-center justify-center relative">
          <div className="absolute top-4 bg-[#fed7aa] text-orange-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Trophy size={14} className="text-orange-600" /> 3
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mt-6 mb-4">Ghaziabad</h2>
          <div className="w-20 h-20 rounded-full border-4 border-[#22c55e] flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-slate-800">86%</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
            <TrendingUp size={16} /> +1.8%
          </span>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* District Compliance Leaderboard (Table) - Takes 2 cols */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-slate-50">
            <Trophy size={18} className="text-[#f59e0b]" />
            <h3 className="font-semibold text-slate-800">District Compliance Leaderboard</h3>
          </div>
          
          <div className="overflow-auto h-[500px] custom-scrollbar">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-white text-slate-400 text-[10px] font-bold uppercase tracking-wider sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-6 py-4">RANK</th>
                  <th className="px-6 py-4">DISTRICT</th>
                  <th className="px-6 py-4">BUSES</th>
                  <th className="px-6 py-4">COMPLIANCE</th>
                  <th className="px-6 py-4">TREND</th>
                  <th className="px-6 py-4 text-center">VIOLATIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leaderboardData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3 font-semibold text-slate-700">{row.rank}</td>
                    <td className="px-6 py-3 font-bold text-slate-900">{row.district}</td>
                    <td className="px-6 py-3 text-slate-500">{row.buses}</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${getComplianceColor(row.compliance)}`} 
                            style={{ width: `${row.compliance}%` }}
                          />
                        </div>
                        <span className="font-bold text-slate-800">{row.compliance}%</span>
                      </div>
                    </td>
                    <td className={`px-6 py-3 font-medium flex items-center gap-1 ${row.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {row.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {row.trend}
                    </td>
                    <td className="px-6 py-3 text-center font-semibold text-slate-700">{row.violations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scoring Algorithm (Spider Chart) - Takes 1 col */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <Activity size={18} className="text-[#1e3a8a]" />
            <h3 className="font-semibold text-slate-800">Scoring Algorithm</h3>
          </div>
          
          {/* Custom SVG Radar/Spider Chart Representation */}
          <div className="relative w-full aspect-square mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {/* Grid Hexagons */}
              {[20, 40, 60, 80, 100].map(r => (
                <polygon 
                  key={r}
                  points={`50,${50-r/2} ${50+r*0.433},${50-r/4} ${50+r*0.433},${50+r/4} 50,${50+r/2} ${50-r*0.433},${50+r/4} ${50-r*0.433},${50-r/4}`}
                  fill="none" stroke="#e2e8f0" strokeWidth="0.5"
                />
              ))}
              {/* Axis Lines */}
              <line x1="50" y1="50" x2="50" y2="0" stroke="#cbd5e1" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="93.3" y2="25" stroke="#cbd5e1" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="93.3" y2="75" stroke="#cbd5e1" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="50" y2="100" stroke="#cbd5e1" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="6.7" y2="75" stroke="#cbd5e1" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="6.7" y2="25" stroke="#cbd5e1" strokeWidth="0.5"/>

              {/* Data Polygon (Blue fill) */}
              {/* Values roughly mapped to the 6 axes */}
              <polygon 
                points="50,8.5 89.5,27.5 83.3,69.2 50,89 15.6,64.2 13.5,31.5"
                fill="rgba(30, 58, 138, 0.2)" stroke="#1e3a8a" strokeWidth="1.5"
              />
              <circle cx="50" cy="8.5" r="1.5" fill="#1e3a8a" />
              <circle cx="89.5" cy="27.5" r="1.5" fill="#1e3a8a" />
              <circle cx="83.3" cy="69.2" r="1.5" fill="#1e3a8a" />
              <circle cx="50" cy="89" r="1.5" fill="#1e3a8a" />
              <circle cx="15.6" cy="64.2" r="1.5" fill="#1e3a8a" />
              <circle cx="13.5" cy="31.5" r="1.5" fill="#1e3a8a" />

              {/* Labels */}
              <text x="50" y="-4" textAnchor="middle" className="text-[4px] fill-slate-500 font-medium">Safety Equipment</text>
              <text x="96" y="25" textAnchor="start" className="text-[4px] fill-slate-500 font-medium">Documents</text>
              <text x="96" y="77" textAnchor="start" className="text-[4px] fill-slate-500 font-medium">Driver Compliance</text>
              <text x="50" y="106" textAnchor="middle" className="text-[4px] fill-slate-500 font-medium">Vehicle Fitness</text>
              <text x="4" y="77" textAnchor="end" className="text-[4px] fill-slate-500 font-medium">GPS/CCTV</text>
              <text x="4" y="25" textAnchor="end" className="text-[4px] fill-slate-500 font-medium">Speed Governor</text>
            </svg>
          </div>

          <div className="mt-auto space-y-3">
            {scoringAlgorithm.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-slate-600 font-medium">{item.label}</span>
                <span className="font-bold text-slate-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Violation Risk Prediction */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle size={18} className="text-[#ef4444]" />
          <h3 className="font-semibold text-slate-800">Violation Risk Prediction</h3>
        </div>

        <div className="space-y-5">
          {riskPredictions.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-24 font-bold text-slate-800 text-sm">{item.district}</span>
              
              <div className="flex-1 h-3.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${item.color}`} 
                  style={{ width: `${item.risk}%` }}
                />
              </div>

              <div className="w-10 text-right font-bold text-slate-800 text-sm">{item.risk}%</div>
              
              <div className="w-1/3 text-xs text-slate-500 truncate hidden md:block">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DistrictAnalytics;