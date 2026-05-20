export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
  projects: Project[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
