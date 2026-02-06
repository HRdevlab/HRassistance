import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import {
  SERVICES,
  STATS,
  PROCESS_STEPS,
  INDUSTRIES,
  JOB_SEEKER_CARDS,
  PROBLEMS_SOLVED
} from '../constants';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CountUp: React.FC<{ end: string, duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Handle non-numeric characters like +, %, K
    const numericPart = end.replace(/[^0-9]/g, '');
    const suffix = end.replace(/[0-9]/g, '');
    const endValue = parseInt(numericPart, 10);

    if (isNaN(endValue)) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  const suffix = end.replace(/[0-9]/g, '');
  return <span ref={countRef}>{count}{suffix}</span>;
};

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
            <p className="text-l text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              HRassistance partners with businesses to solve one of their most critical challenges—hiring the right talent. With over 15 years of experience, we bring structured processes, deep evaluation, and a strong talent network to deliver dependable hiring outcomes across industries.
            </p>
            <NavLink
              to="/about"
              className="inline-flex text-xl items-center text-corporate-blue dark:text-blue-400 font-bold hover:text-corporate-dark dark:hover:text-blue-300 transition-colors"
            >
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-blue-50/50 dark:bg-gray-800/50 p-8 rounded-2xl border border-blue-100 dark:border-gray-700 text-center hover:shadow-xl hover:border-corporate-blue/30 transition-all duration-300">
                <div className="text-2xl md:text-5xl font-bold text-corporate-blue dark:text-blue-400 mb-2">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-gray-700 dark:text-gray-400 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">Employers</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">Tailored recruitment solutions for every business need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group block bg-white dark:bg-gray-800 p-10 md:p-12 min-h-[480px] rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-corporate-blue dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="flex-grow">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-8 group-hover:bg-corporate-blue dark:group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-7 w-7 text-corporate-blue dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-corporate-blue dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Sub-links for Employers */}
                  {service.children && service.children.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {service.children.map((child) => (
                        <li key={child.id}>
                          <NavLink
                            to={`/services/${child.id}`}
                            className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-corporate-blue dark:hover:text-blue-400 flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                            {child.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <NavLink
                  to={`/services/${service.id}`}
                  className="text-corporate-blue dark:text-blue-400 text-base font-bold flex items-center group-hover:translate-x-2 transition-transform duration-300 mt-auto"
                >
                  Explore {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <NavLink to="/services" className="inline-flex items-center text-xl text-corporate-blue dark:text-blue-400 font-bold hover:text-corporate-dark dark:hover:text-blue-300 transition-colors">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>


      {/* Industries */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">Specialized recruitment across diverse sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-8 bg-blue-50/30 dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-gray-700 hover:border-corporate-blue dark:hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <ind.icon className="h-10 w-10 text-gray-500 group-hover:text-corporate-blue dark:group-hover:text-blue-400 transition-colors mb-4" />
                <span className="text-sm font-bold text-gray-800 dark:text-gray-300 text-center px-4 group-hover:text-corporate-blue dark:group-hover:text-blue-400 transition-colors">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">For Job Seekers</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              Looking for your next career move? We provide the tools and opportunities you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOB_SEEKER_CARDS.map((card, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-b-4 border-b-corporate-blue/20 hover:border-b-corporate-blue">
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 w-fit rounded-xl">
                  <card.icon className="h-8 w-8 text-corporate-blue dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">{card.description}</p>
                {card.isExternal ? (
                  <a
                    href={card.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center px-6 py-3 border-2 border-corporate-blue dark:border-blue-500 text-corporate-blue dark:text-blue-400 rounded-lg hover:bg-corporate-blue dark:hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-bold"
                  >
                    {card.actionText}
                  </a>
                ) : (
                  <NavLink
                    to={card.path}
                    className="w-full inline-flex justify-center items-center px-6 py-3 border-2 border-corporate-blue dark:border-blue-500 text-corporate-blue dark:text-blue-400 rounded-lg hover:bg-corporate-blue dark:hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-bold"
                  >
                    {card.actionText}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">Share your requirement and our team will connect within 24 hours.</p>
          </div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
