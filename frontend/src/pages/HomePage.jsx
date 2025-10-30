import React from 'react';
import HeroSection from '../components/HeroSection';
import UrlForm from '../components/UrlForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* URL Shortener Section */}
      <div className="flex flex-col items-center justify-center py-2 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Shorten Your Link
          </h2>
          <UrlForm />
           
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default HomePage;
