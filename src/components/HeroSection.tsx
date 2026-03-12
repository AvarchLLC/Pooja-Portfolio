import { ArrowRight, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import poojaPfp from "@/assets/pooja-pfp.png";

const skills = [
  "Enterprise Relationship Leadership",
  "Open-Source Governance & Strategy",
  "Enterprise Enablement & Adoption",
  "Protocol Coordination",
];

const titles = [
  "President, ECH Institute",
  "Founder, Avarch LLC",
  "Ethereum Governance Leader",
  "Protocol Coordinator",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Typewriter effect
const useTypewriter = (words: string[], speed = 80, pause = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const typewriterText = useTypewriter(titles);

  return (
    <section ref={ref} className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
      {/* Animated ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent-cyan/10 blur-[100px]"
          animate={{ scale: [1.1, 0.8, 1.1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-warm/[0.04] blur-[180px]"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="flex-1 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground text-sm">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <MapPin size={14} className="text-accent" />
              </motion.div>
              <span>United States</span>
              <span className="mx-2 text-border">·</span>
              <span>English · Hindi</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {/* Letter-by-letter reveal for first name */}
              <span className="text-foreground inline-block overflow-hidden">
                {"Pooja".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: 60, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.15, color: "hsl(var(--accent))", transition: { duration: 0.15 } }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="text-gradient inline-block overflow-hidden">
                {"Ranjan".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: 60, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.div variants={itemVariants} className="h-8 flex items-center">
              <span className="text-lg md:text-xl font-medium text-accent">
                {typewriterText}
                <motion.span
                  className="inline-block w-[2px] h-6 bg-accent ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
              <Sparkles size={14} className="inline text-accent-warm mr-2" />
              Enterprise Education · Open Infrastructure · Protocol Governance
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm text-muted-foreground max-w-lg leading-relaxed">
              President of{" "}
              <a href="https://www.ethereumcatherders.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">ECH Institute</a>
              {" "}· Founder of{" "}
              <a href="https://avarch.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Avarch LLC</a>
              {" "}· Co-author of{" "}
              <a href="https://eips.ethereum.org/EIPS/eip-5069" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EIP-5069</a>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.12, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent))", backgroundColor: "hsl(var(--accent) / 0.1)" }}
                  className="text-xs px-4 py-2 rounded-full bg-secondary border border-border text-muted-foreground font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px -10px hsl(280 80% 65% / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-primary text-primary-foreground rounded-full text-sm font-semibold group shadow-lg glow-accent relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Explore my work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Get in touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Profile image with magnetic hover */}
          <motion.div className="relative flex-shrink-0" variants={itemVariants}>
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden relative"
              whileHover={{ scale: 1.04, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-[2px] rounded-3xl bg-gradient-primary z-0"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />
              <div className="absolute inset-[2px] rounded-3xl overflow-hidden z-10 bg-background">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 z-10" />
                <img src={poojaPfp} alt="Pooja Ranjan" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Floating decorative elements with more dynamic animations */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-primary opacity-15"
              animate={{ y: [0, -15, 0], rotate: [0, 10, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-20 h-20 rounded-xl bg-accent-warm/15"
              animate={{ y: [0, 15, 0], rotate: [0, -10, 5, 0], scale: [1, 0.9, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-12 w-10 h-10 rounded-full bg-accent-cyan/25"
              animate={{ y: [0, -20, 0], x: [0, 8, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
              className="absolute top-8 -left-4 w-6 h-6 rounded-full bg-accent/30"
              animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
