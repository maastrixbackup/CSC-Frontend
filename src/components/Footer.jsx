import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
export default function Footer() {

  return (
    <footer className="bg-white dark:bg-[#000080] text-gray-900 dark:text-white transition-colors relative">
      {/* Top Blur Line */}
  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-blue-400 dark:blur-sm transition-all"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#000080] dark:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold">CSC</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-xs">
                  Insurance Claim Advisory
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-xs">
                  Claim Documentation Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-xs">
                  Repair Scope Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-xs">
                  Construction Cost Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-xs">
                  Pre-Loss Documentation Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-xs">
                  Disaster Recovery Consulting (FEMA IA/PA)
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Press media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">
              Subscribe to receive future updates
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#000080] dark:focus:border-white/40 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-[#000080] dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-6 transition-colors">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                English
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#000080] dark:hover:text-white transition-colors">
                Support
              </a>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">© 2025 CSC. All rights reserved</p>
              <button className="bg-[#000080] dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}