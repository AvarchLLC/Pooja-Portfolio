import { Mail, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
          >
            Contact
          </motion.p>

          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's connect
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            For collaborations, speaking engagements, research initiatives, or protocol coordination discussions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="mailto:contact@etherworld.co"
              className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full text-sm font-medium group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={15} />
              contact@etherworld.co
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="mailto:team@ethcatherders.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={15} />
              team@ethcatherders.com
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
