import { Mail, ArrowRight, Linkedin, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 justify-center"
          >
            <div className="w-8 h-px line-gradient" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Contact</span>
            <div className="w-8 h-px line-gradient" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            For collaborations, speaking engagements, research initiatives, or protocol coordination discussions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="mailto:contact@etherworld.co"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-primary text-primary-foreground rounded-full text-sm font-semibold group shadow-lg glow-accent"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px hsl(280 80% 65% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              contact@etherworld.co
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="mailto:team@ethcatherders.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              team@ethcatherders.com
            </motion.a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://www.linkedin.com/in/pooja-r-072899114" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
              <Linkedin size={14} /> LinkedIn
            </a>
            <span className="text-border">·</span>
            <a href="https://github.com/poojaranjan" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
              <Github size={14} /> GitHub
            </a>
            <span className="text-border">·</span>
            <a href="https://twitter.com/poojaranjan19" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              𝕏 Twitter
            </a>
            <span className="text-border">·</span>
            <a href="https://farcaster.xyz/poojaranjan19" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Farcaster
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SocialIcons className="justify-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
