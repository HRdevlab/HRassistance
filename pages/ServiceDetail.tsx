import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { SERVICES, PROCESS_STEPS } from '../constants';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Header */}
      <div className="bg-blue-100/30 dark:bg-gray-800/50 py-16 md:py-24 border-b border-blue-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 text-sm font-bold uppercase tracking-widest">
            <NavLink to="/services" className="text-corporate-blue dark:text-blue-400 hover:underline">Services</NavLink>
            <span className="text-gray-400 mx-4">/</span>
            <span className="text-gray-500 dark:text-gray-400">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">{service.title}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl leading-relaxed font-medium">{service.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10 font-medium">
                {service.fullDescription}
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-blue-50/50 dark:bg-gray-800/50 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg mr-4">
                      <CheckCircle className="h-5 w-5 text-corporate-blue dark:text-blue-400" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-bold">{benefit}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Our Recruitment Process</h2>
              <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100 dark:before:bg-gray-800">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.number} className="flex relative group">
                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-white dark:bg-gray-800 border-2 border-corporate-blue dark:border-blue-500 text-corporate-blue dark:text-blue-400 flex items-center justify-center font-black text-lg z-10 shadow-lg group-hover:bg-corporate-blue group-hover:text-white transition-all">
                      {step.number}
                    </div>
                    <div className="ml-8">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-blue-50/40 dark:bg-gray-800 p-8 md:p-10 rounded-[2.5rem] border border-blue-100 dark:border-gray-700 sticky top-24 shadow-xl shadow-blue-500/5">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in this service?</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm font-medium leading-relaxed">Fill out the form below and our specialized {service.title.toLowerCase()} team will contact you shortly.</p>
              </div>
              <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-blue-50 dark:border-gray-700">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
