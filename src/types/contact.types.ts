export type ContactIconType =
  | "location"
  | "email"
  | "whatsapp";

export type SocialIconType = "instagram";

export interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  icon: ContactIconType;
}

export interface ContactInfo {
  address: ContactInfoItem;
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
  socialMedia: SocialMedia;
  mapEmbedUrl: string;
}

export interface ContactSectionProps {
  data?: ContactData;
}
