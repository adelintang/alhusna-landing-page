export type ValueIconType = "shield" | "star" | "lightbulb" | "heart";

export interface VisionData {
  title: string;
  content: string;
}

export interface MissionData {
  title: string;
  items: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface ValueItem {
  id: string;
  icon: ValueIconType;
  title: string;
  description: string;
}

export interface AboutData {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  vision: VisionData;
  mission: MissionData;
  stats: StatItem[];
  valuesTitle: string;
  values: ValueItem[];
}

export interface AboutSectionProps {
  data?: AboutData;
}
