import type {
  GallerySectionProps,
  GalleryData,
  GalleryImageProps,
} from "../../types/gallery.types";
import galleryDataJson from "../../data/gallery.json";

const galleryData = galleryDataJson as GalleryData;

const GalleryImage = ({ image }: GalleryImageProps): React.ReactElement => {
  const { srcset, sizes, alt } = image;

  return (
    <div className="relative overflow-hidden rounded-lg group bg-surface">
      <div className="aspect-video overflow-hidden">
        <img
          srcSet={srcset}
          sizes={sizes}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
          width={640}
          height={360}
        />
      </div>
    </div>
  );
};

export const GallerySection = ({
  data = galleryData,
}: GallerySectionProps): React.ReactElement => {
  const { sectionTitle, sectionSubtitle, images } = data;

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 lg:py-24 bg-light"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="gallery-title"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image) => (
            <GalleryImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};
