export interface NavItem {
  id: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  featured?: 'flagship' | 'research' | 'standard';
  badge?: string;
  description: string;
  storyNote?: string;
  technologies: string[];
  capabilities: string[];
  achievement?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  type: 'Research' | 'Internship';
  organization: string;
  roleOrVenue: string;
  locationOrContext: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  accent: 'blue' | 'violet' | 'neutral';
}

export const PROFILE = {
  name: 'Santosh Gadale',
  initials: 'SG',
  identity: 'Engineer. Builder. Problem Solver.',
  positioning: 'AI/ML Engineer | Software Developer | Data Analytics Enthusiast',
  heroHeadingLine1: 'Building Intelligent Systems.',
  heroHeadingLine2: 'Creating Real-World Impact.',
  heroIntro:
    "I'm Santosh Gadale, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy building intelligent applications, exploring emerging technologies, and transforming ideas into practical solutions.",
  location: 'Bengaluru, India',
  education: 'B.Tech (Hons.) in Computer Science — RV University (2023–2027)',
  availability: 'Available for internships & opportunities',
  emailPlaceholder: 'santoshgadale005@gmail.com',
  isEmailPlaceholder: false,
  // Portrait image stored at `public/profile.jpg`.
  profileImagePath: '/profile.jpg',
  // Replace `public/Santosh_Gadale_Resume.pdf` with your final resume PDF anytime.
  resumePath: '/Santosh_Gadale_Resume.pdf',
  links: {
    github: 'https://github.com/Santoshgadale005',
    linkedin: 'https://www.linkedin.com/in/santoshgadale/',
    portfolio: 'https://santoshgadale.github.io/portfolio/',
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Software Development, and Data Analytics.",
    'I enjoy exploring how technology can solve practical problems. My experience includes developing AI-powered applications, working with computer vision systems, building analytical solutions, and conducting research on machine learning optimization.',
    'Beyond technology, I have a strong interest in sports, leadership, event coordination, and continuous learning.',
  ],
  highlights: [
    {
      label: 'Education',
      title: 'Computer Science Engineering',
      detail: 'RV University, Bengaluru · B.Tech (Hons.) AI & ML (2023–2027)',
    },
    {
      label: 'Research',
      title: 'IEEE TENSYMP 2026 Selection',
      detail: 'Transformer model compression research selected for Penang, Malaysia',
    },
    {
      label: 'Engineering',
      title: 'AI & Machine Learning Projects',
      detail: 'End-to-end computer vision, NLP optimization, and analytics platforms',
    },
    {
      label: 'Athletics',
      title: 'State-Ranked Badminton Player',
      detail: 'Karnataka State Ranking competitor & sports tournament organizer',
    },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smashiq',
    number: '01',
    name: 'SmashIQ',
    tagline: 'AI-Powered Badminton Video Analytics Platform',
    category: 'Flagship · Computer Vision & Sports Tech',
    featured: 'flagship',
    badge: 'Flagship Project',
    description:
      'An AI-powered sports analytics platform that analyzes badminton footage to track players, understand movement patterns, analyze posture, and generate meaningful performance insights.',
    storyNote:
      'Built at the intersection of computer vision and competitive athletics—combining full-stack systems engineering with domain insight as a state-ranked Karnataka badminton player.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'OpenCV',
      'YOLOv8',
      'ByteTrack',
      'MediaPipe',
      'Random Forest',
      'NumPy',
      'Pandas',
    ],
    capabilities: [
      'AI-powered player tracking across rallies',
      'Skeletal pose estimation & posture analysis',
      'Automated court mapping & spatial projection',
      'Player movement trajectory & pattern analysis',
      'Footwork and performance telemetry metrics',
      'Interactive full-stack analytics dashboard',
    ],
    liveDemoUrl: 'https://agent-6b04888be5125731e0b35c3d--smashqi.netlify.app/',
    githubUrl: 'https://github.com/Santoshgadale005/SmashQI',
  },
  {
    id: 'transformer-compression',
    number: '04',
    name: 'Transformer Model Compression Research',
    tagline:
      'Model Compression of Pre-Trained Transformers: A Comparative Study of Sequential Techniques on Efficiency and Accuracy Trade-Offs',
    category: 'Research · Deep Learning Optimization',
    featured: 'research',
    badge: 'IEEE TENSYMP 2026',
    description:
      'Research focused on optimizing pretrained transformer models using pruning, quantization, and knowledge distillation while systematically evaluating model size, inference latency, and accuracy trade-offs.',
    achievement:
      'Selected for presentation at IEEE Region 10 Symposium (TENSYMP 2026), Penang, Malaysia.',
    technologies: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'BERT',
      'NumPy',
      'Pandas',
      'Matplotlib',
    ],
    capabilities: [
      'Structured & unstructured pruning evaluation',
      'Post-training quantization efficiency profiling',
      'Knowledge distillation pipeline comparison',
      'Sequential compression order benchmarking',
      'Model size vs. inference latency trade-off analysis',
      'Accuracy retention evaluation across configurations',
    ],
  },
  {
    id: 'fitmotion-ai',
    number: '02',
    name: 'FitMotion AI',
    tagline: 'AI-Based Personalized Fitness Recommendation Platform',
    category: 'Applied ML · Personalization',
    featured: 'standard',
    description:
      'An intelligent fitness recommendation application that generates personalized workout recommendations based on user preferences, fitness goals, and activity requirements.',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'SQLite', 'Plotly'],
    capabilities: [
      'Personalized exercise recommendations',
      'Structured weekly workout planner',
      'AI-powered fitness assistance',
      'Interactive activity analytics with Plotly',
      'Multi-sport database (~90 exercises)',
    ],
    liveDemoUrl: 'https://fitmotion-ai.streamlit.app/',
    githubUrl: 'https://github.com/Santoshgadale005/FitMotion-AI',
  },
  {
    id: 'fitbite',
    number: '03',
    name: 'FitBite',
    tagline: 'AI-Powered Nutrition and Fitness Application',
    category: 'Product · Health & Wellness',
    featured: 'standard',
    description:
      'A fitness-focused application combining nutrition and fitness-related functionality to help users manage their daily health and wellness journey in one unified workflow.',
    technologies: ['Web Application', 'Nutrition Planning', 'Fitness Tracking', 'Wellness UI'],
    capabilities: [
      'Integrated nutrition & fitness tracking',
      'User-centric daily wellness management',
      'Streamlined health planning workflow',
      'Deployed live web experience',
    ],
    liveDemoUrl: 'https://fitbite-85ee.onrender.com/',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Core specialization across vision, optimization, and intelligent systems',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Reinforcement Learning',
      'Generative AI',
    ],
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Systems, backend, analytical, and web engineering foundations',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    subtitle: 'Production APIs, neural networks, vision pipelines, and UI frameworks',
    skills: [
      'PyTorch',
      'OpenCV',
      'Scikit-learn',
      'FastAPI',
      'React',
      'Flask',
      'Pandas',
      'NumPy',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational storage and structured data persistence',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Experimentation, containerization, version control, and deployment',
    skills: ['Git', 'GitHub', 'Docker', 'Google Colab', 'Jupyter Notebook', 'Streamlit'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'ieee-tensymp',
    type: 'Research',
    organization: 'IEEE Region 10 Symposium (TENSYMP 2026)',
    roleOrVenue: 'Selected Research Presentation — Transformer Model Compression',
    locationOrContext: 'Penang, Malaysia',
    summary:
      'Conducted comparative empirical research on compressing pretrained transformer architectures through sequential optimization strategies, studying how compression order impacts model footprint, latency, and predictive accuracy.',
    highlights: [
      'Investigated sequential combinations of pruning, quantization, and knowledge distillation on pretrained BERT models.',
      'Evaluated trade-offs across model size reduction, inference latency, and accuracy retention.',
      'Selected for conference presentation at IEEE Region 10 Symposium (TENSYMP 2026) in Penang, Malaysia.',
    ],
    tags: [
      'Transformer Optimization',
      'Model Compression',
      'Pruning',
      'Quantization',
      'Knowledge Distillation',
      'PyTorch',
    ],
  },
  {
    id: 'zaalima',
    type: 'Internship',
    organization: 'Zaalima',
    roleOrVenue: 'Data Analytics Internship',
    locationOrContext: 'Applied Analytics & Predictive Modeling',
    summary:
      'Worked on end-to-end data analytics initiatives spanning predictive modeling, anomaly detection, forecasting, and stakeholder-ready analytical dashboards.',
    highlights: [
      'Customer churn prediction and customer lifetime value (CLV) analysis.',
      'Financial fraud detection and anomaly analytics on transactional datasets.',
      'Retail demand forecasting to support operational planning.',
      'Data processing pipelines and interactive analytical dashboards.',
    ],
    tags: [
      'Churn Prediction',
      'CLV Analysis',
      'Fraud Detection',
      'Demand Forecasting',
      'Data Processing',
      'Analytical Dashboards',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ieee-selection',
    category: 'Academic & Research',
    title: 'IEEE TENSYMP 2026 Research Selection',
    subtitle: 'IEEE Region 10 Symposium · Penang, Malaysia',
    description:
      'Research on sequential compression techniques for pretrained transformer models selected for international IEEE conference presentation.',
    accent: 'violet',
  },
  {
    id: 'state-badminton',
    category: 'Competitive Athletics',
    title: 'State-Ranked Badminton Player',
    subtitle: 'Karnataka State Ranking Circuit',
    description:
      'Competed at the state ranking level in Karnataka—building discipline, high-pressure decision-making, and the domain insight behind SmashIQ.',
    accent: 'blue',
  },
  {
    id: 'yonex-sunrise',
    category: 'Tournament Podium',
    title: '3rd Place, Mixed Doubles',
    subtitle: 'Yonex Sunrise State Ranking Tournament (U-15 & U-17) · Sindhanur, 2019',
    description:
      'Earned a podium finish in mixed doubles at the Yonex Sunrise State Ranking Badminton Tournament in Sindhanur.',
    accent: 'blue',
  },
  {
    id: 'tournament-org',
    category: 'Leadership & Operations',
    title: 'Badminton Tournament Organization',
    subtitle: 'Sports Event Coordination & Logistics',
    description:
      'Experienced in organizing badminton tournaments and coordinating multi-match sports events, schedules, and participant operations.',
    accent: 'neutral',
  },
  {
    id: 'offroading',
    category: 'Community & Motorsport',
    title: 'Off-Roading Event Hosting & Marshalling',
    subtitle: 'Track Coordination, Safety & Event Operations',
    description:
      'Active experience hosting and marshalling off-roading events—managing trail coordination, safety oversight, and team execution in dynamic environments.',
    accent: 'neutral',
  },
];
