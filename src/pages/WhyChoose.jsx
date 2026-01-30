import React from 'react';

export default function TeamSection() {
  return (
    <div className=" bg-white py-6 px-4 sm:px-6 lg:px-8 lg:py-10">
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
                  <div className="bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop" 
                      alt="Team collaboration" 
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                  </div>
                </div>
                
                {/* Top Right - Taller image with two women */}
                <div className="relative row-span-2">
                  <div className="bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop" 
                      alt="Team working together" 
                      className="w-full h-full min-h-[420px] sm:min-h-[480px] md:min-h-[560px] object-cover"
                    />
                  </div>
                </div>
                
                {/* Bottom Left - Woman at desk */}
                <div className="relative">
                  <div className="bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
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
              <span className="text-[#000080] font-semibold text-sm md:text-base tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Make Our customers happy by giving Best services.
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
            
            <div className="pt-4">
              <button className="group flex items-center gap-3 md:gap-4 bg-[#000080] hover:bg-[#000066] text-white font-semibold px-6 md:px-8 py-3 md:py-4  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                {/* <div className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 ml-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div> */}
                <span className="text-sm md:text-base font-medium">SEE HOW WE WORK</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}