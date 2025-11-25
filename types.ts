import { LucideIcon } from 'lucide-react';

export enum DivisionType {
  MANAGEMENT = 'Management',
  RESEARCH = 'Research',
  ADMIN = 'Admin',
  COMPREHENSIVE = 'Comprehensive',
  SAFETY = 'Safety'
}

export interface Department {
  id: string;
  name: string;
  englishName: string;
  description: string;
  icon: LucideIcon;
  type: DivisionType;
  color: string; // Tailwind class for border/text color
}

export interface NavLink {
  name: string;
  path: string;
}

export interface RecruitmentStep {
  step: number;
  title: string;
  desc: string;
}