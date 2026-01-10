export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface FacilitiesData {
  sectionTitle: string;
  sectionSubtitle: string;
  facilities: Facility[];
  ctaText: string;
  ctaHref: string;
}

export interface FacilitiesSectionProps {
  data?: FacilitiesData;
}

export interface FacilityCardProps {
  facility: Facility;
}
