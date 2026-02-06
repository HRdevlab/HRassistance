import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="ml-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* Brand & Socials */}
          <div className="col-span-1">
            <div className="flex flex-col items-center md:items-start mb-4">
              <img
                src="/assets/Logo-Dark.png"
                alt="HRassistance"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              Your trusted partner for talent acquisition and recruitment solutions across India.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/company/hrassistanceindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@hrassitance.co.in"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company Information</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</NavLink></li>
              <li><NavLink to="/job-seekers" className="text-gray-400 hover:text-white transition-colors text-sm">Job seekers</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Employers</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Legal & Compliance</h3>
            <ul className="space-y-2">
              <li><NavLink to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</NavLink></li>
              <li><NavLink to="/trust-safety" className="text-gray-400 hover:text-white transition-colors text-sm">Trust & Safety (Fraud Alert)</NavLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li><NavLink to="/faqs" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs / Help Desk</NavLink></li>
              <li><NavLink to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">Site Map</NavLink></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col justify-center items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
