import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Yahan se Router hata diya

// Aapke components import kar lijiye
import Layout from './components/Admin/Layout';
import DashboardOverview from './components/Admin/StateDashboard/DashboardOverview';
import DistrictOverview from './components/Admin/DistrictDashboard/DistrictOverview';
import DMOverview from './components/Admin/DMDashboard/DMOverview';
import BsaDashboard from './components/Admin/BsaDashboard/BsaDashboard';
import PoliceDashboard from './components/Admin/PoliceDashboard/PoliceDashboard';
import SchoolDashboard from './components/Admin/SchoolDashboard/SchoolDashboard';

const App = () => {
  return (
    // Yahan Router ka tag hata diya gaya hai kyunki wo index.jsx me already hai
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        <Route path="dashboard" element={<DashboardOverview />} />
        <Route path="district-dashboard" element={<DistrictOverview />} />
        <Route path="dm-dashboard" element={<DMOverview />} />
        <Route path="bsa-dashboard" element={<BsaDashboard />} />
        <Route path="police-dashboard" element={<PoliceDashboard />} />
        <Route path="school-dashboard" element={<SchoolDashboard />} />
        
      </Route>
    </Routes>
  );
};

export default App;