import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <ProjectsSection />
    <ContactSection />
    <motion.footer
      className="py-8 text-center border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-muted-foreground">© 2025 Pooja Ranjan. Building the Future of Ethereum.</p>
    </motion.footer>
  </div>
);

export default Index;
