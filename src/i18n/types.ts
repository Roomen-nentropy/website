export type Lang = 'bg' | 'en';

export type ConsultationContext = 'default' | 'eudr' | 'ppwr';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface ContactPerson {
  name: string;
  role: string;
  email: string;
  phone?: string;
  focus?: 'rumen' | 'general';
}
