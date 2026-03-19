import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

// Data for the detailed breakdown lists
const safetyEquipment = [
  { label: 'Fire Extinguisher', value: 90, status: 'Compliant' },
  { label: 'First Aid Kit', value: 93, status: 'Compliant' },
  { label: 'GPS Device', value: 83, status: 'Warning' },
  { label: 'Speed Governor', value: 77, status: 'Warning' },
  { label: 'CCTV Camera', value: 70, status: 'Violation' },
];

const documents = [
  { label: 'Fitness Certificate', value: 92, status: 'Compliant' },
  { label: 'Insurance', value: 96, status: 'Compliant' },
  { label: 'Permit', value: 95, status: 'Compliant' },
  { label: 'PUC Certificate', value: 88, status: 'Warning' },
];

const driverCompliance = [
  { label: 'Valid License', value: 97, status: 'Compliant' },
  { label: 'Driver Badge', value: 84, status: 'Warning' },
  { label: 'Background Verification', value: 81, status: 'Warning' },
];

// Helper functions for styling based on status
const getBarColor = (status) => {
  switch (status) {
    case 'Compliant': return 'bg-[#22c55e]'; // Green
    case 'Warning': return 'bg-[#f59e0b]';   // Amber/Orange
    case 'Violation': return 'bg-[#ef4444]'; // Red
    default: return 'bg-gray-400';
  }
};

const getPillStyle = (status) => {
  switch (status) {
    case 'Compliant':
      return { text: 'text-emerald-700', bg: 'bg-emerald-100', dot: 'bg-emerald-500' };
    case 'Warning':
      return { text: 'text-amber-700', bg: 'bg-amber-100', dot: 'bg-amber-500' };
    case 'Violation':
      return { text: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' };
    default:
      return { text: 'text-gray-700', bg: 'bg-gray-100', dot: 'bg-gray-500' };
  }
};

// Reusable component for the progress bar rows
const ProgressBarRow = ({ item }) => {
  const barColor = getBarColor(item.status);
  const pillStyle = getPillStyle(item.status);

  return (
    <div className="flex items-center justify-between py-2">
      <span className="w-1/4 text-[14px] font-semibold text-slate-700">{item.label}</span>
      
      {/* Progress Bar */}
      <div className="flex-1 mx-6 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${barColor}`} 
          style={{ width: `${item.value}%` }}
        />
      </div>
      
      {/* Value & Pill */}
      <div className="w-32 flex justify-end items-center gap-4">
        <span className="text-[14px] font-bold text-slate-800">{item.value}%</span>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent w-[88px] justify-center ${pillStyle.bg} ${pillStyle.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${pillStyle.dot}`}></span>
          {item.status}
        </span>
      </div>
    </div>
  );
};

const ComplianceMonitoring = () => {
  // SVG Circle calculation for 81%
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * 0.81);

  return (
    <div className=" bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Compliance Monitoring</h1>
        <p className="text-slate-500 text-sm mt-1">Overall compliance status across all parameters</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Overall Score */}
        <div className="bg-[#1e3a8a] rounded-xl p-6 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider">Overall Score</p>
            <div className="bg-blue-800/50 p-2 rounded-lg relative z-10">
              <ShieldCheck size={20} className="text-blue-200" />
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-1">81%</h2>
            <p className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <TrendingUp size={12} /> 3.1% vs last month
            </p>
          </div>
          {/* Decorative background shape */}
          <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Fully Compliant */}
        <div className="bg-[#22c55e] rounded-xl p-6 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <p className="text-green-100 text-xs font-semibold uppercase tracking-wider">Fully Compliant</p>
            <div className="bg-white/20 p-2 rounded-lg relative z-10">
              <CheckCircle2 size={20} className="text-white" />
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">34,712</h2>
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Partial */}
        <div className="bg-[#f59e0b] rounded-xl p-6 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <p className="text-yellow-100 text-xs font-semibold uppercase tracking-wider">Partial</p>
            <div className="bg-white/20 p-2 rounded-lg relative z-10">
              <AlertTriangle size={20} className="text-white" />
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">5,432</h2>
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Non-Compliant */}
        <div className="bg-[#ef4444] rounded-xl p-6 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <p className="text-red-100 text-xs font-semibold uppercase tracking-wider">Non-Compliant</p>
            <div className="bg-white/20 p-2 rounded-lg relative z-10">
              <AlertTriangle size={20} className="text-white" />
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">2,747</h2>
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Compliance Score Breakdown (Circular Chart) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="font-bold text-sm text-slate-800 mb-6">Compliance Score Breakdown</h3>
        <div className="flex justify-center items-center py-4">
          <div className="relative flex justify-center items-center w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background Circle */}
              <circle 
                cx="80" cy="80" r={radius} 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                className="text-gray-100" 
              />
              {/* Progress Circle */}
              <circle 
                cx="80" cy="80" r={radius} 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                strokeDasharray={circumference} 
                strokeDashoffset={strokeDashoffset} 
                className="text-[#22c55e]" 
                strokeLinecap="round" 
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-slate-800">81%</span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Overall</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="flex flex-col gap-6">
        
        {/* Safety Equipment */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-sm text-slate-800 mb-6">Safety Equipment</h3>
          <div className="flex flex-col gap-4">
            {safetyEquipment.map((item, idx) => (
              <ProgressBarRow key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-sm text-slate-800 mb-6">Documents</h3>
          <div className="flex flex-col gap-4">
            {documents.map((item, idx) => (
              <ProgressBarRow key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Driver Compliance */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-sm text-slate-800 mb-6">Driver Compliance</h3>
          <div className="flex flex-col gap-4">
            {driverCompliance.map((item, idx) => (
              <ProgressBarRow key={idx} item={item} />
            ))}
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default ComplianceMonitoring;