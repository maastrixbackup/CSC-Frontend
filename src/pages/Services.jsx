import React from 'react';
import { BarChart3, Layers, CreditCard, Gauge, RefreshCw } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Crafted for Startups",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      color: "bg-blue-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "High-quality Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      color: "bg-indigo-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "All Essential Sections",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      color: "bg-blue-600"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Speed Optimized",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      color: "bg-indigo-600"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Fully Customizable",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      color: "bg-blue-500"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className=" bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Offer The Best Quality Service
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              for You
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
            <br />
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#000080] text-white px-8 py-4  font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-[#0000FF]">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}