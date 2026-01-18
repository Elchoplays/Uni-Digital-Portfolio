
export interface KSBs {
  knowledge: string[];
  skills: string[];
  behaviours: string[];
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
}
