export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavBrand {
  name: string;
  href: string;
}

export interface NavCta {
  text: string;
  href: string;
}

export interface NavigationData {
  brand: NavBrand;
  links: NavLink[];
  cta: NavCta;
  mobileMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: NavigationData;
}
