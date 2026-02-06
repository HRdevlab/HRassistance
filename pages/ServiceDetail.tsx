import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { SERVICES, PROCESS_STEPS } from '../constants';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { Service } from '../types';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const findServiceById = (id: string | undefined, list: Service[]): Service | undefined => {
    if (!id) return undefined;
    for (const service of list) {
      if (service.id === id) return service;
      if (service.children) {
        const found = findServiceById(id, service.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  const service = findServiceById(id, SERVICES);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find parent if it exists for breadcrumbs
  const parent = service.parentId ? findServiceById(service.parentId, SERVICES) : null;

  // If service has children, it's a category page
  if (service.children && service.children.length > 0) {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="bg-blue-100/30 dark:bg-gray-800/50 py-16 md:py-24 border-b border-blue-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-32">
            {service.children.map((child, index) => (
              <div key={child.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl mb-8 border border-blue-200 dark:border-transparent">
                    <child.icon className="h-10 w-10 text-corporate-blue dark:text-blue-400" />
                  </div>
                  <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">{child.title}</h2>
                  <p className="text-xl text-gray-700 dark:text-gray-400 mb-10 leading-relaxed font-bold">
                    {child.fullDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {child.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center p-3 bg-blue-100/40 dark:bg-gray-800/50 rounded-xl border border-blue-200 dark:border-gray-700">
                        <div className="w-2.5 h-2.5 bg-corporate-blue dark:bg-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                        <span className="text-gray-900 dark:text-gray-300 font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <NavLink
                    to={`/services/${child.id}`}
                    className="inline-flex items-center text-white bg-corporate-blue dark:bg-blue-600 px-8 py-4 rounded-xl hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20 font-bold"
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </div>
                {/* Visual Placeholder for sub-service */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] h-80 md:h-[400px] flex items-center justify-center overflow-hidden border border-blue-100 dark:border-gray-700 shadow-2xl">
                    {child.image ? (
                      <img
                        src={child.image}
                        alt={child.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="p-12 text-center">
                        <child.icon className="h-24 w-24 text-corporate-blue dark:text-blue-400 mx-auto mb-6 opacity-20" />
                        <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500">{child.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Standard Detail View for leaf services
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Main Content Side */}
          <div className="w-full lg:w-1/2 prose prose-lg dark:prose-invert max-w-none">
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl mb-8 border border-blue-200 dark:border-transparent">
              <service.icon className="h-10 w-10 text-corporate-blue dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-400 mb-10 leading-relaxed font-bold">
              {service.shortDescription}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10 font-medium font-bold">
              {service.fullDescription}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center p-4 bg-blue-50/50 dark:bg-gray-800/50 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5 text-corporate-blue dark:text-blue-400" />
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] h-80 md:h-[600px] flex items-center justify-center overflow-hidden border border-blue-100 dark:border-gray-700 shadow-2xl">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="p-12 text-center">
                  <service.icon className="h-24 w-24 text-corporate-blue dark:text-blue-400 mx-auto mb-6 opacity-20" />
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500">{service.title}</h3>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Section - Full width below the split section */}
        <div className="mt-24 max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
