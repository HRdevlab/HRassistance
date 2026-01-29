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
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Effective Date: 1st June 2025 | Last Updated: 30th May 2025
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
                    <section>
                        <p className="mb-4">
                            Welcome to EdAssist (the "Platform"), a job board service operated by HRassistance India Consultancy LLP, based in Pune, India. By accessing or using EdAssist, you agree to be bound by the following Terms and Conditions. Please read them carefully.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using EdAssist, you agree to comply with and be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not agree, you may not access or use the Platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Services Provided</h2>
                        <p>EdAssist offers a platform to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Job Seekers:</strong> Search and apply for jobs in the education sector and training programs.</li>
                            <li><strong>Employers/Recruiters:</strong> Post job listings, search candidate profiles, and manage recruitment activities.</li>
                        </ul>
                        <p className="mt-2">EdAssist is not responsible for the quality, safety, or legality of jobs or resumes posted.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Eligibility</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Be at least 18 years old and legally capable of entering into a binding contract under Indian law to use this Platform.</li>
                            <li>Provide accurate and complete information when registering.</li>
                            <li>Use the platform lawfully and in accordance with these terms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. User Obligations</h2>
                        <p>You agree NOT to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Post false or misleading information.</li>
                            <li>Upload offensive, harmful, or illegal content.</li>
                            <li>Impersonate any person or entity.</li>
                            <li>Violate any applicable laws or third-party rights.</li>
                        </ul>
                        <p className="mt-4 font-semibold">Additionally:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Users are responsible for maintaining the confidentiality of their login credentials.</li>
                            <li>Any unauthorized use of your account should be reported immediately.</li>
                            <li>We reserve the right to suspend or terminate accounts if users violate these terms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Job Listings & Applications</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Job postings must be accurate and comply with local employment regulations.</li>
                            <li>EdAssist does not guarantee job placement and is not responsible for employer practices.</li>
                            <li>Users applying for jobs must ensure their information is truthful and up to date.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Acceptable Use Policy</h2>
                        <p>You may not:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Post misleading, fraudulent, or offensive content.</li>
                            <li>Use the platform for spam, harassment, or illegal activities.</li>
                            <li>Attempt to breach security, reverse-engineer, or exploit the system.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Account Security</h2>
                        <p>
                            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access or security breach.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Content Ownership</h2>
                        <p>
                            All content you post remains your intellectual property. By posting on EdAssist, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content solely for the purpose of operating and promoting the Platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Payment and Refunds</h2>
                        <p>
                            Employers may be charged for premium listings or additional services. All payments are final and non-refundable unless stated otherwise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Third-Party Links</h2>
                        <p>
                            The Platform may contain links to third-party websites. EdAssist does not endorse or take responsibility for the content or policies of these external sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Limitation of Liability</h2>
                        <p>
                            EdAssist shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of or inability to use the Platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access to the Platform at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Governing Law and Jurisdiction</h2>
                        <p>
                            These terms are governed by Indian laws, and any disputes will be resolved through arbitration in Pune, Maharashtra.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Modifications</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Continued use of the Platform constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact Us</h2>
                        <p className="mb-4">If you have any questions about these Terms, you may contact us at:</p>
                        <div className="space-y-2">
                            <p className="font-bold">EdAssist</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">(HRassistance India Consultancy LLP)</p>
                            <div className="flex items-center mt-2">
                                <Mail className="h-4 w-4 mr-2" />
                                <a href="mailto:info@edassist.co.in" className="text-corporate-blue hover:underline">info@edassist.co.in</a>
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

export default TermsAndConditions;
