import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div className="relative group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1 group-focus-within:text-corporate-blue dark:group-focus-within:text-blue-400 transition-colors">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg placeholder:text-gray-400" placeholder="John Trangely"
          />
        </div>
        <div className="relative group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-1 group-focus-within:text-corporate-blue dark:group-focus-within:text-blue-400 transition-colors">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg placeholder:text-gray-400"
            placeholder="hello@nurency.com"
          />
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors">Your Subject</label>
        <input
          type="text"
          id="subject"
          className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg placeholder:text-gray-400"
          placeholder="I want to hire you quickly"
        />
      </div>

      <div className="relative group">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg resize-none placeholder:text-gray-400"
          placeholder="Write here your message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-corporate-blue dark:bg-blue-600 text-white font-bold px-12 py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
