import type {
  AdmissionsSectionProps,
  AdmissionsData,
  StepIconType,
} from "../../types/admissions.types";
import admissionsDataJson from "../../data/admissions.json";

const admissionsData = admissionsDataJson as AdmissionsData;

const StepIcon = ({
  icon,
  className = "",
}: {
  icon: StepIconType;
  className?: string;
}): React.ReactElement => {
  const iconClass = `w-8 h-8 ${className}`;

  const icons: Record<StepIconType, React.ReactElement> = {
    form: (
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
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
    document: (
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    payment: (
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
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
    check: (
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
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return icons[icon] || icons.form;
};

export const AdmissionsSection = ({
  data = admissionsData,
}: AdmissionsSectionProps): React.ReactElement => {
  const {
    sectionTitle,
    sectionSubtitle,
    stepsTitle,
    steps,
    documentsTitle,
    documentsSubtitle,
    documents,
  } = data;

  return (
    <section
      id="admissions"
      className="py-16 sm:py-20 lg:py-24 bg-light"
      aria-labelledby="admissions-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="admissions-title"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </header>

        {/* Registration Steps */}
        <div className="mb-16 sm:mb-20">
          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight text-center mb-10">
            {stepsTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <StepIcon
                    icon={step.icon as StepIconType}
                    className="text-primary"
                  />
                </div>

                {/* Title */}
                <h4 className="font-sans text-lg font-bold text-midnight mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div>
          <header className="text-center mb-10">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight mb-3">
              {documentsTitle}
            </h3>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {documentsSubtitle}
            </p>
          </header>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20"
                >
                  {/* Document Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* Document Info */}
                  <h4 className="font-sans text-lg font-bold text-midnight mb-2">
                    {doc.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-600 mb-4">
                    {doc.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Unduh {doc.fileName}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-surface rounded-xl p-6 sm:p-8 border-l-4 border-primary">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans text-lg font-bold text-midnight mb-1">
                  Butuh Bantuan?
                </h4>
                <p className="font-sans text-sm text-gray-600">
                  Jika Anda memiliki pertanyaan tentang proses pendaftaran,
                  silakan{" "}
                  <a
                    href="#contact"
                    className="text-primary font-semibold hover:underline"
                  >
                    hubungi kami
                  </a>{" "}
                  atau kunjungi kantor kami pada hari kerja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
