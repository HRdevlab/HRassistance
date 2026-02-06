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
  Hospital,
  UserCheck,
  ArrowRightLeft
} from 'lucide-react';
import { NavItem, Service, Stat, JobSeekerCard, Industry } from './types';

export const COMPANY_NAME = "HRassistance Consultancy LLP";
export const CONTACT_EMAIL = "info@hrassitance.co.in";


export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Employers',
    path: '/services',
    children: [
      {
        label: 'Permanent Recruitment',
        path: '/services/permanent-recruitment',
        children: [
          { label: 'Database Selection', path: '/services/database-selection' },
          { label: 'ExecutiveSearch', path: '/services/executive-search' },
          { label: 'Turnkey Solutions', path: '/services/turnkey-solutions' },
        ]
      },
      {
        label: 'Training',
        path: '/services/training',
        children: [
          { label: 'Soft Skills', path: '/services/soft-skills' },
          { label: 'Leadership Training', path: '/services/leadership-training' },
          { label: 'People Development', path: '/services/people-development' },
        ]
      },
      { label: 'Placement Services', path: '/services/out-placement-services' },
    ]
  },
  {
    label: 'Job Seekers',
    path: '/job-seekers',
    children: [
      { label: 'Browse Jobs', path: 'https://hrassistance.zohorecruit.com/jobs/Careers' },
      { label: 'Upskilling Courses', path: 'https://skilling.wadhwanifoundation.org/en/register?instituteCode=HRAS-91-854369', isExternal: true },
      { label: 'Resume Building', path: '/job-seekers/cv-builder' },
    ]
  },

  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'permanent-recruitment',
    title: 'Permanent Recruitment',
    shortDescription: 'Finding long-term talent that fits your company culture and goals.',
    fullDescription: 'Our Permanent Recruitment service is designed to help you build a stable and high-performing team. We go beyond the resume to understand candidates\' motivations, soft skills, and long-term potential.',
    icon: Users,
    benefits: ['Database Selection', 'Executive Search', 'Turnkey Solutions'],
    children: [
      {
        id: 'database-selection',
        parentId: 'permanent-recruitment',
        title: 'Database Selection',
        shortDescription: 'Leveraging our extensive database to find the perfect match.',
        fullDescription: 'We use our internal database and specialized sourcing tools to identify candidates who may not be visible on traditional job boards, ensuring access to top-tier talent.',
        icon: Search,
        benefits: ['Fast turnaround', 'Pre-vetted candidates', 'Large reach', 'Cost-effective'],
        image: '/assets/Database-selection.jpg'
      },
      {
        id: 'executive-search',
        parentId: 'permanent-recruitment',
        title: 'Executive Search',
        shortDescription: 'Discreet search for leadership roles.',
        fullDescription: 'Our headhunting approach is tailored for C-suite and senior management positions, focusing on candidates who are often passive but highly qualified for strategic roles.',
        icon: Target,
        benefits: ['Strict confidentiality', 'Global reach', 'Leadership assessment', 'Market mapping'],
        image: '/assets/Executive-search.jpg'
      },
      {
        id: 'turnkey-solutions',
        parentId: 'permanent-recruitment',
        title: 'Turnkey Solutions',
        shortDescription: 'Comprehensive mass hiring and project-based recruitment.',
        fullDescription: 'Perfect for new setup expansions or specialized projects, we provide an end-to-end mass hiring solution that covers everything from planning to final onboarding.',
        icon: Briefcase,
        benefits: ['Scalable process', 'Standardized assessment', 'Rapid onboarding', 'Single point of contact'],
        image: '/assets/Turnkey-solutions.jpg'
      }
    ]
  },
  {
    id: 'training',
    title: 'Training',
    shortDescription: 'Empowering your workforce with essential skills and leadership capabilities.',
    fullDescription: 'We provide comprehensive training solutions to enhance employee performance and organizational growth through specialized programs.',
    icon: GraduationCap,
    benefits: ['Soft Skills', 'Leadership Training', 'People Development'],
    children: [
      {
        id: 'soft-skills',
        parentId: 'training',
        title: 'Soft Skills',
        shortDescription: 'Enhancing communication and teamwork.',
        fullDescription: 'Our soft skills programs focus on emotional intelligence, effective communication, and interpersonal relationships to create a more cohesive work environment.',
        icon: Users,
        benefits: ['Better collaboration', 'Conflict resolution', 'Customer focus', 'Personal effectiveness'],
        image: '/assets/Soft-skills.jpg'
      },
      {
        id: 'leadership-training',
        parentId: 'training',
        title: 'Leadership Training',
        shortDescription: 'Developing next-gen leaders.',
        fullDescription: 'We help identify and groom potential leaders within your organization, providing them with the tools and mindset needed for management and strategic oversight.',
        icon: Target,
        benefits: ['Strategic thinking', 'Management skills', 'Team building', 'Succession planning'],
        image: '/assets/Leadership-training.jpg'
      },
      {
        id: 'people-development',
        parentId: 'training',
        title: 'People Development',
        shortDescription: 'Holistic growth and talent retention.',
        fullDescription: 'Customized development pathways that align employee aspirations with organizational goals, ensuring long-term engagement and productivity.',
        icon: BookOpen,
        benefits: ['Talent retention', 'Career pathing', 'Skills mapping', 'Employee engagement'],
        image: '/assets/People-development.jpg'
      }
    ]
  },
  {
    id: 'out-placement-services',
    title: 'Placement Services',
    shortDescription: 'Supporting employees through career transitions with dignity and care.',
    fullDescription: 'Our Placement Services help organizations manage workforce transitions professionally while supporting departing employees in finding new opportunities.',
    icon: ArrowRightLeft,
    benefits: [
      'Career Counseling & Assessment',
      'Resume & LinkedIn Optimization',
      'Interview Preparation & Coaching',
      'Job Search Strategy & Placement'
    ],
    image: '/assets/Out-placement-services.jpg'
  },
];

export const STATS: Stat[] = [
  { value: '2000+', label: 'Roles Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Enterprise Focus' },
];

export const JOB_SEEKER_CARDS: JobSeekerCard[] = [
  {
    title: 'Corporate Jobs',
    description: 'Explore opportunities with top MNCs and Indian firms.',
    icon: Briefcase,
    actionText: 'Browse Jobs',
    path: 'https://hrassistance.zohorecruit.com/jobs/Careers',
    isExternal: true
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
    path: '/job-seekers/cv-builder',
    isExternal: false
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

