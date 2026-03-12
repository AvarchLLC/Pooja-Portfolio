import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import poojaPfp from "@/assets/pooja-pfp.png";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-20 pb-16 relative">
    <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-medium"
          >
            Enterprise Education · Open Infrastructure
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.02] tracking-tight"
          >
            Pooja
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-gradient"
            >
              Ranjan
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-muted-foreground max-w-md leading-relaxed"
          >
            Coordinating Ethereum protocol development, bridging enterprises with open-source governance, and building public-goods infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-3 pt-2"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium"
            >
              About me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden">
            <img src={poojaPfp} alt="Pooja Ranjan" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
