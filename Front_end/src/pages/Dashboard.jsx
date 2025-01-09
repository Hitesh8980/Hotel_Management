import React, { useEffect, useState } from 'react';
import { getDashboardStats } from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalStaff: 0,
    totalDeliveries: 0,
    totalDietCharts: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold">Total Patients</h3>
          <p className="text-2xl">{stats.totalPatients}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold">Total Staff</h3>
          <p className="text-2xl">{stats.totalStaff}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold">Total Deliveries</h3>
          <p className="text-2xl">{stats.totalDeliveries}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold">Total Diet Charts</h3>
          <p className="text-2xl">{stats.totalDietCharts}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
