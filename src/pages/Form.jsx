import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Let's Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000080] to-blue-600 dark:from-blue-400 dark:to-indigo-400">Connected</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-colors">
            It is a long established fact that a reader will be distracted by the readable content
            <br />
            of a page when looking at its layout. The point of using.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Info */}
          <div 
            className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl dark:shadow-blue-900/20 border border-gray-100 dark:border-gray-700 transition-colors"
            style={{ animation: 'slideInLeft 0.8s ease-out' }}
          >
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Email Address
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">support@startup.com</p>
              </div>

              {/* Office Location */}
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Office Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">76/A, Green valle, Califonia USA.</p>
              </div>

              {/* Phone Number */}
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Phone Number
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">+009 8754 3433 223</p>
              </div>

              {/* Skype Email */}
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 transition-colors">
                  <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Skype Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">example@yourmail.com</p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Social Media</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-blue-900/20 border border-gray-100 dark:border-gray-700 transition-colors"
            style={{ animation: 'slideInRight 0.8s ease-out' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 - Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Devid Wonder"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-500"
                  />
                </div>
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-500"
                  />
                </div>
              </div>

              {/* Row 2 - Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+009 3342 3432"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#000080] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#000080]/20 dark:focus:ring-blue-800 outline-none transition-all duration-300 group-hover:border-[#000080] dark:group-hover:border-blue-500"
                  />
                </div>
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Type your subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 resize-none group-hover:border-blue-300 dark:group-hover:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#000080] dark:bg-blue-600 text-white font-semibold px-10 py-4 shadow-lg hover:shadow-xl dark:shadow-blue-600/30 transform hover:scale-105 transition-all duration-300 hover:bg-[#000066] dark:hover:bg-blue-700 flex items-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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