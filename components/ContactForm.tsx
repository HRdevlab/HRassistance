import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      if (!response.ok) {
        throw new Error('Failed to send message to Netlify');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Submit error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-10 w-full"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div className="relative group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1 group-focus-within:text-corporate-blue dark:group-focus-within:text-blue-400 transition-colors">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg placeholder:text-gray-400" placeholder="John Doe"
          />
        </div>
        <div className="relative group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-1 group-focus-within:text-corporate-blue dark:group-focus-within:text-blue-400 transition-colors">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg placeholder:text-gray-400"
            placeholder="hello@example.com"
          />
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors">Your Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg placeholder:text-gray-400"
          placeholder="Inquiry regarding services"
        />
      </div>

      <div className="relative group">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl py-3 px-4 outline-none focus:border-corporate-blue transition-all text-gray-900 dark:text-white font-medium text-lg resize-none placeholder:text-gray-400"
          placeholder="Write here your message"
        ></textarea>
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
            } bg-corporate-blue dark:bg-blue-600 text-white font-bold px-12 py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center text-lg w-full md:w-auto`}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 font-medium animate-fade-in text-center md:text-left">
            Message sent successfully! We will get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 font-medium animate-fade-in text-center md:text-left">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
