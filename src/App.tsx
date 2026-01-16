import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProgramsSection } from "./components/sections/ProgramsSection";
import { FacilitiesSection } from "./components/sections/FacilitiesSection";
import { AdmissionsSection } from "./components/sections/AdmissionsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";

export const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="bg-light min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
