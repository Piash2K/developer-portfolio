import HeroSection from "./components/homepage/hero-section/hero-section";
import Navbar from "./components/homepage/navbar";
import AboutSection from "./components/homepage/about/about";
import SkillsSection from "./components/homepage/skills/skills";
import ProjectsSection from "./components/homepage/projects/projects";
import EducationSection from "./components/homepage/education/education";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex min-h-screen w-full items-start px-4 pb-6 pt-0 sm:px-6 lg:px-8">
        <HeroSection />
      </main>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <AboutSection />
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <SkillsSection />
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <ProjectsSection />
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <EducationSection />
      </section>
    </div>
  );
}
