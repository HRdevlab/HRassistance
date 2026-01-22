import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface JobSeekerCard {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  path: string;
  isExternal?: boolean;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
}
