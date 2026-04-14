
export interface KSBs {
  knowledge: string[];
  skills: string[];
  behaviours: string[];
}

export interface ExternalLink {
  id: string;
  title: string;
  url: string;
  description?: string;
}

export interface OrganisationStructureContent {
  title: string;
  description?: string;
  image: string;
  alt: string;
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
  links?: ExternalLink[];
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
  links?: ExternalLink[];
  stareReportLinks?: ExternalLink[];
  organisationStructure?: OrganisationStructureContent;
  headerImage?: string;
  ksbs: KSBs;
  sections?: ProjectSection[];
}
