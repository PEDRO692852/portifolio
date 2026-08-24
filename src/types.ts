export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  url: string;
  featured?: boolean;
  theme: {
    accentColor: string;
    badgeBg: string;
    badgeText: string;
    gradient: string;
  };
  tags: string[];
  metrics?: string;
  year: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Concept {
  number: string;
  title: string;
  description: string;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  authorName: string;
  positioning: string;
  subtext: string;
  heroSubtitle: string;
  whatsappNumber: string; // E.g. "5561981767473" (Only numbers for wa.me URL)
  whatsappDisplay: string;
  email: string;
  location: string;
  availability: string;
  instagramUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}
