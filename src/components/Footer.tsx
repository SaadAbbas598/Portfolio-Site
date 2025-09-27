import React from 'react';
import { Heart, Server, Cloud } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Server className="w-8 h-8 text-blue-400" />
                  <Cloud className="w-4 h-4 text-green-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold">Remy G.</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Senior DevOps Engineer specializing in cloud infrastructure, 
                automation, and building reliable, scalable systems.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </a>
                <a href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Experience
                </a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
                <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Skills
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>remy.devops@gmail.com</p>
                <p>(201) 685-4245</p>
                <p>Jersey City, NJ, USA</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-300 mb-4 md:mb-0">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
            <div className="text-gray-300">
              <p>&copy; {new Date().getFullYear()} Remy G. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;