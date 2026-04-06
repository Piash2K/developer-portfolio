import HeroSection from "./components/homepage/hero-section/hero-section";
import Navbar from "./components/homepage/navbar";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex min-h-screen w-full items-start px-4 pb-10 pt-0 sm:px-6 lg:px-8">
        <HeroSection />
      </main>
    </div>
  );
}
