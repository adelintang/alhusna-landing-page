export type SocialIconType = "instagram";

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

export interface FooterPhoneItem {
  label: string;
  value: string;
  href: string;
}

export interface FooterContact {
  title: string;
  address: string;
  phones: FooterPhoneItem[];
  email: string;
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
