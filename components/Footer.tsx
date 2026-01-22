import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
              <img
                src="/assets/Logo-Dark.png"
                alt="HRassistance India"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for talent acquisition and recruitment solutions across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">For Candidates</h3>
            <ul className="space-y-2">
              <li><NavLink to="/job-seekers/corporate" className="text-gray-400 hover:text-white transition-colors text-sm">Corporate Jobs</NavLink></li>
              <li><NavLink to="/job-seekers/education" className="text-gray-400 hover:text-white transition-colors text-sm">Education Jobs</NavLink></li>
              <li><NavLink to="/job-seekers/cv-builder" className="text-gray-400 hover:text-white transition-colors text-sm">Build Your CV</NavLink></li>
              <li><NavLink to="/job-seekers/courses" className="text-gray-400 hover:text-white transition-colors text-sm">Skill Courses</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-corporate-blue mt-0.5" />
                <span className="text-sm text-gray-400">
                  Level 5, Corporate Tower,<br />
                  Cyber City, Gurugram,<br />
                  India - 122002
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-corporate-blue" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-corporate-blue" />
                <span className="text-sm text-gray-400">contact@hrassistance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white">Terms & Conditions</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white">Fraud Alert</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
