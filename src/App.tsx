import { HeroSection } from "./components/sections/HeroSection";

export const App = (): React.ReactElement => {
  return (
    <main className="bg-light min-h-screen">
      <HeroSection />
    </main>
  );
};
