import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Multivendor E-commerce Platform',
    description:
      'A full-stack e-commerce application featuring product management, secure payments, and user authentication. Built for scalability and a smooth shopping experience.',
    images: [
      '/ecommerce/mv01.png',
      '/ecommerce/mv02.png',
      '/ecommerce/mv03.png',
      '/ecommerce/mv04.png',
      '/ecommerce/mv05.png',
      '/ecommerce/mv06.png',
      '/ecommerce/mv07.png',
      '/ecommerce/mv08.png',
      '/ecommerce/mv09.png',
      '/ecommerce/mv001.png',
      '/ecommerce/mv002.png',
      '/ecommerce/mv003.png',
      '/ecommerce/mv004.png',
      '/ecommerce/mv005.png',
      '/ecommerce/mv006.png',
      '/ecommerce/mv007.png',
      '/ecommerce/mv008.png',
      '/ecommerce/mv009.png',
      '/ecommerce/mv1.png',
      '/ecommerce/mv11.png',
      '/ecommerce/mv12.png',
    ],
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
    images: [
      'testwise/testwise-1.png',
      'testwise/testwise-2.png',
      'testwise/testwise-3.png',
      'testwise/testwise-4.png',
      'testwise/testwise-5.png',
      'testwise/testwise-6.png',
      'testwise/testwise-7.png',
      'testwise/testwise-8.png',
      'testwise/testwise-9.png',
      'testwise/testwise-10.png',
      'testwise/testwise-11.png',
      'testwise/testwise-12.png',
      'testwise/testwise-13.png',
      'testwise/testwise-14.png',
      'testwise/testwise-15.png',
      'testwise/testwise-16.png',
    ],
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
    images: [
      '/weather/meteometric-1.png',
      '/weather/meteometric-2.png',
      '/weather/meteometric-3.png',
    ],
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
    images: [
      'enterprise/ent001.png',
      'enterprise/ent002.png',
      'enterprise/ent003.png',
      'enterprise/ent004.png',
      'enterprise/ent005.png',
      'enterprise/ent006.png',
      'enterprise/ent007.png',
      'enterprise/ent008.png',
      'enterprise/ent009.png',
      'enterprise/ent010.png',
      'enterprise/ent011.png',
      'enterprise/ent012.png',
    ],
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
    images: ['/qr-forge/qr-forge-1.png', '/qr-forge/qr-forge-2.png'],
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
    images: ['/currency-cal/cal001.png', '/currency-cal/cal002.png'],
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
