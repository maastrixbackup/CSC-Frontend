import React from 'react';
import hero from '../assets/update.jpg';
import { useTheme } from '../context/useTheme';

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden mt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero} 
          alt="Financial consulting background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - darker in dark mode, lighter in light mode */}
        <div className={`absolute inset-0 transition-colors ${
          isDark 
            ? 'bg-gradient-to-r from-black/80 via-black/60 to-black/40' 
            : 'bg-gradient-to-r from-black/70 via-black/50 to-transparent'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-6">
              {/* Main Heading with Animation */}
              <div className="space-y-3">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-[#000080] dark:bg-blue-500 mb-4 transition-colors"></div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                  BUILDING BRIDGES TO
                  <span className="block text-white mt-2">FINANCIAL SUCCESS</span>
                </h1>
              </div>
              
              {/* Subheading */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-white tracking-wide max-w-2xl">
                Your trusted partner in achieving sustainable financial growth
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/90 dark:text-white max-w-xl leading-relaxed">
                Expert consulting services designed to help you navigate complex financial challenges and unlock new opportunities for success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button 
                  className="px-8 py-3 bg-[#000080] hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-base tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#000080]/50 dark:hover:shadow-blue-600/50 hover:scale-105 transform"
                >
                  BECOME A PARTNER
                </button>
                <button 
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold text-base tracking-wide transition-all duration-300 hover:bg-white hover:text-[#000080] dark:hover:text-blue-600 shadow-xl"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm hover:bg-[#000080] dark:hover:bg-blue-600 transition-all rounded-full border border-white/20">
        <span className="text-2xl">‹</span>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm hover:bg-[#000080] dark:hover:bg-blue-600 transition-all rounded-full border border-white/20">
        <span className="text-2xl">›</span>
      </button>

    </section>
  );
};

export default HeroSection;