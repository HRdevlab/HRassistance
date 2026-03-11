import React from 'react';
import { FileText, Mail, MapPin, Scale } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <Scale className="h-8 w-8 text-corporate-blue dark:text-blue-400" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Website Terms of Use</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Effective Date: 1st March 2026 | Last Updated: 1st March 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
                    <section>
                        <p className="mb-4">
                            Welcome to HRassistance Consultancy LLP ("HRassistance"). By visiting or using our website, you agree to the following Terms of Use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Purpose of the Website and Acceptance of Terms</h2>
                        <p>
                            This website is designed to provide information about HRassistance’s recruitment consultancy services. By engaging with HRassistance, you agree to comply with and be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not agree, you may not access or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Eligibility</h2>
                        <p>
                            Visitors must be at least 18 years old and legally capable of entering into agreements under Indian law to use this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Acceptable Use</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Post or transmit unlawful, harmful, or offensive content.</li>
                            <li>Attempt to disrupt, hack, or misuse the website.</li>
                            <li>Use the website for spam, harassment, or fraudulent activity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Information Accuracy</h2>
                        <p>
                            While HRassistance strives to keep content accurate and up to date, we do not guarantee completeness or reliability. Visitors should verify information before relying on it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, and branding, is the property of HRassistance unless otherwise stated. You may not copy, reproduce, or distribute content without prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to external sites. HRassistance is not responsible for the content, policies, or practices of these third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Limitation of Liability</h2>
                        <p>
                            HRassistance shall not be liable for any damages arising from your use of this website, including reliance on information provided here.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Acceptable Use Policy</h2>
                        <p>You may not:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Use HRassistance services for fraudulent, misleading, or unlawful purposes.</li>
                            <li>Engage in harassment, spam, or exploitation of candidates.</li>
                            <li>Attempt to breach security, reverse-engineer, or misuse the Platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Content Ownership</h2>
                        <p>
                            All materials shared by clients (job descriptions, company information, etc.) remain their intellectual property. By providing such content, clients grant HRassistance a non-exclusive, royalty-free license to use it solely for recruitment purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Modifications</h2>
                        <p>
                            We may update these Terms of Use at any time. Continued use of the website constitutes acceptance of the revised terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law and Jurisdiction</h2>
                        <p>
                            These Terms are governed by Indian law. Any disputes will be resolved through arbitration in Pune, Maharashtra.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
                        <p className="mb-4">For questions regarding these Terms of Use, please contact:</p>
                        <div className="space-y-2">
                            <p className="font-bold">HRassistance Consultancy LLP</p>
                            <div className="flex items-center mt-2">
                                <Mail className="h-4 w-4 mr-2" />
                                <a href="mailto:info@hrassistance.co.in" className="text-corporate-blue hover:underline">info@hrassistance.co.in</a>
                            </div>
                            <div className="flex items-start mt-2">
                                <MapPin className="h-4 w-4 mr-2 mt-1" />
                                <span>205 A, Town Square Shopping Center, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
