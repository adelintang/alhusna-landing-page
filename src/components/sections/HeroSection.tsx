import type { HeroSectionProps } from "../../types/hero.types";
import heroData from "../../data/hero.json";

export const HeroSection = ({
  data = heroData,
}: HeroSectionProps): React.ReactElement => {
  const { schoolName, tagline, primaryCta, scrollTarget } = data;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-midnight via-midnight to-midnight/95"
      aria-label="Hero section"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* School Name */}
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          <span className="block">Welcome to</span>
          <span className="block text-primary mt-2">{schoolName}</span>
        </h1>

        {/* Tagline */}
        <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a
            href={primaryCta.href}
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 min-w-45 sm:min-w-50"
            aria-label={`${primaryCta.text} - Start your enrollment process`}
          >
            {primaryCta.text}
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href={scrollTarget}
          className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2 block"
          aria-label="Scroll down to learn more about our school"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
