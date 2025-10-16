export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category?: 'web' | 'mobile' | 'fullstack' | 'other';
}
