export interface GalleryImage {
  id: string;
  srcset: string;
  sizes: string;
  alt: string;
}

export interface GalleryData {
  sectionTitle: string;
  sectionSubtitle: string;
  images: GalleryImage[];
}

export interface GallerySectionProps {
  data?: GalleryData;
}

export interface GalleryImageProps {
  image: GalleryImage;
}
