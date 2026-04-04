
export interface KSBs {
  knowledge: string[];
  skills: string[];
  behaviours: string[];
}

export interface ProjectSection {
  id: string;
  title: string;
  subtitle?: string;
  isDefault?: boolean;
  color?: string;
  description: string;
  processDescription: string;
  images: string[];
  videos?: string[];
  ksbs: KSBs;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  processDescription: string;
  images: string[];
  videos?: string[];
  headerImage?: string;
  ksbs: KSBs;
  sections?: ProjectSection[];
}
