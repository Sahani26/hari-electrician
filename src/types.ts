export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'emergency'
  | 'residential'
  | 'commercial'
  | 'wiring'
  | 'fan'
  | 'mcb'
  | 'inverter'
  | 'contact'
  | 'blog'
  | 'area-piplod'
  | 'area-vesu'
  | 'area-citylight'
  | 'area-pal'
  | 'area-althan'
  | 'area-adajan';

export interface Service {
  id: PageId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  pricing: string;
  timeframe: string;
}

export interface ServiceArea {
  id: PageId;
  name: string;
  pincode?: string;
  tagline: string;
  introText: string;
  popularServices: string[];
  localHighlight: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  serviceUsed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}
