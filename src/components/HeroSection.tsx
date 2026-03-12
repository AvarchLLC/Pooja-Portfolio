import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] max-w-4xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Building Ethereum is hard.
        <br />
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          Coordinating the{" "}
          <span className="text-accent italic relative">
            protocol
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent origin-left rounded-full"
            />
          </span>{" "}
          is harder.
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          That's what Pooja does.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 text-lg text-muted-foreground max-w-2xl"
      >
        Enterprise education · Open-source governance · Protocol coordination
      </motion.p>

      <motion.a
        href="#work"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 mt-10 px-6 py-3 border border-foreground rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
      >
        See contributions
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
