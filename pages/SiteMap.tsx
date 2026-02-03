import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, ChevronRight, FileText, Briefcase, Users, Phone } from 'lucide-react';
import { NAV_ITEMS, SERVICES } from '../constants';

const SiteMap: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <Map className="h-8 w-8 text-corporate-blue dark:text-blue-400" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Site Map</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Overview of the pages on our website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Main Navigation */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                            <Users className="h-5 w-5 mr-2 text-corporate-blue dark:text-blue-400" />
                            Main Pages
                        </h2>
                        <ul className="space-y-3 pl-2">
                            <li>
                                <NavLink to="/" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Job Seekers */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                            <Briefcase className="h-5 w-5 mr-2 text-corporate-blue dark:text-blue-400" />
                            For Job Seekers
                        </h2>
                        <ul className="space-y-3 pl-2">
                            <li>
                                <NavLink to="/job-seekers" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Job Seekers Overview
                                </NavLink>
                            </li>
                            {/* Manually adding children based on constants */}
                            <li>
                                <NavLink to="/job-seekers/corporate" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors ml-4">
                                    <ChevronRight className="h-3 w-3 mr-2 text-gray-400" /> Browse Jobs
                                </NavLink>
                            </li>
                            <li>
                                <a href="https://skilling.wadhwanifoundation.org/en/register?instituteCode=HRAS-91-854369" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors ml-4">
                                    <ChevronRight className="h-3 w-3 mr-2 text-gray-400" /> Upskilling Courses (External)
                                </a>
                            </li>
                            <li>
                                <a href="https://zety.com/resume-builder?ref=21193&click=497&reqid=4525880&utm_source=Trace-Advertising&utm_medium=affiliate&utm_campaign=trace-zty-resume-builder-subs-21193" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors ml-4">
                                    <ChevronRight className="h-3 w-3 mr-2 text-gray-400" /> Resume Builder (External)
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                            <Briefcase className="h-5 w-5 mr-2 text-corporate-blue dark:text-blue-400" />
                            Our Services
                        </h2>
                        <ul className="space-y-3 pl-2">
                            <li>
                                <NavLink to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Services Overview
                                </NavLink>
                            </li>
                            {SERVICES.map(service => (
                                <li key={service.id}>
                                    <NavLink to={`/services/${service.id}`} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors ml-4">
                                        <ChevronRight className="h-3 w-3 mr-2 text-gray-400" /> {service.title}
                                    </NavLink>
                                    {service.children && (
                                        <ul className="ml-8 mt-2 space-y-2">
                                            {service.children.map(child => (
                                                <li key={child.id}>
                                                    <NavLink to={`/services/${child.id}`} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors text-sm">
                                                        <ChevronRight className="h-2 w-2 mr-2 text-gray-400" /> {child.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li>
                                <NavLink to="/contact" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors ml-4">
                                    <ChevronRight className="h-3 w-3 mr-2 text-gray-400" /> Hire Talent
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                            <FileText className="h-5 w-5 mr-2 text-corporate-blue dark:text-blue-400" />
                            Legal & Support
                        </h2>
                        <ul className="space-y-3 pl-2">
                            <li>
                                <NavLink to="/terms" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Terms & Conditions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/privacy" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Privacy Policy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/trust-safety" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> Trust & Safety (Fraud Alert)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faqs" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400" /> FAQs / Help Desk
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                            <Phone className="h-5 w-5 mr-2 text-corporate-blue dark:text-blue-400" />
                            Get in Touch
                        </h2>
                        <ul className="space-y-3 pl-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span>info@hrassitance.co.in</span>
                            </li>
                            <li>
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <a href="https://hrassistance.zohorecruit.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className="hover:text-corporate-blue dark:hover:text-blue-400 transition-colors">
                                    Join Our Team (Careers)
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SiteMap;
