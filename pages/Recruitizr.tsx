import React from 'react';
import {
  ArrowRight, BarChart3, Brain, CheckCircle, Database,
  GitBranch, Layers, Shield, Users
} from 'lucide-react';

const capabilities = [
  {
    num: '01 / 04',
    title: 'All-in-one operating system',
    desc: 'CRM, ATS, and HRMS unified for how recruitment firms actually work — no more juggling Excel trackers, scattered email threads, and four logins.',
    bullets: [
      'Client CRM with contacts, mandates, and revenue tracking',
      'Applicant tracking from requisition to closure',
      'Resume database with smart search and tagging',
      'HRMS for attendance, leaves, onboarding, and policies',
    ],
  },
  {
    num: '02 / 04',
    title: 'RecruiterIQ AI',
    desc: 'AI built for the recruiter workflow, not bolted on. Saves hours every day and makes every decision sharper.',
    bullets: [
      'Resume screening with fit % and skill-gap analysis',
      'JD generator: 3 bullets in, polished JD out',
      'Role-specific interview question generator with evaluation criteria',
      'Candidate insight briefs with talking points, in seconds',
    ],
  },
  {
    num: '03 / 04',
    title: 'Real-time dashboards',
    desc: 'Live pipelines and adaptive views so leaders see what\'s actually happening — and recruiters know what to do next.',
    bullets: [
      'Role-based dashboards (recruiter, team lead, founder)',
      'Pipeline funnel and conversion metrics by mandate',
      'Predictive demand and recruiter bandwidth forecasting',
    ],
  },
  {
    num: '04 / 04',
    title: 'Compliance & clean data',
    desc: 'GDPR-grade controls and AI-powered data hygiene built into every flow.',
    bullets: [
      'GDPR consent, data export, and deletion workflows',
      'Cookie consent management',
      'Automated dedup and stale-record cleanup',
    ],
  },
];

const outcomes = [
  {
    value: '5+ → 1',
    title: 'Tool consolidation',
    desc: 'Excel, email, job boards, CRM, WhatsApp threads — replaced by one login.',
  },
  {
    value: '~70%',
    title: 'Less screening time',
    desc: 'AI scoring and ranking removes the resume pile so recruiters focus on conversations.',
  },
  {
    value: '1-click',
    title: 'Candidate insight briefs',
    desc: 'Paste any resume — Recruitizr generates an executive summary, skill extraction, seniority assessment, and ready-made interview talking points. Even junior recruiters walk into interviews prepared like veterans.',
  },
  {
    value: 'Real-time',
    title: 'Visibility for leaders',
    desc: 'Live dashboards by recruiter, team, and mandate. No more end-of-week status decks.',
  },
];

const Recruitizr: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
              Product · HRAssistance
            </span>
            <h1 className="font-bold text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-4 tracking-tight">
              Recruitizr
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              The operating system for recruitment firms.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
              Recruitizr bundles ATS, CRM, and HRMS into one platform — with RecruiterIQ AI built
              in. Run your entire recruitment business in one place: pipelines, clients, candidates,
              compliance, and team performance.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://recruitizr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-corporate-blue text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Request a demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://recruitizr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-7 py-3 rounded-lg font-semibold hover:border-corporate-blue hover:text-corporate-blue dark:hover:text-blue-400 transition-colors"
              >
                Visit Recruitizr
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/recruitizr-logo.jpeg"
              alt="Recruitizr"
              className="max-w-xs md:max-w-sm rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
              Capabilities
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-white leading-tight tracking-tight">
              Replace 5+ tools with a single platform.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.num} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500 transition-all">
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{cap.num}</span>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mt-2 mb-3">{cap.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{cap.desc}</p>
                <ul className="space-y-3">
                  {cap.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
              Outcomes
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-white leading-tight tracking-tight mb-4">
              Built to replace the spreadsheet-and-WhatsApp stack.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Recruitment firms running on Recruitizr consolidate their tooling, recover time lost to admin, and gain visibility they never had before.
            </p>
          </div>

          <div className="space-y-8">
            {outcomes.map((o) => (
              <div key={o.value} className="border-l-4 border-corporate-blue dark:border-blue-400 pl-5">
                <span className="font-extrabold text-2xl text-corporate-blue dark:text-blue-400 block mb-1">{o.value}</span>
                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{o.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white leading-tight tracking-tight mb-2">
              See Recruitizr working on your data.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Request a personalized walkthrough — no commitment, no sales theatre.
            </p>
          </div>
          <a
            href="https://recruitizr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-corporate-blue text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            Request a demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Recruitizr;
