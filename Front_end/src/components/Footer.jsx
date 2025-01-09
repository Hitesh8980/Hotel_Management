import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2025 Hospital Management System. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
