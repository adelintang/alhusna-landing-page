import type {
  ContactSectionProps,
  ContactData,
  ContactIconType,
  SocialIconType,
} from "../../types/contact.types";
import contactDataJson from "../../data/contact.json";

const contactData = contactDataJson as ContactData;

const ContactIcon = ({
  icon,
  className = "",
}: {
  icon: ContactIconType;
  className?: string;
}): React.ReactElement => {
  const iconClass = `w-5 h-5 ${className}`;

  const icons: Record<ContactIconType, React.ReactElement> = {
    location: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    phone: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    email: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    whatsapp: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  };

  return icons[icon] || icons.email;
};

const SocialIcon = ({
  icon,
  className = "",
}: {
  icon: SocialIconType;
  className?: string;
}): React.ReactElement => {
  const iconClass = `w-5 h-5 ${className}`;

  const icons: Record<SocialIconType, React.ReactElement> = {
    facebook: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    instagram: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    youtube: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    ),
  };

  return icons[icon] || icons.facebook;
};

export const ContactSection = ({
  data = contactData,
}: ContactSectionProps): React.ReactElement => {
  const {
    sectionTitle,
    sectionSubtitle,
    contactInfo,
    officeHours,
    form,
    socialMedia,
    mapEmbedUrl,
  } = data;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-surface"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2
            id="contact-title"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Info + Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(contactInfo).map((info) => (
                <div
                  key={info.label}
                  className="bg-light rounded-xl p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <ContactIcon icon={info.icon} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-gray-500 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-sans text-sm sm:text-base font-medium text-midnight hover:text-primary transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm sm:text-base font-medium text-midnight">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-light rounded-xl p-5 sm:p-6">
              <h3 className="font-sans text-lg font-bold text-midnight mb-4">
                {officeHours.title}
              </h3>
              <ul className="space-y-2">
                {officeHours.hours.map((hour) => (
                  <li
                    key={hour.days}
                    className="flex justify-between font-sans text-sm sm:text-base"
                  >
                    <span className="text-gray-600">{hour.days}</span>
                    <span className="font-medium text-midnight">{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-light rounded-xl p-5 sm:p-6">
              <h3 className="font-sans text-lg font-bold text-midnight mb-4">
                {socialMedia.title}
              </h3>
              <div className="flex gap-3">
                {socialMedia.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={link.label}
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64 sm:h-72">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Greenwood Academy"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-light rounded-2xl p-6 sm:p-8">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-midnight mb-6">
              {form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-midnight mb-2"
                >
                  {form.fields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={form.fields.name.placeholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface font-sans text-midnight placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-midnight mb-2"
                  >
                    {form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={form.fields.email.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface font-sans text-midnight placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm font-medium text-midnight mb-2"
                  >
                    {form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={form.fields.phone.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface font-sans text-midnight placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-sans text-sm font-medium text-midnight mb-2"
                >
                  {form.fields.subject.label}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface font-sans text-midnight focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">{form.fields.subject.placeholder}</option>
                  {form.subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-midnight mb-2"
                >
                  {form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={form.fields.message.placeholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface font-sans text-midnight placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                {form.submitText}
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
