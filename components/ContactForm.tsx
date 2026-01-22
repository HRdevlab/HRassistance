import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Requirement</label>
        <textarea
          id="requirement"
          rows={4}
          className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
          placeholder="Tell us about your hiring needs..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-corporate-blue dark:bg-blue-600 text-white font-bold py-4 rounded shadow-lg hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all duration-300 mt-2 hover:-translate-y-0.5 active:translate-y-0"
      >
        Request a Callback
      </button>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
        Our team typically responds within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;
