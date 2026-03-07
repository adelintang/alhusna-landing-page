import { useState, useEffect, useTransition } from "react";
import type { HeaderProps } from "../../types/navigation.types";
import navigationData from "../../data/navigation.json";

export const Header = ({
  data = navigationData,
}: HeaderProps): React.ReactElement => {
  const { brand, links, cta, mobileMenuLabel, closeMenuLabel } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const handleScroll = (): void => {
      startTransition(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand / Logo */}
          <a
            href={brand.href}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
          >
            {brand.logo && (
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-12 w-auto"
                width={200}
                height={50}
              />
            )}
            <span
              className={`font-sans font-bold text-lg sm:text-xl transition-colors ${
                isScrolled ? "text-midnight" : "text-white"
              }`}
            >
              {brand.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-midnight/80" : "text-white/90"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={cta.href}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              {cta.text}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              isScrolled
                ? "text-midnight hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? closeMenuLabel : mobileMenuLabel}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul
            className={`flex flex-col gap-1 pt-2 rounded-lg ${
              isScrolled ? "bg-transparent" : "bg-midnight/50 backdrop-blur-md"
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 font-sans text-base font-medium rounded-lg transition-colors ${
                    isScrolled
                      ? "text-midnight hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
