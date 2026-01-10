export type SocialIconType = "facebook" | "instagram" | "youtube" | "linkedin";

export interface FooterBrand {
  name: string;
  description: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContact {
  title: string;
  address: string;
  phone: string;
  email: string;
  phoneHref: string;
  emailHref: string;
}

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  icon: SocialIconType;
}

export interface FooterData {
  brand: FooterBrand;
  quickLinks: FooterLinkGroup;
  programs: FooterLinkGroup;
  contact: FooterContact;
  socialMedia: FooterSocialLink[];
  copyright: string;
  bottomLinks: FooterLink[];
}

export interface FooterProps {
  data?: FooterData;
}
