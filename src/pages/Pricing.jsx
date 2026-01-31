import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 290,
      buttonColor: "bg-[#000080] dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
        "7-day free trial"
      ],
      popular: false
    },
    {
      name: "Growth Plan",
      monthlyPrice: 59,
      annualPrice: 590,
      buttonColor: "bg-[#000080] dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
        "7-day free trial"
      ],
      popular: true
    },
    {
      name: "Business",
      monthlyPrice: 139,
      annualPrice: 1390,
      buttonColor: "bg-[#000080] dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
        "7-day free trial"
      ],
      popular: false
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
            We Offer Great Affordable
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000080] to-blue-600 dark:from-blue-400 dark:to-indigo-400">
              Premium Prices.
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-colors">
            It is a long established fact that a reader will be distracted by the readable content
            <br />
            of a page when looking at its layout. The point of using.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-lg font-semibold transition-colors ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Bill Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-blue-600/30"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-md transform transition-transform duration-300 ${
                isAnnual ? 'translate-x-8' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <span className={`text-lg font-semibold transition-colors ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Bill Annually
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl dark:shadow-blue-900/20 dark:hover:shadow-blue-600/30 transition-all duration-500 transform hover:-translate-y-3 border-2 ${
                plan.popular ? 'border-blue-500 dark:border-blue-400 scale-105 lg:scale-110' : 'border-gray-100 dark:border-gray-700'
              }`}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-start justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-lg mt-4 transition-colors">
                    /{isAnnual ? 'year' : 'per month'}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-3 transition-colors">No credit card required</p>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full ${plan.buttonColor} text-white font-semibold py-4 rounded-full shadow-lg dark:shadow-blue-600/30 transform transition-all duration-300 hover:scale-105 hover:shadow-xl mb-8`}
              >
                Try for free
              </button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center mt-0.5 transition-colors">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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