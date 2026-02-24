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
    <footer className="py-8 text-center border-t border-border">
      <p className="text-sm text-muted-foreground">© 2025 Pooja Ranjan</p>
      <p className="text-xs text-muted-foreground/60 mt-1">Building the Future of Ethereum</p>
    </footer>
  </div>
);

export default Index;
