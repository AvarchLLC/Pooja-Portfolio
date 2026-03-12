import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <ScrollProgress />
    <AnimatedBackground />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <ProjectsSection />
      <EducationSection />
      <MediaSection />
      <ContactSection />
      <motion.footer
        className="py-8 text-center border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-muted-foreground">
          © 2025{" "}
          <a href="https://www.linkedin.com/in/pooja-r-072899114" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Pooja Ranjan
          </a>
          . Building the Future of Ethereum.
        </p>
      </motion.footer>
    </div>
  </div>
);

export default Index;
