import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export interface PhaseProps {
  phase: string;
  title: string;
  subtitle: string;
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  details: string[];
  tags?: string[];
}

export enum AppView {
  PLAN = 'PLAN',
  CURRICULUM = 'CURRICULUM'
}