import type {
  ProgramsSectionProps,
  ProgramCardProps,
  FlagshipProgramCardProps,
  ProgramIconType,
  ProgramsData,
  EducationLevelItem,
  FlagshipProgram,
} from "../../types/program.types";
import programsDataJson from "../../data/programs.json";

const programsData = programsDataJson as ProgramsData;

const ProgramIcon = ({
  icon,
  className = "",
}: {
  icon: ProgramIconType;
  className?: string;
}): React.ReactElement => {
  const iconClass = `w-8 h-8 ${className}`;

  const icons: Record<ProgramIconType, React.ReactElement> = {
    child: (
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
    book: (
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    academic: (
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    graduation: (
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
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    beaker: (
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
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
    music: (
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
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V4.5l-10.5 3v9.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 14.25V7.5"
        />
      </svg>
    ),
  };

  return icons[icon] || icons.book;
};

const ProgramCard = ({ program }: ProgramCardProps): React.ReactElement => {
  const { title, description, icon, grades, highlights } =
    program as EducationLevelItem;

  return (
    <article className="group bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col h-full">
      {/* Icon */}
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
        <ProgramIcon icon={icon as ProgramIconType} className="text-primary" />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Title & Grades */}
        <div className="mb-3">
          <h3 className="font-sans text-xl font-bold text-midnight mb-1">
            {title}
          </h3>
          <p className="text-sm text-primary font-medium">{grades}</p>
        </div>

        {/* Description */}
        <p className="font-sans text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>
      </div>

      {/* Highlights */}
      <ul
        className="flex flex-wrap gap-2 mt-auto"
        aria-label={`${title} highlights`}
      >
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-xs font-medium text-midnight/70 bg-light px-3 py-1 rounded-full"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
};

const FlagshipProgramCard = ({
  program,
}: FlagshipProgramCardProps): React.ReactElement => {
  const { title, description, icon, highlights } = program as FlagshipProgram;

  return (
    <article className="group bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col h-full">
      {/* Icon */}
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
        <ProgramIcon icon={icon as ProgramIconType} className="text-primary" />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-sans text-xl font-bold text-midnight mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>
      </div>

      {/* Highlights */}
      <ul
        className="flex flex-wrap gap-2 mt-auto"
        aria-label={`${title} highlights`}
      >
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-xs font-medium text-midnight/70 bg-light px-3 py-1 rounded-full"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
};

export const ProgramsSection = ({
  data = programsData,
}: ProgramsSectionProps): React.ReactElement => {
  const {
    sectionTitle,
    sectionSubtitle,
    educationLevel,
    flagshipProgram,
    ctaText,
  } = data;
  const { title: educationLevelTitle, educationLevels } = educationLevel;
  const { title: flagshipTitle, flagshipPrograms } = flagshipProgram;

  return (
    <section
      id="programs"
      className="py-16 sm:py-20 lg:py-24 bg-light"
      aria-labelledby="programs-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="programs-title"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </header>

        {/* Education Level Group Header */}
        <div className="mb-12 text-center">
          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight">
            {educationLevelTitle}
          </h3>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {educationLevels.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Flagship Program Section */}
        {flagshipPrograms && flagshipPrograms.length > 0 && (
          <>
            {/* Flagship Program Group Header */}
            <div className="mb-12 mt-16 sm:mt-20 lg:mt-24 text-center">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight">
                {flagshipTitle}
              </h3>
            </div>

            {/* Flagship Programs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {flagshipPrograms.map((program) => (
                <FlagshipProgramCard key={program.id} program={program} />
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#admissions"
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
