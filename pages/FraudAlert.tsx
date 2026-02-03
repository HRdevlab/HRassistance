import React from 'react';
import { AlertTriangle, Mail, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

const FraudAlert: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                        <ShieldAlert className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Fraud Alert – Stay Safe While Using HrAssist</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Your safety is our highest priority.
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
                    <section className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
                        <p className="font-medium">
                            While we ensure a secure platform, it's crucial for users to stay alert against fraudulent activities. Here are some warning signs and tips to help you avoid scams.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <span className="font-bold text-red-600 dark:text-red-400">1</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Requests for Money</h2>
                                <p>
                                    Never pay to apply, get shortlisted, or attend an interview. HrAssist does not charge candidates for job access. Avoid anyone asking for deposits, fees, or advance payments in exchange for job offers.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <span className="font-bold text-red-600 dark:text-red-400">2</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fake Emails or Usernames</h2>
                                <p>
                                    Fraudsters may use misleading email addresses like Gmail or Yahoo. Official communication from HrAssist will always come from an <strong>@hrassitance.co.in</strong> email. Be cautious of unknown senders using our name.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <span className="font-bold text-red-600 dark:text-red-400">3</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Grammar and Spelling Mistakes</h2>
                                <p>
                                    Poorly written job offers with incorrect grammar or formatting are red flags. Always verify offers that sound suspicious or too good to be true.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <span className="font-bold text-red-600 dark:text-red-400">4</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unrealistic Promises or Pressure Tactics</h2>
                                <p>
                                    Phrases like “Job guaranteed in 24 hours” or “Pay now, confirm fast” are scam indicators. Trusted employers will always give you time and clarity.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <span className="font-bold text-red-600 dark:text-red-400">5</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unverified Interview Channels</h2>
                                <p>
                                    If you’re asked to interview via WhatsApp, Telegram, or unofficial links, be careful. Never share sensitive info like OTPs, bank details, or Aadhar numbers on such platforms.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30 mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Stay Safe</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                                <span>Apply only through HrAssist or trusted sources.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                                <span>Verify the job poster's email and contact details.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                                <span>Never share your personal or financial info without confirmation.</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                <span>Report suspicious activity to <a href="mailto:info@hrassitance.co.in" className="text-corporate-blue hover:underline">info@hrassitance.co.in</a>.</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-sm italic">
                            Stay updated and aware — your safety matters. We’re committed to building a secure and trustworthy job-seeking experience for the education community.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default FraudAlert;
