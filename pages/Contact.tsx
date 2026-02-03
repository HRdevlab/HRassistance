import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-blue-50/40 dark:bg-gray-800 p-8 md:p-10 rounded-3xl border border-blue-100 dark:border-gray-700 shadow-xl shadow-blue-500/5 h-full flex flex-col transition-all hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 border-b border-blue-200 dark:border-gray-700 pb-4">Contact Details</h2>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start group">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-5 group-hover:bg-corporate-blue transition-all duration-300">
                    <MapPin className="h-6 w-6 text-corporate-blue dark:text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-lg">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      205 A, Town Square Shopping Center<br />
                      New Airport Rd, Viman Nagar<br />
                      Pune, Maharashtra 411014
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-5 group-hover:bg-corporate-blue transition-all duration-300">
                    <Phone className="h-6 w-6 text-corporate-blue dark:text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-lg">Phone Number</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-5 group-hover:bg-corporate-blue transition-all duration-300">
                    <Mail className="h-6 w-6 text-corporate-blue dark:text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-lg">Email Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">info@hrassitance.co.in</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-blue-100/50 dark:bg-blue-900/30 rounded-xl mr-5 group-hover:bg-corporate-blue transition-all duration-300 border border-blue-200/50 dark:border-transparent">
                    <Clock className="h-6 w-6 text-corporate-blue dark:text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-lg">Business Hours</h3>
                    <div className="text-gray-700 dark:text-gray-400 space-y-1">
                      <p className="flex justify-between gap-4"><span>Mon - Fri:</span> <span className="font-bold">9:00 AM - 6:00 PM</span></p>
                      <p className="flex justify-between gap-4"><span>Sat:</span> <span className="font-bold">10:00 AM - 2:00 PM</span></p>
                      <p className="flex justify-between gap-4"><span>Sun:</span> <span className="font-bold text-corporate-blue dark:text-blue-400 text">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-blue-50/20 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-500/10 dark:shadow-none border border-blue-100 dark:border-gray-700 h-full transition-all hover:shadow-blue-500/5">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Send us a Message</h2>
                <div className="h-1.5 w-20 bg-corporate-blue dark:bg-blue-500 rounded-full"></div>
              </div>
              <div className="dark:text-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Global Map Section */}
        <div className="bg-blue-100/20 dark:bg-gray-800 rounded-[2.5rem] h-[300px] overflow-hidden relative border border-blue-200 dark:border-gray-700 group shadow-2xl">
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
    </div >
  );
};

export default Contact;
