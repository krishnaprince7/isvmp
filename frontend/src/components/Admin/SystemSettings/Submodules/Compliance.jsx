import React, { useState } from 'react';
import { Save } from 'lucide-react';

const initialRules = [
  { id: 1, parameter: 'Fire Extinguisher', mandatory: true, weight: 10, active: true },
  { id: 2, parameter: 'First Aid Kit', mandatory: true, weight: 8, active: true },
  { id: 3, parameter: 'GPS Device', mandatory: true, weight: 12, active: true },
  { id: 4, parameter: 'Speed Governor (40 km/h)', mandatory: true, weight: 15, active: true },
  { id: 5, parameter: 'CCTV Camera', mandatory: false, weight: 10, active: true },
  { id: 6, parameter: 'Emergency Exit', mandatory: true, weight: 10, active: true },
  { id: 7, parameter: 'Fitness Certificate', mandatory: true, weight: 10, active: true },
  { id: 8, parameter: 'Insurance', mandatory: true, weight: 8, active: true },
  { id: 9, parameter: 'Permit', mandatory: true, weight: 7, active: true },
  { id: 10, parameter: 'PUC Certificate', mandatory: true, weight: 5, active: true },
  { id: 11, parameter: 'Driver Badge', mandatory: true, weight: 5, active: true },
];

const ToggleSwitch = ({ isOn, onToggle }) => (
  <button 
    type="button"
    onClick={onToggle}
    className={`w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none ${isOn ? 'bg-[#1e3a8a]' : 'bg-slate-200'}`}
  >
    <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${isOn ? 'left-6' : 'left-1'}`}></div>
  </button>
);

const Compliance = () => {
  const [rules, setRules] = useState(initialRules);

  const toggleMandatory = (id) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, mandatory: !rule.mandatory } : rule
    ));
  };

  const toggleActive = (id) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, active: !rule.active } : rule
    ));
  };

  const handleWeightChange = (id, newValue) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, weight: newValue } : rule
    ));
  };

  return (
    <div className="animate-in fade-in duration-300">
      
      <h2 className="text-[15px] font-bold text-slate-800 mb-6 px-4">Compliance Rule Configuration</h2>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 w-16">#</th>
              <th className="px-6 py-4">PARAMETER</th>
              <th className="px-6 py-4">MANDATORY</th>
              <th className="px-6 py-4">WEIGHT (SCORE)</th>
              <th className="px-6 py-4">ACTIVE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {rules.map((rule) => (
              <tr key={rule.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{rule.id}</td>
                <td className="px-6 py-4 font-medium text-slate-700">{rule.parameter}</td>
                
                <td className="px-6 py-4">
                  <ToggleSwitch 
                    isOn={rule.mandatory} 
                    onToggle={() => toggleMandatory(rule.id)} 
                  />
                </td>
                
                <td className="px-6 py-4">
                  <input 
                    type="number" 
                    value={rule.weight}
                    onChange={(e) => handleWeightChange(rule.id, e.target.value)}
                    className="w-16 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-center text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                  />
                </td>
                
                <td className="px-6 py-4">
                  <ToggleSwitch 
                    isOn={rule.active} 
                    onToggle={() => toggleActive(rule.id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
          <Save size={16} strokeWidth={2.5} />
          Save Rules
        </button>
      </div>

    </div>
  );
};

export default Compliance;