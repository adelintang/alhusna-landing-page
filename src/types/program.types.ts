export type ProgramIconType =
  | "child"
  | "book"
  | "academic"
  | "graduation"
  | "beaker"
  | "music";

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: ProgramIconType;
  grades: string;
  highlights: string[];
}

export interface ProgramsData {
  sectionTitle: string;
  sectionSubtitle: string;
  programs: Program[];
  ctaText: string;
}

export interface ProgramsSectionProps {
  data?: ProgramsData;
}

export interface ProgramCardProps {
  program: Program;
}
