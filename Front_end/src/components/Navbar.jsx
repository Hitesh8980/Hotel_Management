import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Hospital Management</h1>

        {/* Navigation Links */}
        {isAuthenticated ? (
          <ul className="flex space-x-4">
            <li><Link className="text-white" to="/dashboard">Dashboard</Link></li>
            <li><Link className="text-white" to="/patients">Patients</Link></li>
            <li><Link className="text-white" to="/diet-charts">Diet Charts</Link></li>
            <li><Link className="text-white" to="/pantry">Pantry</Link></li>
            <li><Link className="text-white" to="/deliveries">Deliveries</Link></li>
            <li><button className="text-white" onClick={handleLogout}>Logout</button></li>
          </ul>
        ) : (
          <ul className="flex space-x-4">
            <li><Link className="text-white" to="/login">Login</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
