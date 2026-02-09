import React from 'react';
import ContactForm from './ContactForm';
import { Mail, MapPin } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

const ContactSection: React.FC = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row transition-all duration-300 shadow-2xl shadow-blue-500/10">

            {/* Left Side: Contact Information (Themed Card) */}
            <div className="w-full lg:w-[45%] p-4 md:p-6 lg:p-8">
                <div className="h-full bg-blue-600 dark:bg-corporate-blue rounded-[2.5rem] p-6 md:p-10 lg:p-12 text-white relative flex flex-col justify-between overflow-hidden shadow-xl">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact Information</h2>
                        <p className="text-blue-50 text-sm md:text-base mb-8 md:mb-10 font-medium opacity-90 leading-relaxed">
                            We help organizations hire skilled talent with clarity and speed. Reach out to build your future team.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <a href={`mailto:${CONTACT_EMAIL}`} className="flex flex-col sm:flex-row sm:items-center group cursor-pointer">
                                <div className="hidden sm:block p-3 bg-white/10 rounded-xl mr-5 group-hover:bg-white/20 transition-all border border-white/5">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div className="sm:hidden text-blue-200 text-sm font-semibold mb-1">Email:</div>
                                <div className="text-base sm:text-lg font-bold group-hover:translate-x-1 transition-transform">{CONTACT_EMAIL}</div>
                            </a>

                            <div className="flex flex-col sm:flex-row sm:items-start group">
                                <div className="hidden sm:block p-3 bg-white/10 rounded-xl mr-5 group-hover:bg-white/20 transition-all border border-white/5 mt-1">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div className="sm:hidden text-blue-200 text-sm font-semibold mb-1">Location:</div>
                                <div className="text-base sm:text-lg font-bold leading-snug">
                                    205 A, Town Square Shopping Center, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Graphic Elements */}
                    <div className="absolute -bottom-10 -right-10 w-32 md:w-48 h-32 md:h-48 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-12 right-12 w-16 md:w-24 h-16 md:h-24 bg-blue-400/20 rounded-full z-0 animate-pulse"></div>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-[55%] p-6 md:p-14 lg:p-16  flex flex-col justify-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactSection;
