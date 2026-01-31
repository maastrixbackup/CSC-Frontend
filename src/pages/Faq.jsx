import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of consulting services does ClaimScope Consulting offer?",
      answer: "ClaimScope Consulting provides independent, flat-fee consulting services related to property insurance claims, including insurance claim education and advisory support, claim documentation assessment and organization, repair scope analysis and comparison, cost reasonableness review of construction estimates, pre-loss documentation readiness consulting, and disaster recovery documentation readiness consulting. We also provide general disaster recovery process education informed by experience with FEMA Individual Assistance (IA) and Public Assistance (PA) program environments."
    },
    {
      question: "Does ClaimScope Consulting negotiate insurance claims or represent policyholders?",
      answer: "No. ClaimScope Consulting does not negotiate insurance claims, represent policyholders, provide legal advice, perform construction services, or accept contingency-based compensation. We are a consulting and education firm focused on providing clarity, structure, and confidence through our advisory services. Our role is to educate and guide you through the process, not to act on your behalf."
    },
    {
      question: "What states does ClaimScope Consulting currently serve?",
      answer: "We currently serve Alabama, Florida, Texas, Georgia, Tennessee, and select additional states by engagement. Our multi-state presence allows us to support property owners across the Southeast and beyond, with phased expansion planned for additional markets."
    },
    {
      question: "Who are your ideal clients?",
      answer: "Our ideal clients include homeowners navigating complex property insurance claims, real estate investors with single properties or portfolios, homeowner associations (HOAs) and property managers, and small commercial property owners. We work with clients seeking clarity, structure, and confidence in understanding their insurance claim documentation and processes."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-4 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="bg-gradient-to-r from-[#000080] to-[#36454F] dark:from-blue-700 dark:to-gray-700 rounded-2xl py-2 mb-12 shadow-xl dark:shadow-blue-900/30 transition-colors"
          style={{ animation: 'fadeIn 0.6s ease-out' }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-white text-center">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-600/30 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              style={{
                animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
              >
                <span className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-[#000080] dark:group-hover:text-blue-400 transition-colors duration-200 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transform transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 ${
                  openIndex === index ? 'rotate-180 bg-[#000080] dark:bg-blue-600' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-[#000080] dark:group-hover:text-blue-400" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
      `}</style>
    </section>
  );
}