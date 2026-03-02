import type {
  AboutSectionProps,
  AboutData,
  ValueIconType,
} from "../../types/about.types";
import aboutDataJson from "../../data/about.json";

const aboutData = aboutDataJson as AboutData;

const ValueIcon = ({
  icon,
  className = "",
}: {
  icon: ValueIconType;
  className?: string;
}): React.ReactElement => {
  const iconClass = `w-6 h-6 ${className}`;

  const icons: Record<ValueIconType, React.ReactElement> = {
    shield: (
      <svg
        className={iconClass}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    star: (
      <svg
        className={iconClass}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    lightbulb: (
      <svg
        className={iconClass}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    heart: (
      <svg
        className={iconClass}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  };

  return icons[icon] || icons.star;
};

export const AboutSection = ({
  data = aboutData,
}: AboutSectionProps): React.ReactElement => {
  const {
    sectionTitle,
    sectionSubtitle,
    description,
    subDescription,
    image,
    imageAlt,
    vision,
    mission,
    stats,
    valuesTitle,
    values,
  } = data;

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-surface"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="about-title"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </header>

        {/* Description */}
        <div className="mb-10 sm:mb-12 max-w-4xl mx-auto text-center">
          <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
            {description}
          </p>
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            {subDescription}
          </p>
        </div>

        {/* Image + Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-midnight/20 to-transparent" />
          </div>

          {/* Vision & Mission */}
          <div className="flex flex-col justify-center">
            {/* Vision */}
            <div className="mb-6">
              <h3 className="font-sans text-xl font-bold text-midnight mb-2 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                {vision.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed pl-11">
                {vision.content}
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="font-sans text-xl font-bold text-midnight mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                {mission.title}
              </h3>
              <ul className="space-y-2 pl-11">
                {mission.items.map((item, index) => (
                  <li
                    key={index}
                    className="font-sans text-gray-600 flex items-start"
                  >
                    <svg
                      className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-light rounded-xl p-6 text-center">
              <p className="font-sans text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-sm sm:text-base text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight text-center mb-8">
            {valuesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-light rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ValueIcon
                    icon={value.icon as ValueIconType}
                    className="text-primary"
                  />
                </div>
                <h4 className="font-sans text-lg font-bold text-midnight mb-2">
                  {value.title}
                </h4>
                <p className="font-sans text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
