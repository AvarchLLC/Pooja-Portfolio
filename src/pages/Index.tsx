import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <ProjectsSection />
    <ContactSection />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © {new Date().getFullYear()} Pooja Ranjan. All rights reserved.
    </footer>
  </div>
);

export default Index;
