import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <Lock className="h-8 w-8 text-corporate-blue dark:text-blue-400" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Effective Date: 1st June 2025 | Last Updated: 30th May 2025
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                        <p>
                            Welcome to HrAssist ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting the personal information you provide while using our job board platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">a. From Job Seekers:</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name, email address, phone number</li>
                            <li>Educational qualifications and work experience</li>
                            <li>Resume/CV, professional certifications</li>
                            <li>Job preferences and application history</li>
                            <li>Any other information that might be relevant to support their candidature</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">b. From Employers:</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Organization name and contact details</li>
                            <li>Job postings and related descriptions</li>
                            <li>Recruiter names, email addresses, and phone numbers</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">c. Automatically Collected:</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>IP address and browser information</li>
                            <li>Device information and usage data</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Provide and improve our recruitment services</li>
                            <li>Match job seekers with relevant job opportunities</li>
                            <li>Allow employers to review applications</li>
                            <li>Send job alerts, notifications, and service updates</li>
                            <li>Ensure platform security and prevent fraud</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Sharing of Information</h2>
                        <p>We do not sell your personal data. We may share data with:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Employers who post jobs on HrAssist (for applicants only)</li>
                            <li>Third-party service providers assisting with platform operations (e.g., hosting, analytics, payment gateways)</li>
                            <li>Legal authorities, if required by law or to protect our legal rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Retention</h2>
                        <p>
                            We retain your personal information as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Rights</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access or correct your personal data</li>
                            <li>Delete your profile or data upon request</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                        <p className="mt-2">To exercise these rights, email us at <a href="mailto:info@hrassist.co.in" className="text-corporate-blue hover:underline">info@hrassist.co.in</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Cookies</h2>
                        <p>
                            We use cookies to enhance user experience and analyze platform usage. You may disable cookies in your browser settings, though some features may be affected.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect user data from unauthorized access, loss, or misuse. However, no transmission method is 100% secure, and users are encouraged to take precautions such as strong passwords.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Children’s Privacy</h2>
                        <p>
                            HrAssist is not intended for individuals under the age of 18. We do not knowingly collect data from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Third-Party Links</h2>
                        <p>
                            Our platform may contain links to third-party websites. We are not responsible for their privacy practices and encourage users to read external policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Updates to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of the platform constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
                        <p className="mb-4">For any questions or concerns about this Privacy Policy:</p>
                        <div className="space-y-2">
                            <p className="font-bold">HrAssist</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">(HRassistance India Consultancy LLP)</p>
                            <div className="flex items-center mt-2">
                                <Mail className="h-4 w-4 mr-2" />
                                <a href="mailto:info@hrassist.co.in" className="text-corporate-blue hover:underline">info@hrassist.co.in</a>
                            </div>
                            <div className="flex items-start mt-2">
                                <MapPin className="h-4 w-4 mr-2 mt-1" />
                                <span>205A, Town Square, Viman Nagar, Pune-411014, India</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
