import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description:
      'A full-stack e-commerce application with payment integration, product management, and user authentication.',
    images: [
      'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/project1-main.jpg',
      'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/project1-detail.jpg',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://demo-ecommerce.com',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
    name: 'Task Management App',
    description:
      'A productivity app for managing tasks with drag-and-drop functionality and real-time updates.',
    images: [
      'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/project2-main.jpg',
    ],
    technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
    category: 'web',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description:
      'Real-time weather application with location-based forecasts and interactive maps.',
    images: [
      'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/project3-main.jpg',
    ],
    technologies: ['React', 'OpenWeather API', 'Chakra UI', 'Mapbox'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
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
