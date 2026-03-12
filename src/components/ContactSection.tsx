import { Mail, ArrowRight, Linkedin, Github, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Multiple animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent/[0.06] blur-[150px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-cyan/[0.04] blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex items-center gap-3 mb-8 justify-center"
          >
            <motion.div className="w-12 h-px line-gradient" initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8 }} style={{ originX: 1 }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Contact</span>
            <motion.div className="w-12 h-px line-gradient" initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8 }} style={{ originX: 0 }} />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            For collaborations, speaking engagements, research initiatives, or protocol coordination discussions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="mailto:contact@etherworld.co"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full text-sm font-semibold group shadow-lg glow-accent relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px -10px hsl(280 80% 65% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
              />
              <Mail size={16} className="relative z-10" />
              <span className="relative z-10">contact@etherworld.co</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.a>
            <motion.a
              href="mailto:team@ethcatherders.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-all hover:border-accent/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              team@ethcatherders.com
            </motion.a>
          </motion.div>

          {/* Social links with animations */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-5 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { href: "https://www.linkedin.com/in/pooja-r-072899114", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/poojaranjan", icon: Github, label: "GitHub" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5 group"
                whileHover={{ y: -2, scale: 1.05 }}
              >
                <link.icon size={15} className="group-hover:text-accent transition-colors" />
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://twitter.com/poojaranjan19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              𝕏 Twitter
            </motion.a>
            <motion.a
              href="https://farcaster.xyz/poojaranjan19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              Farcaster
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
