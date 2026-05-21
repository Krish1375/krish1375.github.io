export interface Meta {
  name: string;
  title: string;
  tagline: string;
  taglineEmphasis: string;
  subline: string;
  available: boolean;
  email: string;
  github: string;
  linkedin: string;
  scholar?: string;
  cvUrl?: string;
}

export interface Counters {
  productionModels: number;
  productionModelsNote: string;
  publications: number;
  publicationsNote: string;
}

export interface JourneyStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProjectMetric {
  val: string;
  key: string;
}

export interface Project {
  tag: string;
  title: string;
  desc: string;
  metrics: ProjectMetric[];
  stack: string[];
  link: string;
}

export interface EditorialLine {
  num: string;
  statement: string;
  emphasis: string;
  tag: string;
}

export interface RadarSkill {
  axis: string;
  value: number;
}

export interface SkillBar {
  name: string;
  level: number;
}

export interface NavLink {
  label: string;
  href: string;
}
