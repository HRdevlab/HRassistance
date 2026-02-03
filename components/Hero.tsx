import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden transition-colors duration-500">
      {/* Background Pattern/Image Overlay */}
      <div
        className="absolute inset-0 z-0 transition-colors duration-700"
        style={{ backgroundColor: theme === 'light' ? 'rgba(78, 78, 78, 1)' : 'rgba(51, 59, 82, 1)' }}
      >
        <img
          src="/assets/Home-bg.jpg"
          alt="HR Strategy"
          className="w-full h-full object-cover mix-blend-overlay opacity-50 transition-opacity duration-700"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-md">
            Trusted Recruitment Partner With <span className="text-blue-200">15+ Years</span> of Expertise
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-sm">
            We help organizations hire skilled, job-ready talent with clarity, speed, and predictable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded bg-white text-corporate-blue hover:bg-blue-50 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Hire Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
            <a
              href="https://hrassistance.zohorecruit.com/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/40 text-base font-bold rounded bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
            >
              Find Jobs
              <Search className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
