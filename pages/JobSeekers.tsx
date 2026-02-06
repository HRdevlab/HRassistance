import React from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { JOB_SEEKER_CARDS } from '../constants';
import { ArrowRight, Briefcase, GraduationCap, FileText, BookOpen } from 'lucide-react';

const JobSeekers: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-blue-100/30 dark:bg-gray-800/50 py-16 md:py-24 border-b border-blue-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">Career Opportunities</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are here to assist you in finding the right job, building your profile, and upskilling for the future.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {JOB_SEEKER_CARDS.map((card, idx) => (
            <NavLink
              key={idx}
              to={card.path}
              className="bg-blue-50/50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/40 w-fit rounded-xl group-hover:bg-corporate-blue transition-colors border border-blue-200 dark:border-transparent">
                <card.icon className="h-6 w-6 text-corporate-blue dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
              <p className="text-gray-800 dark:text-gray-300 text-sm mb-8 flex-grow leading-relaxed font-medium">{card.description}</p>
              <span className="text-corporate-blue dark:text-blue-400 font-black text-sm flex items-center">
                {card.actionText} <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </NavLink>
          ))}
        </div>

        <div className="space-y-32">
          {/* Education Jobs Section */}
          <div id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-100/30 dark:bg-gray-800/50 p-8 md:p-16 rounded-[2.5rem] border border-blue-200 dark:border-gray-800">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-corporate-blue dark:text-blue-400 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                EdAssist Initiative
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">Empowering the Next Generation of Educators</h2>
              <p className="text-xl text-gray-800 dark:text-gray-300 mb-10 leading-relaxed font-bold">
                Specialized opportunities for teachers, professors, and administrative staff in top schools and universities across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {['K-12 Roles', 'University Roles', 'Academic Support'].map((label, i) => (
                  <button key={i} className="flex-1 px-6 py-4 rounded-xl font-bold border-2 border-blue-100 dark:border-gray-700 text-gray-800 dark:text-gray-400 hover:border-corporate-blue dark:hover:border-blue-500 hover:text-corporate-blue dark:hover:text-blue-400 transition-all text-sm">
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="https://edassist.co.in/jobsseekers/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-corporate-blue dark:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-corporate-dark dark:hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/10"
              >
                Job Seeker's Login <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative group overflow-hidden rounded-[2.5rem] aspect-square shadow-2xl border border-blue-100 dark:border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                alt="Educator at work"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-corporate-blue/20 to-transparent"></div>
            </div>
          </div>

          {/* Skills & Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div id="cv-builder" className="group bg-gray-900 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-b-8 border-b-blue-600">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10">
                <div className="bg-blue-600/20 p-4 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                  <FileText className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Master Your Resume</h3>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed font-bold">
                  70% of resumes are rejected by ATS. Create a professional, ATS-friendly resume in minutes with our world-class partner tools.
                </p>
                <NavLink
                  to="/job-seekers/cv-builder"
                  className="inline-flex items-center text-blue-400 font-black text-lg hover:underline underline-offset-8"
                >
                  Start Building <ArrowRight className="ml-3 h-6 w-6" />
                </NavLink>
              </div>
            </div>

            <div id="courses" className="group bg-gray-900 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-b-8 border-b-blue-600">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10">
                <div className="bg-blue-600/20 p-4 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Certified Skill Courses</h3>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed font-bold">
                  Stand out from the crowd. Access curated courses in IT, Management, and Soft Skills to boost your employability.
                </p>
                <a
                  href="https://skilling.wadhwanifoundation.org/en/register?instituteCode=HRAS-91-854369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 font-black text-lg hover:underline underline-offset-8"
                >
                  Browse Catalog <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;
