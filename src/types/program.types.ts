export type ProgramIconType =
  | "child"
  | "book"
  | "academic"
  | "graduation"
  | "beaker"
  | "music";

export interface EducationLevelItem {
  id: string;
  title: string;
  description: string;
  icon: ProgramIconType;
  grades: string;
  highlights: string[];
}

export interface EducationLevelGroup {
  title: string;
  educationLevels: EducationLevelItem[];
}

export interface FlagshipProgram {
  id: string;
  title: string;
  description: string;
  icon: ProgramIconType;
  highlights: string[];
}

export interface FlagshipProgramGroup {
  title: string;
  flagshipPrograms: FlagshipProgram[];
}

export interface ProgramsData {
  sectionTitle: string;
  sectionSubtitle: string;
  educationLevel: EducationLevelGroup;
  flagshipProgram: FlagshipProgramGroup;
  ctaText: string;
}

export interface ProgramsSectionProps {
  data?: ProgramsData;
}

export interface ProgramCardProps {
  program: EducationLevelItem;
}

export interface FlagshipProgramCardProps {
  program: FlagshipProgram;
}
