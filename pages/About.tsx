import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-blue-100/30 dark:bg-gray-800/50 py-16 md:py-24 border-b border-blue-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between exceptional talent and industry-leading organizations for over 15 years.
          </p>
        </div>
      </div>

      {/* Story & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-corporate-blue dark:text-blue-400 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-8">Crafting Success Stories Since 2009</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Founded with a vision to streamline recruitment, HRassistance India has grown into a premier consultancy trusted by multinational corporations and Indian conglomerates alike. We started with a simple belief: hiring should be predictable, transparent, and quality-driven.
                </p>
                <p>
                  Today, we stand as a beacon of reliability in the HR landscape, having successfully placed over 4,000 professionals in careers that matter.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-200 dark:border-gray-800">
                <div>
                  <span className="block text-4xl font-extrabold text-corporate-blue dark:text-blue-500">15+</span>
                  <span className="text-gray-700 dark:text-gray-400 font-bold">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-extrabold text-corporate-blue dark:text-blue-500">200+</span>
                  <span className="text-gray-700 dark:text-gray-400 font-bold">Global Clients</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-corporate-blue to-blue-400 opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-full"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration and strategy"
                  className="w-full transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-blue-100/40 dark:bg-gray-800/50 border-y border-blue-200 dark:border-gray-800 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl shadow-blue-500/5 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                To empower businesses by connecting them with the right human capital, fostering growth, innovation, and long-term success through strategic recruitment.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl shadow-blue-500/5 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Core Values</h3>
              <ul className="space-y-4">
                {['Integrity in every interaction', 'Commitment to quality', 'Speed with accuracy', 'Long-term partnership focus'].map((value, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full mr-4 mt-1 group-hover:bg-corporate-blue transition-colors">
                      <CheckCircle className="h-5 w-5 text-corporate-blue dark:text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-300 text-lg font-bold">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-corporate-blue dark:bg-gray-900 relative overflow-hidden border-t border-blue-400/20">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white dark:text-blue-100/90 mb-8">Ready to transform your hiring?</h2>
          <p className="text-xl text-blue-100 dark:text-gray-400 mb-10 leading-relaxed">Partner with a team that understands your industry and your goals.</p>
          <NavLink
            to="/contact"
            className="inline-flex items-center bg-white text-corporate-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            Get in Touch <ArrowRight className="ml-2 h-6 w-6" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
