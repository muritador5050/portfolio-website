import {
  FaCode,
  FaServer,
  // FaMobile,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiChakraui,
  SiRedux,
  SiReactquery,
  SiJest,
  SiAmazon,
  SiVercel,
  SiRedis,
  SiGraphql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { type IconType } from 'react-icons';

interface Skill {
  name: string;
  category: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  // Frontend
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: SiTypescript,
    color: '#3178C6',
  },
  { name: 'React.js', category: 'frontend', icon: SiReact, color: '#61DAFB' },
  {
    name: 'Next.js',
    category: 'frontend',
    icon: SiNextdotjs,
    color: '#FFFFFF',
  },
  { name: 'HTML5', category: 'frontend', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'frontend', icon: SiCss3, color: '#1572B6' },
  {
    name: 'Chakra UI',
    category: 'frontend',
    icon: SiChakraui,
    color: '#319795',
  },
  { name: 'Redux', category: 'frontend', icon: SiRedux, color: '#764ABC' },
  {
    name: 'React Query',
    category: 'frontend',
    icon: SiReactquery,
    color: '#FF4154',
  },

  // Backend
  { name: 'Node.js', category: 'backend', icon: SiNodedotjs, color: '#339933' },
  {
    name: 'Express.js',
    category: 'backend',
    icon: SiExpress,
    color: '#FFFFFF',
  },
  { name: 'Python', category: 'backend', icon: SiPython, color: '#3776AB' },
  { name: 'Django', category: 'backend', icon: SiDjango, color: '#092E20' },
  { name: 'Java', category: 'backend', icon: FaJava, color: '#007396' },
  {
    name: 'Spring Boot',
    category: 'backend',
    icon: SiSpring,
    color: '#6DB33F',
  },
  { name: 'GraphQL', category: 'backend', icon: SiGraphql, color: '#E10098' },

  // Database
  { name: 'MongoDB', category: 'database', icon: SiMongodb, color: '#47A248' },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: SiPostgresql,
    color: '#4169E1',
  },
  { name: 'Redis', category: 'database', icon: SiRedis, color: '#DC382D' },

  // DevOps & Tools
  { name: 'Docker', category: 'devops', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', category: 'devops', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', category: 'devops', icon: SiGithub, color: '#FFFFFF' },
  {
    name: 'AWS',
    category: 'devops',
    icon: SiAmazon,
    color: '#FF9900',
  },
  { name: 'Vercel', category: 'devops', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Jest', category: 'devops', icon: SiJest, color: '#C21325' },

  // Mobile
  // {
  //   name: 'React Native',
  //   category: 'mobile',
  //   icon: SiReact,
  //   color: '#61DAFB',
  // },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    color: 'green.300',
    description:
      'Building responsive and interactive user interfaces with modern frameworks',
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    color: 'green.400',
    description: 'Creating robust server-side applications and RESTful APIs',
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobile,
  //   color: 'green.200',
  //   description: 'Developing cross-platform mobile applications',
  // },
  {
    title: 'Database Management',
    icon: FaDatabase,
    color: 'green.500',
    description: 'Designing and managing efficient database solutions',
  },
  {
    title: 'DevOps & Cloud',
    icon: FaCloud,
    color: 'blue.400',
    description:
      'Managing deployments, CI/CD pipelines, and cloud infrastructure',
  },
];

export { skills, skillCategories, type Skill, type SkillCategory };
