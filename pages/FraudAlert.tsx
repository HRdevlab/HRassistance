import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle } from 'lucide-react';

const FraudAlert: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                        <ShieldAlert className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Fraud Alert – Protect Yourself Online</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Your safety is our top priority.
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
                    <section className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
                        <p className="font-medium">
                            While HRassistance maintains a secure platform, it’s important for visitors and candidates to stay vigilant against fraudulent activities. Please review the following warning signs and safety tips:
                        </p>
                    </section>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xl">
                                    🚫
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Requests for Money</h2>
                                <p>
                                    HRassistance never charges candidates for applying, shortlisting, or attending interviews.
                                    Avoid anyone asking for deposits, fees, or advance payments in exchange for job offers.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xl">
                                    📧
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fake Emails or Usernames</h2>
                                <p>
                                    Fraudsters may use free email services (e.g., Gmail, Yahoo) to impersonate HRassistance.
                                    Official communication will only come from an <strong>@hrassistance.co.in</strong> email address.
                                    Be cautious of unknown senders claiming to represent us.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xl">
                                    ✍️
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Poor Grammar or Spelling</h2>
                                <p>
                                    Scam job offers often contain errors in grammar, spelling, or formatting.
                                    Treat offers that sound suspicious or “too good to be true” with caution.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xl">
                                    ⚠️
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unrealistic Promises or Pressure Tactics</h2>
                                <p>
                                    Phrases like “Guaranteed job in 24 hours” or “Pay now to confirm” are clear red flags.
                                    Genuine employers provide clarity and reasonable timelines.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xl">
                                    📱
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unverified Interview Channels</h2>
                                <p>
                                    Be cautious if asked to interview via WhatsApp, Telegram, or unofficial links.
                                    Never share sensitive information such as OTPs, bank details, or Aadhaar numbers on these platforms.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30 mt-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl">✅</span>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Stay Safe</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                                <span>Apply only through HRassistance or trusted sources.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                                <span>Verify the sender’s email and contact details before responding.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                                <span>Never share personal or financial information without proper confirmation.</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                <span>Report suspicious activity immediately to <a href="mailto:info@hrassistance.co.in" className="text-corporate-blue hover:underline">info@hrassistance.co.in</a>.</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <span className="text-2xl mt-1">🔒</span>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                Stay alert, stay safe. HRassistance is committed to building a secure and trustworthy experience for candidates and visitors.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default FraudAlert;
