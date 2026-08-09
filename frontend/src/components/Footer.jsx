import React from "react";
import { Link } from "@tanstack/react-router"; // or use <a> tags if not using router

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-300 py-4 mt-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-15 text-sm text-black-600">
       
      </div>
      <div className="text-center text-xs text-gray-400 mt-3">
        © {new Date().getFullYear()} LinkrSite — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
