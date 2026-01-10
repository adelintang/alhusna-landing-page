import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ProgramsSection } from "./components/sections/ProgramsSection";

export const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="bg-light min-h-screen">
        <HeroSection />
        <ProgramsSection />
      </main>
    </>
  );
};
