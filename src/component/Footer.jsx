import React from 'react';
import { ChevronDown, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
              </div>
              <span className="text-2xl font-bold">whitepace</span>
            </div>
            <p className="text-gray-300">
              whitepace was created for the new ways we live and work. We make a better
              workspace around the world
            </p>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Customer stories</a></li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Guides & tutorials</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Help center</a></li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Media kit</a></li>
            </ul>
          </div>

          <div className="lg:w-1/4">
            <h3 className="text-2xl font-bold mb-4">Try It Today</h3>
            <p className="text-gray-300 mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-md transition-colors flex items-center">
              Start today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <hr className="border-blue-800 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center cursor-pointer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
              </svg>
              <span className="mr-1">English</span>
              <ChevronDown size={16} />
            </div>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-300 transition-colors">Terms & privacy</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Security</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Status</a>
          </div>

          <div className="text-sm mb-4 md:mb-0">
            ©2021 Whitepace LLC.
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;