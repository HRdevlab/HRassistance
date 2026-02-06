import React from 'react';
import { FileText, CheckCircle, ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';

const CVBuilder: React.FC = () => {
    const benefits = [
        {
            icon: Target,
            title: "ATS-Friendly Templates",
            description: "Our templates are designed to pass through Applicant Tracking Systems, ensuring your resume actually gets seen by human recruiters."
        },
        {
            icon: Zap,
            title: "Expert Tips & Guidance",
            description: "Get real-time feedback and expert suggestions on your wording to make your achievements stand out."
        },
        {
            icon: ShieldCheck,
            title: "Industry Specific",
            description: "Customized sections for different industries, whether you're in Tech, Healthcare, or Education."
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-blue-100/30 dark:bg-gray-800/50 py-20 lg:py-32 border-b border-blue-200 dark:border-gray-800">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-corporate-blue dark:text-blue-400 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            Profile Excellence
                        </div>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                            Build a Resume That <span className="text-corporate-blue dark:text-blue-500">Gets You Hired</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            70% of resumes are rejected by automated systems. Don't be one of them. Create a professional, ATS-optimized CV in minutes.
                        </p>
                        <a
                            href="https://zety.com/resume-builder?ref=21193&click=497&reqid=4525880&utm_source=Trace-Advertising&utm_medium=affiliate&utm_campaign=trace-zty-resume-builder-subs-21193"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-corporate-blue dark:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
                        >
                            Build Your CV Now <ArrowRight className="ml-2 h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-8">Why Your Resume Matters</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Your resume is your first impression. In today's competitive job market, recruiters spend an average of only 6 seconds scanning a CV before deciding whether to keep it or discard it.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Professionally pre-formatted templates",
                                    "Recruiter-approved phrases and keywords",
                                    "Easy-to-use drag and drop interface",
                                    "Export to PDF and other common formats"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full mr-4">
                                            <CheckCircle className="h-5 w-5 text-corporate-blue dark:text-blue-400" />
                                        </div>
                                        <span className="text-gray-800 dark:text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-corporate-blue to-blue-400 opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-[2.5rem]"></div>
                            <div className="relative bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] border border-blue-100 dark:border-gray-700 p-4 shadow-2xl overflow-hidden">
                                <img
                                    src="/assets/cv-builder.jpeg"
                                    alt="Professional Resume Layout"
                                    className="w-full h-auto rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-blue-50/50 dark:bg-gray-800/30 border-y border-blue-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Features to Boost Your Career</h2>
                        <p className="text-gray-600 dark:text-gray-400">Everything you need to create a winning document.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-blue-500/5 hover:-translate-y-1 transition-all">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 w-fit rounded-2xl mb-8">
                                    <benefit.icon className="h-8 w-8 text-corporate-blue dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 font-medium">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-corporate-blue dark:bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to Land Your Dream Job?</h2>
                            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                                Join thousands of professionals who have successfully upgraded their careers using our resume building tools.
                            </p>
                            <a
                                href="https://zety.com/resume-builder?ref=21193&click=497&reqid=4525880&utm_source=Trace-Advertising&utm_medium=affiliate&utm_campaign=trace-zty-resume-builder-subs-21193"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-white text-corporate-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                            >
                                Start Building <ArrowRight className="ml-2 h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CVBuilder;
