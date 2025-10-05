export interface Venture {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  status: 'active' | 'acquired' | 'closed';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: 'blog' | 'talk' | 'media';
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

