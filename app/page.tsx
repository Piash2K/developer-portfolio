import HeroSection from "./components/homepage/hero-section/hero-section";
import Navbar from "./components/homepage/navbar";
import AboutSection from "./components/homepage/about/about";
import ExperienceSection from "./components/homepage/experience/experience";
import SkillsSection from "./components/homepage/skills/skills";
import ProjectsSection from "./components/homepage/projects/projects";
import EducationSection from "./components/homepage/education/education";
import ContactSection from "./components/homepage/contact/contact-section";
import Footer from "./components/homepage/footer/footer";
import ScrollToTop from "./components/helper/scroll-to-top";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl items-start px-4 pb-6 pt-0 sm:px-6 lg:px-8">
        <HeroSection />
      </main>
      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
        <AboutSection />
      </section>
      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
        <ExperienceSection />
      </section>
      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
        <SkillsSection />
      </section>
      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
        <ProjectsSection />
      </section>
      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
        <EducationSection />
      </section>
      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
        <ContactSection />
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
