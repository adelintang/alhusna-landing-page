import type {
  FacilitiesSectionProps,
  FacilitiesData,
  FacilityCardProps,
} from "../../types/facilities.types";
import facilitiesDataJson from "../../data/facilities.json";

const facilitiesData = facilitiesDataJson as FacilitiesData;

const FacilityCard = ({ facility }: FacilityCardProps): React.ReactElement => {
  const { title, description, image, features } = facility;

  return (
    <article className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />

        {/* Features badges on image */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="font-sans text-lg sm:text-xl font-bold text-midnight mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export const FacilitiesSection = ({
  data = facilitiesData,
}: FacilitiesSectionProps): React.ReactElement => {
  const { sectionTitle, sectionSubtitle, facilities, ctaText, ctaHref } = data;

  return (
    <section
      id="facilities"
      className="py-16 sm:py-20 lg:py-24 bg-light"
      aria-labelledby="facilities-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="facilities-title"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </header>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            {ctaText}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
