export type ContactIconType =
  | "location"
  | "phone"
  | "email"
  | "whatsapp";

export type SocialIconType =
  | "facebook"
  | "instagram"
  | "youtube"
  | "linkedin";

export interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  icon: ContactIconType;
}

export interface ContactInfo {
  address: ContactInfoItem;
  phone: ContactInfoItem;
  email: ContactInfoItem;
  whatsapp: ContactInfoItem;
}

export interface OfficeHour {
  days: string;
  time: string;
}

export interface OfficeHours {
  title: string;
  hours: OfficeHour[];
}

export interface FormField {
  label: string;
  placeholder: string;
}

export interface FormFields {
  name: FormField;
  email: FormField;
  phone: FormField;
  subject: FormField;
  message: FormField;
}

export interface FormData {
  title: string;
  fields: FormFields;
  subjectOptions: string[];
  submitText: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: SocialIconType;
}

export interface SocialMedia {
  title: string;
  links: SocialLink[];
}

export interface ContactData {
  sectionTitle: string;
  sectionSubtitle: string;
  contactInfo: ContactInfo;
  officeHours: OfficeHours;
  form: FormData;
  socialMedia: SocialMedia;
  mapEmbedUrl: string;
}

export interface ContactSectionProps {
  data?: ContactData;
}
