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
import SchoolManagement from './components/Admin/SchoolManagement/SchoolManagement';
import SchoolProfile from './components/Admin/SchoolManagement/SchoolRegistration/SchoolProfile';
import TransportNodal from './components/Admin/SchoolManagement/SchoolRegistration/TransportNodal';
import AffidavitUpload from './components/Admin/SchoolManagement/SchoolRegistration/AffidavitUpload';
import VehicleCommitte from './components/Admin/SchoolManagement/SchoolRegistration/VehicleCommitte';
import BusManagement from './components/Admin/BusManagement/BusManagement';
import Vendor from './components/Admin/VendorManagement/Vendor';
import ComplianceMonitoring from './components/Admin/ComplianceMonitoring';
import Inspections from './components/Admin/Inspections';
import Violations from './components/Admin/Violations';
import MapMonitoring from './components/Admin/MapMonitoring';
import ReportsAnalytics from './components/Admin/ReportsAnalytics/ReportsAnalytics';
import DistrictAnalytics from './components/Admin/DistrictAnalytics';
import AlertsNotifications from './components/Admin/AlertsNotifications/AlertsNotifications';
import UserManagement from './components/Admin/UserManagement/UserManagement';
import Settings from './components/Admin/SystemSettings/Settings';

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
        <Route path="school-management" element={<SchoolManagement />} />
        <Route path="school-management/register" element={<SchoolProfile />} />
        <Route path="school-management/register-transport" element={<TransportNodal />} />
        <Route path="school-management/register-affidavit-upload" element={<AffidavitUpload />} />
        <Route path="school-management/register-vehicles-committee" element={<VehicleCommitte />} />

        <Route path="bus-management" element={<BusManagement />} />
        <Route path="vendor-management" element={<Vendor />} />
        <Route path="compliance-monitoring" element={<ComplianceMonitoring />} />
        <Route path="/inspections" element={<Inspections />} />
        <Route path="/violations" element={<Violations />} />
        <Route path="/map-monitoring" element={<MapMonitoring />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
        <Route path="/district-leaderboard" element={<DistrictAnalytics />} />
        <Route path="/alerts-notifications" element={<AlertsNotifications />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/settings" element={<Settings />} />
        
      </Route>
    </Routes>
  );
};

export default App;