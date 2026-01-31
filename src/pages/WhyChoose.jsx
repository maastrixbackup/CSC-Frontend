import React from 'react';

export default function TeamSection() {
  return (
    <div className="bg-white dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8 lg:py-10 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Grid */}
          <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
            {/* Main Image Grid Container */}
            <div className="relative pt-8 pb-16">
              {/* Grid Layout */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Top Left - Two women with laptop */}
                <div className="relative">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl dark:shadow-blue-900/20 transform hover:scale-105 transition-all duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop" 
                      alt="Team collaboration" 
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                  </div>
                </div>
                
                {/* Top Right - Taller image with two women */}
                <div className="relative row-span-2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl dark:shadow-blue-900/20 transform hover:scale-105 transition-all duration-300 h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop" 
                      alt="Team working together" 
                      className="w-full h-full min-h-[420px] sm:min-h-[480px] md:min-h-[560px] object-cover"
                    />
                  </div>
                </div>
                
                {/* Bottom Left - Woman at desk */}
                <div className="relative">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl dark:shadow-blue-900/20 transform hover:scale-105 transition-all duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=600&fit=crop" 
                      alt="Team member working" 
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:pl-4">
            <div className="inline-block">
              <span className="text-[#000080] dark:text-blue-400 font-semibold text-sm md:text-base tracking-wider uppercase transition-colors">
                Why Choose Us
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors">
              We Make Our customers happy by giving Best services.
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl transition-colors">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
            
            <div className="pt-4">
              <button className="group flex items-center gap-3 md:gap-4 bg-[#000080] hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-600/30 transform hover:scale-105">
                <span className="text-sm md:text-base font-medium">SEE HOW WE WORK</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}