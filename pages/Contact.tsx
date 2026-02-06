import React from 'react';
import ContactSection from '../components/ContactSection';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-blue-100/30 dark:bg-gray-800/50 py-16 md:py-24 border-b border-blue-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a question or need recruitment assistance? We are here to help. Reach out to us using the form below or via our contact details.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactSection />

        {/* Map Section */}
        <div className="mt-20 bg-blue-100/20 dark:bg-gray-800 rounded-[2.5rem] h-[400px] overflow-hidden relative border border-blue-200 dark:border-gray-700 group shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2619!2d73.9167!3d18.5622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4136c54!2sTown%20Square%20Shopping%20Center!5e0!3m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
