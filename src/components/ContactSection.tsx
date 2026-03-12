import { Mail, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Have an interesting project?
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              contact@etherworld.co
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="mailto:team@ethcatherders.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              team@ethcatherders.com
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <SocialIcons className="justify-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
