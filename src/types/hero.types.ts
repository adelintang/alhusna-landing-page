export interface CtaButton {
  text: string;
  href: string;
}

export interface HeroData {
  schoolName: string;
  tagline: string;
  primaryCta: CtaButton;
  scrollTarget: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}
