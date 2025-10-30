import React from "react";
import { Link } from "@tanstack/react-router"; // or use <a> tags if not using router

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-300 py-4 mt-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-15 text-sm text-black-600">
        <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
        <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
        <Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>
      <div className="text-center text-xs text-gray-400 mt-3">
        © {new Date().getFullYear()} LinkrSite — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
