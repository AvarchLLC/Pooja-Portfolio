import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import poojaPfp from "@/assets/pooja-pfp.png";

const skills = [
  "Enterprise Relationship Leadership",
  "Open-Source Governance & Strategy", 
  "Enterprise Enablement & Adoption",
];

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
    {/* Ambient background orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent-cyan/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-warm/3 blur-[150px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <MapPin size={14} className="text-accent" />
            <span>United States</span>
            <span className="mx-2 text-border">·</span>
            <span>English · Hindi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="text-foreground">Pooja</span>
            <br />
            <span className="text-gradient">Ranjan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Enterprise Education · Open Infrastructure · Protocol Coordination
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="text-xs px-4 py-2 rounded-full bg-secondary border border-border text-muted-foreground font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-primary text-primary-foreground rounded-full text-sm font-semibold group shadow-lg glow-accent"
            >
              Explore my work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right - Profile image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden relative glow-accent">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 z-10 rounded-3xl" />
            <img
              src={poojaPfp}
              alt="Pooja Ranjan"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-primary opacity-20 animate-float" />
          <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-accent-warm/20 animate-float" style={{ animationDelay: "2s" }} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
