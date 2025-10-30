import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="text-black-700">Shorten</span> Your URL.
            <br /> Fast & Easy.
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Simplify your links, track clicks, and boost engagement — all in one place.
          </p>

          <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* Right Side - Rocket Image from /public */}
        <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/rocket.png"
            alt="Rocket Launch Illustration"
            className="w-30 md:w-56 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;