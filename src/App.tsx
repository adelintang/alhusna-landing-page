import { lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";

// Lazy load sections yang tidak terlihat di viewport awal
const AboutSection = lazy(() =>
  import("./components/sections/AboutSection").then((m) => ({
    default: m.AboutSection,
  }))
);
const ProgramsSection = lazy(() =>
  import("./components/sections/ProgramsSection").then((m) => ({
    default: m.ProgramsSection,
  }))
);
const FacilitiesSection = lazy(() =>
  import("./components/sections/FacilitiesSection").then((m) => ({
    default: m.FacilitiesSection,
  }))
);
const GallerySection = lazy(() =>
  import("./components/sections/GallerySection").then((m) => ({
    default: m.GallerySection,
  }))
);
const AdmissionsSection = lazy(() =>
  import("./components/sections/AdmissionsSection").then((m) => ({
    default: m.AdmissionsSection,
  }))
);
const ContactSection = lazy(() =>
  import("./components/sections/ContactSection").then((m) => ({
    default: m.ContactSection,
  }))
);
const Footer = lazy(() =>
  import("./components/layout/Footer").then((m) => ({ default: m.Footer }))
);

export const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="bg-light min-h-screen">
        <HeroSection />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <AboutSection />
          <ProgramsSection />
          <FacilitiesSection />
          <GallerySection />
          <AdmissionsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};
