import {
  Users,
  Briefcase,
  Search,
  Megaphone,
  Target,
  FileText,
  GraduationCap,
  Monitor,
  Globe,
  Truck,
  ShoppingCart,
  Factory,
  Headphones,
  BookOpen,
  CheckCircle,
  Clock,
  ShieldCheck,
  Zap,
  LayoutGrid,
  Hospital
} from 'lucide-react';
import { NavItem, Service, Stat, JobSeekerCard, Industry } from './types';

export const COMPANY_NAME = "HRassistance India Consultancy LLP";
export const CONTACT_EMAIL = "contact@hrassistance.com";
export const CONTACT_PHONE = "+91 98765 43210";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Job Seekers',
    path: '/job-seekers',
    children: [
      { label: 'Browse Jobs', path: '/job-seekers/corporate' },
      { label: 'Upskilling Courses', path: 'https://skilling.wadhwanifoundation.org/en/register?instituteCode=HRAS-91-854369', isExternal: true },
      { label: 'Resume Builder', path: 'https://builder.zety.com/resume/experience-level?lpcvflow=1', isExternal: true },
    ]
  },
  {
    label: 'Employers',
    path: '/employers',
    children: [
      { label: 'Our Services', path: '/services' },
      { label: 'Hire Talent', path: '/contact' },
    ]
  },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'permanent-recruitment',
    title: 'Permanent Recruitment',
    shortDescription: 'Finding long-term talent that fits your company culture and goals.',
    fullDescription: 'Our Permanent Recruitment service is designed to help you build a stable and high-performing team. We go beyond the resume to understand candidates’ motivations, soft skills, and long-term potential.',
    icon: Users,
    benefits: ['Extensive database access', 'Cultural fit assessment', 'Retention-focused hiring', 'Replacement guarantee']
  },
  {
    id: 'executive-search',
    title: 'Executive Search',
    shortDescription: 'Headhunting senior leadership for strategic roles.',
    fullDescription: 'We specialize in identifying and attracting top-tier leadership talent. Our discreet and thorough executive search process ensures you get visionaries who can drive your organization forward.',
    icon: Target,
    benefits: ['Confidential handling', 'C-Suite specialization', 'Market intelligence', 'Leadership assessment']
  },
  {
    id: 'turnkey-hiring',
    title: 'Turnkey Hiring',
    shortDescription: 'End-to-end mass hiring solutions for new setups or expansions.',
    fullDescription: 'Perfect for startups, new branches, or large-scale expansions. We manage the entire recruitment lifecycle from planning to onboarding for multiple positions simultaneously.',
    icon: LayoutGrid,
    benefits: ['Bulk hiring management', 'Cost-effective', 'Standardized process', 'Rapid deployment']
  },
  {
    id: 'advertised-search',
    title: 'Advertised Search',
    shortDescription: 'Managing campaigns to attract specific talent pools.',
    fullDescription: 'We design and manage targeted advertising campaigns to attract active job seekers for niche or high-volume roles, handling all responses and screening.',
    icon: Megaphone,
    benefits: ['Brand visibility', 'Targeted reach', 'Response management', 'Campaign analytics']
  }
];

export const STATS: Stat[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '4000+', label: 'Placements' },
  { value: '200+', label: 'Companies Served' },
  { value: '100%', label: 'Specialist Recruiters' },
  { value: '50K+', label: 'Verified Candidates' },
  { value: '6', label: 'Step Proven Process' },
];

export const JOB_SEEKER_CARDS: JobSeekerCard[] = [
  {
    title: 'Corporate Jobs',
    description: 'Explore opportunities with top MNCs and Indian firms.',
    icon: Briefcase,
    actionText: 'Browse Jobs',
    path: '/job-seekers/corporate'
  },
  {
    title: 'Education Jobs',
    description: 'Find teaching and admin roles in leading institutions.',
    icon: GraduationCap,
    actionText: 'Visit EdAssist',
    path: 'http://www.edassist.co.in',
    isExternal: true
  },
  {
    title: 'Build Your CV',
    description: 'Create a professional resume that gets noticed.',
    icon: FileText,
    actionText: 'Build Now',
    path: 'https://builder.zety.com/resume/experience-level?lpcvflow=1',
    isExternal: true
  },
  {
    title: 'Skill Courses',
    description: 'Upgrade your skills with industry-recognized certifications.',
    icon: BookOpen,
    actionText: 'View Courses',
    path: 'https://skilling.wadhwanifoundation.org/en/register?instituteCode=HRAS-91-854369',
    isExternal: true
  }
];

export const INDUSTRIES: Industry[] = [
  { name: 'IT & Tech', icon: Monitor },
  { name: 'Financial Services', icon: Globe }, // Globe as proxy for finance/global markets
  { name: 'Logistics', icon: Truck },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Service Sector', icon: Headphones },
  { name: 'Education', icon: GraduationCap },
  { name: 'Healthcare', icon: Hospital },
];

export const PROCESS_STEPS = [
  { number: 1, title: 'Requirement Analysis', desc: 'Understanding your needs' },
  { number: 2, title: 'Market Mapping', desc: 'Identifying talent pool' },
  { number: 3, title: 'Talent Sourcing', desc: 'Reaching candidates' },
  { number: 4, title: 'Screening', desc: 'Rigorous evaluation' },
  { number: 5, title: 'Shortlisting', desc: 'Presenting the best' },
  { number: 6, title: 'Onboarding', desc: 'Offer & support' },
];

export const PROBLEMS_SOLVED = [
  { icon: FileText, problem: 'Too many unqualified resumes', solution: 'We deliver only vetted candidates' },
  { icon: Clock, problem: 'Long hiring cycles', solution: 'Our structured process speeds up recruitment' },
  { icon: CheckCircle, problem: 'Skill mismatch', solution: 'Deep evaluation ensures accuracy and culture fit' },
  { icon: Zap, problem: 'Urgent roles', solution: 'Specialist recruiters close positions faster' },
  { icon: ShieldCheck, problem: 'Unpredictable hiring', solution: 'We bring clarity, consistency, and reliability' },
];
