import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Multivendor E-commerce Platform',
    description:
      'A full-stack e-commerce application featuring product management, secure payments, and user authentication. Built for scalability and a smooth shopping experience.',
    images: ['/ecommerce/mv11.png'],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
    ],
    githubUrl:
      'https://github.com/muritador5050/Multi-vendor-E-commerce-Platform',
    liveUrl: 'https://multivendor.site',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
    name: 'Testwise CBT Platform',
    description:
      'An installable PWA for computer-based testing with real-time analytics, reporting, and monitoring. Built to support large-scale test sessions with smooth performance.',
    images: ['testwise/testwise001.png'],
    technologies: [
      'TypeScript',
      'React',
      'PostgreSQL',
      'Chakra UI',
      'Express',
      'Socket.io',
    ],
    githubUrl: 'https://github.com/muritador5050/testwise',
    liveUrl: 'https://testwise-cbt.netlify.app',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description:
      'A PWA (installable) real-time weather application with geolocation forecasts, interactive maps, and a clean UI optimized for mobile and desktop.',
    images: ['/weather/weather_01.png'],
    technologies: ['React', 'OpenWeather API', 'Chakra UI', 'Mapbox'],
    githubUrl: 'https://github.com/muritador5050/meteometric-dashboard',
    liveUrl: 'https://meteometric.netlify.app',
    featured: true,
    category: 'web',
  },
  {
    id: 4,
    name: 'Enterprise Suite',
    description:
      'A modern enterprise application built with Next.js and Firebase. It includes real-time communication, calendar scheduling, and a responsive management dashboard.',
    images: ['enterprise/ent001.png'],
    technologies: ['Next.js', 'Firebase', 'Chakra UI', 'TypeScript'],
    githubUrl: 'https://github.com/muritador5050/enterprise-suite',
    liveUrl: 'https://muritador-enterprise-suite.vercel.app',
    featured: false,
    category: 'web',
  },
  {
    id: 5,
    name: 'QR-Forge',
    description:
      'A PWA (installable) QR code generator with customizable styling, history management, and multiple export formats. Optimized for fast and offline usage.',
    images: ['/qr-forge/qr-forge001.png'],
    technologies: ['React', 'TypeScript', 'Chakra UI'],
    githubUrl: 'https://github.com/muritador5050/qr-forge',
    liveUrl: 'https://qr-forge-pro.netlify.app',
    featured: false,
    category: 'web',
  },
  {
    id: 6,
    name: 'Currency Converter & Calculator',
    description:
      'A simple and responsive currency converter and calculator with live exchange rate updates. Built with a clean UI and lightweight architecture.',
    images: ['/currency_calculator/cal001.png'],
    technologies: ['React', 'Chakra UI', 'Exchange Rate API'],
    githubUrl:
      'https://github.com/muritador5050/calculator_-_currency_converter',
    liveUrl: 'https://calculator-currency-converter.vercel.app',
    featured: false,
    category: 'web',
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (
  category: Project['category']
): Project[] => {
  return projects.filter((project) => project.category === category);
};
