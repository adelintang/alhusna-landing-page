import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProgramsSection } from "./components/sections/ProgramsSection";
import { FacilitiesSection } from "./components/sections/FacilitiesSection";

export const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="bg-light min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
      </main>
    </>
  );
};
