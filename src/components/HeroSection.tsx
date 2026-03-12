import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import poojaPfp from "@/assets/pooja-pfp.png";

const skills = [
  "Enterprise Relationship Leadership",
  "Open-Source Governance & Strategy",
  "Enterprise Enablement & Adoption",
  "Protocol Coordination",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
    {/* Animated ambient orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/8 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent-cyan/8 blur-[100px]"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-warm/5 blur-[150px]"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left content */}
        <div className="flex-1 space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} className="text-accent" />
            <span>United States</span>
            <span className="mx-2 text-border">·</span>
            <span>English · Hindi</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <motion.span
              className="text-foreground inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Pooja
            </motion.span>
            <br />
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ranjan
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            <Sparkles size={16} className="inline text-accent-warm mr-2" />
            Enterprise Education · Open Infrastructure · Protocol Governance
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-muted-foreground max-w-lg leading-relaxed">
            President of{" "}
            <a href="https://www.ethereumcatherders.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ECH Institute</a>
            {" "}· Founder of{" "}
            <a href="https://avarch.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Avarch LLC</a>
            {" "}· Co-author of{" "}
            <a href="https://eips.ethereum.org/EIPS/eip-5069" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">EIP-5069</a>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.08, borderColor: "hsl(var(--accent))" }}
                className="text-xs px-4 py-2 rounded-full bg-secondary border border-border text-muted-foreground font-medium transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px hsl(280 80% 65% / 0.4)" }}
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
          variants={itemVariants}
        >
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden relative glow-accent"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-20 z-10 rounded-3xl" />
            <img src={poojaPfp} alt="Pooja Ranjan" className="w-full h-full object-cover" />
          </motion.div>
          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-primary opacity-20"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-accent-warm/20"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 -right-10 w-8 h-8 rounded-full bg-accent-cyan/30"
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
