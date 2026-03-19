import React from 'react';
import { Layers, ZoomIn, ZoomOut, Maximize, MapPin } from 'lucide-react';

// --- Dummy Data ---
const hotspots = [
  { district: 'Meerut', violations: 67 },
  { district: 'Jhansi', violations: 55 },
  { district: 'Saharanpur', violations: 48 },
  { district: 'Mirzapur', violations: 42 },
];

// Approximate coordinates for the map dots (0 to 800 width, 0 to 600 height coordinate system)
const mapPoints = [
  { id: 1, cx: 240, cy: 150, type: 'violation' },
  { id: 2, cx: 270, cy: 200, type: 'violation' },
  { id: 3, cx: 300, cy: 450, type: 'violation' },
  { id: 4, cx: 620, cy: 420, type: 'violation' },
  
  { id: 5, cx: 220, cy: 250, type: 'compliant' },
  { id: 6, cx: 280, cy: 300, type: 'compliant' },
  { id: 7, cx: 290, cy: 350, type: 'compliant' },
  { id: 8, cx: 480, cy: 350, type: 'compliant' },
  { id: 9, cx: 580, cy: 370, type: 'compliant' },
  { id: 10, cx: 590, cy: 280, type: 'compliant' },
  
  { id: 11, cx: 300, cy: 220, type: 'warning' },
  { id: 12, cx: 330, cy: 240, type: 'warning' },
  { id: 13, cx: 260, cy: 330, type: 'warning' },
  { id: 14, cx: 430, cy: 410, type: 'warning' },
  { id: 15, cx: 610, cy: 360, type: 'warning' },
  { id: 16, cx: 650, cy: 400, type: 'warning' },
  { id: 17, cx: 680, cy: 280, type: 'warning' },
];

const MapMonitoring = () => {
  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Map-Based Monitoring</h1>
          <p className="text-slate-500 text-sm mt-1">GIS Monitoring — Uttar Pradesh</p>
        </div>
        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors shadow-sm">
          <Layers size={16} className="text-slate-500" />
          District View
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-50"><path d="m6 9 6 6 6-6"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Map Area */}
        <div className="lg:col-span-8 relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm h-[600px] flex items-center justify-center">
          
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          ></div>

          {/* Map Controls (Top Right) */}
          <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
            <button className="bg-white border border-gray-200 p-2 rounded-md shadow-sm hover:bg-gray-50 text-slate-600 transition-colors">
              <ZoomIn size={18} />
            </button>
            <button className="bg-white border border-gray-200 p-2 rounded-md shadow-sm hover:bg-gray-50 text-slate-600 transition-colors">
              <ZoomOut size={18} />
            </button>
            <button className="bg-white border border-gray-200 p-2 rounded-md shadow-sm hover:bg-gray-50 text-slate-600 transition-colors mt-2">
              <Maximize size={18} />
            </button>
          </div>

          {/* SVG Map Container */}
          <svg viewBox="0 0 800 600" className="w-full h-full relative z-10 drop-shadow-sm">
            {/* Stylized State Polygon */}
            <path 
              d="M 250 100 L 350 80 L 450 120 L 600 100 L 680 200 L 720 280 L 660 380 L 680 450 L 580 540 L 450 480 L 350 550 L 250 480 L 150 400 L 120 250 Z" 
              className="fill-slate-50/50 stroke-slate-300 stroke-[3]" 
              strokeLinejoin="round"
            />
            
            {/* Render Points */}
            {mapPoints.map((point) => {
              if (point.type === 'violation') {
                return (
                  <g key={point.id}>
                    {/* Halo effect for violations */}
                    <circle cx={point.cx} cy={point.cy} r="16" className="fill-red-500/20 animate-pulse" />
                    <circle cx={point.cx} cy={point.cy} r="6" className="fill-[#ef4444]" />
                  </g>
                );
              }
              if (point.type === 'warning') {
                return <circle key={point.id} cx={point.cx} cy={point.cy} r="6" className="fill-[#f59e0b]" />;
              }
              return <circle key={point.id} cx={point.cx} cy={point.cy} r="6" className="fill-[#22c55e]" />;
            })}
          </svg>

          {/* Legend (Bottom Left) */}
          <div className="absolute bottom-6 left-6 bg-white border border-gray-200 p-4 rounded-lg shadow-sm z-20">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Legend</h4>
            <div className="flex flex-col gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
                Compliant (7)
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
                Warning (7)
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
                Violation (4)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Instruction Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
            <MapPin size={32} className="text-slate-400 mb-3" />
            <h3 className="text-slate-800 font-semibold mb-1">Select a district</h3>
            <p className="text-slate-500 text-xs">Click on any marker to view details</p>
          </div>

          {/* State Summary Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-slate-800 font-bold text-sm mb-4">State Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-slate-500">Total Districts</span>
                <span className="font-bold text-slate-800">18</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-slate-500">Total Buses</span>
                <span className="font-bold text-slate-800">9,290</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-slate-500">Avg Compliance</span>
                <span className="font-bold text-slate-800">77%</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-500">Total Violations</span>
                <span className="font-bold text-[#ef4444]">591</span>
              </div>
            </div>
          </div>

          {/* Hotspots Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex-1">
            <h3 className="text-slate-800 font-bold text-sm mb-4">Hotspots</h3>
            <div className="flex flex-col gap-3">
              {hotspots.map((hotspot, index) => (
                <div key={index} className="flex justify-between items-center border border-red-100 bg-red-50/50 rounded-lg px-4 py-3">
                  <span className="text-sm font-semibold text-slate-800">{hotspot.district}</span>
                  <span className="text-xs font-bold text-[#ef4444]">{hotspot.violations} violations</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MapMonitoring;