import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS_DATA: { category: string; items: FAQItem[] }[] = [
    {
        category: 'For Job Seekers',
        items: [
            {
                question: 'Do I need to pay to register or apply for jobs?',
                answer: 'No, HRassistance does not charge job seekers for registration, applying for jobs, or getting interviewed. Our services are completely free for candidates.',
            },
            {
                question: 'How do I apply for a job?',
                answer: 'You can browse our "Job Seekers" section, select "Browse Jobs" to see open positions, or use our specialized portals for corporate and education jobs. Click "Apply" on any listing to submit your details.',
            },
            {
                question: 'Can you help me improve my CV?',
                answer: 'Yes! We offer a Resume Builder tool and professional guidance to help you craft a resume that stands out to recruiters.',
            },
            {
                question: 'What kind of jobs are available?',
                answer: 'We cater to various industries including IT/Tech, Education, Healthcare, Retail, Manufacturing, and more. Opportunities range from entry-level to executive roles.',
            }
        ]
    },
    {
        category: 'Our Services',
        items: [
            {
                question: 'How can I post a job?',
                answer: 'You can contact us directly via the "Hire Talent" page or reach out to our team at info@hrassitance.co.in to discuss hiring requirements.',
            },
            {
                question: 'What services do you offer?',
                answer: 'We offer Permanent Recruitment (Database Selection, Executive Search, Advertised Search, Turnkey Solutions), Training (Soft Skills, Leadership Training, People Development), and Professional Resume Building.',
            },
            {
                question: 'How long does it take to close a position?',
                answer: 'Timeline varies by role complexity, but our structured 6-step process typically allows us to present qualified candidates within a few days of understanding your requirements.',
            },
            {
                question: 'Do you offer a replacement guarantee?',
                answer: 'Yes, for our Permanent Recruitment service, we provide a replacement guarantee if a candidate leaves within a specified period (terms apply).',
            }
        ]
    },
    {
        category: 'General',
        items: [
            {
                question: 'Where is HRassistance located?',
                answer: 'Our registered office is at 205 A, Town Square Shopping Center, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014. We serve clients across India.',
            },
            {
                question: 'How do I contact support?',
                answer: 'You can reach our help desk via email at info@hrassitance.co.in or call us at +91 98765 43210 during business hours.',
            }
        ]
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (categoryIndex: number, itemIndex: number) => {
        const key = `${categoryIndex}-${itemIndex}`;
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <HelpCircle className="h-8 w-8 text-corporate-blue dark:text-blue-400" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Find answers to common questions about our services and platform.
                    </p>
                </div>

                <div className="space-y-12">
                    {FAQS_DATA.map((category, catIdx) => (
                        <div key={catIdx}>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.items.map((item, itemIdx) => {
                                    const isOpen = openIndex === `${catIdx}-${itemIdx}`;
                                    return (
                                        <div
                                            key={itemIdx}
                                            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200 hover:border-corporate-blue dark:hover:border-blue-500"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(catIdx, itemIdx)}
                                                className="w-full flex justify-between items-center p-5 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors focus:outline-none"
                                            >
                                                <span className="text-lg font-medium text-gray-900 dark:text-gray-200 pr-4">
                                                    {item.question}
                                                </span>
                                                {isOpen ? (
                                                    <ChevronUp className="h-5 w-5 text-corporate-blue dark:text-blue-400 flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                                                )}
                                            </button>
                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                    } overflow-hidden`}
                                            >
                                                <div className="p-5 pt-0 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-transparent">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-blue-50 dark:bg-gray-800 rounded-xl p-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Still have questions? We're here to help.
                    </p>
                    <a
                        href="mailto:info@hrassitance.co.in"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-corporate-blue hover:bg-corporate-dark transition-colors shadow-sm"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
