export type StepIconType = "form" | "document" | "payment" | "check";

export interface RegistrationStep {
  id: number;
  title: string;
  description: string;
  icon: StepIconType;
}

export interface Document {
  id: number;
  title: string;
  description: string;
  fileName: string;
  fileUrl: string;
}

export interface AdmissionsData {
  sectionTitle: string;
  sectionSubtitle: string;
  stepsTitle: string;
  steps: RegistrationStep[];
  documentsTitle: string;
  documentsSubtitle: string;
  documents: Document[];
}

export interface AdmissionsSectionProps {
  data?: AdmissionsData;
}
