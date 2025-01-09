import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patient';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DietCharts from './pages/DietCharts';
import Pantry from './pages/Pantry';
import Deliveries from './pages/Deliveries';
import { getPatients } from './services/patientServices';
import ProtectedRoute from './protectedRotue'; // Ensure this is the correct path

const App = () => {
  const [patients, setPatients] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPatients = async () => {
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients data:', error);
    }
  };

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); // Set true if token exists
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />

        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard patients={patients} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patients"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Patients patients={patients} />
                </ProtectedRoute>
              }
            />
            {/* Protected Routes for DietCharts, Pantry, and Deliveries */}
            <Route
              path="/diet-charts"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <DietCharts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pantry"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Pantry />
                </ProtectedRoute>
              }
            />
            <Route
              path="/deliveries"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Deliveries />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
