export interface CtaButton {
  text: string;
  href: string;
}

export interface HeroData {
  schoolName: string;
  tagline: string;
  backgroundImage: string;
  primaryCta: CtaButton;
  scrollTarget: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}
