import React from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-blue-100/30 dark:bg-gray-800/50 py-16 md:py-24 border-b border-blue-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive recruitment solutions designed to meet the dynamic needs of modern businesses.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl mb-8 shadow-inner border border-blue-200 dark:border-transparent">
                  <service.icon className="h-10 w-10 text-corporate-blue dark:text-blue-400" />
                </div>
                <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">{service.title}</h2>
                <p className="text-xl text-gray-700 dark:text-gray-400 mb-10 leading-relaxed font-bold">
                  {service.fullDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center p-3 bg-blue-100/40 dark:bg-gray-800/50 rounded-xl border border-blue-200 dark:border-gray-700">
                      <div className="w-2.5 h-2.5 bg-corporate-blue dark:bg-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                      <span className="text-gray-900 dark:text-gray-300 font-bold">{benefit}</span>
                    </div>
                  ))}
                </div>
                <NavLink
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-white bg-corporate-blue dark:bg-blue-600 px-8 py-4 rounded-xl hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20 font-bold"
                >
                  View Details <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </div>
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-500`}></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] h-80 md:h-[450px] flex items-center justify-center overflow-hidden border border-blue-100 dark:border-gray-700 shadow-2xl">
                  <img
                    src={
                      service.id === 'permanent-recruitment'
                        ? "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                        : service.id === 'training'
                          ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] font-black text-white opacity-80 block mb-2">{service.title} Expert Solutions</span>
                    <div className="h-1 w-12 bg-corporate-blue mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
