import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTheme } from '../context/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const services = [
    { name: 'Claim Education Consulting', href: '#' },
    { name: 'Documentation Assessment', href: '#' },
    { name: 'Scope & Cost Review', href: '#' },
    { name: 'Pre-Loss Consulting', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#000080' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-[#36454F] dark:text-white">
                CSC
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium transition-colors text-[#36454F] dark:text-gray-200 hover:opacity-70">
              Home
            </a>
            <a href="#features" className="font-medium transition-colors hover:opacity-70 text-[#36454F] dark:text-gray-200">
              Features
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="font-medium flex items-center gap-1 transition-colors hover:opacity-70 text-[#36454F] dark:text-gray-200"
              >
                Services
                <ChevronDownIcon 
                  aria-hidden="true" 
                  className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 z-10 mt-6 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 outline-1 -outline-offset-1 outline-gray-200 dark:outline-gray-700 shadow-lg">
                  <div className="py-1">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm font-medium hover:bg-[#000080]/10 dark:hover:bg-gray-700 transition-colors text-[#36454F] dark:text-gray-200"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#intake" className="font-medium transition-colors hover:opacity-70 text-[#36454F] dark:text-gray-200">
              Intake
            </a>
          </div>

          {/* Right Side - Theme Toggle & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#36454F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Sign In */}
            <button className="px-6 py-2 font-medium transition-colors hover:opacity-70 text-[#36454F] dark:text-gray-200">
              Sign In
            </button>

            {/* Sign Up */}
            <button className="px-6 py-2 rounded-lg font-medium text-white transition-all hover:opacity-90" style={{ backgroundColor: '#000080' }}>
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#36454F] dark:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md font-medium text-[#36454F] dark:text-gray-200">
              Home
            </a>
            <a href="#features" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 text-[#36454F] dark:text-gray-200">
              Features
            </a>
            <div className="px-3 py-2">
              <p className="font-medium text-[#36454F] dark:text-gray-200">Services</p>
              <div className="pl-4 space-y-1 mt-2">
                {services.map((service) => (
                  <a 
                    key={service.name}
                    href={service.href} 
                    className="block px-2 py-2 text-sm rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-[#36454F] dark:text-gray-200"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#intake" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 text-[#36454F] dark:text-gray-200">
              Intake  
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <button 
                onClick={toggleTheme}
                className="px-3 py-2 font-medium text-left flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-[#36454F] dark:text-gray-200"
              >
                {isDark ? (
                  <>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
              <button className="px-3 py-2 font-medium text-left text-[#36454F] dark:text-gray-200">
                Sign In
              </button>
              <button className="px-3 py-2 rounded-lg font-medium text-white" style={{ backgroundColor: '#000080' }}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;