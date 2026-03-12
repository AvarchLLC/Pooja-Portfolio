import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "8+", label: "Years in Ethereum" },
  { value: "6", label: "Projects Founded" },
  { value: "8+", label: "Network Upgrades" },
  { value: "100+", label: "EIP Contributions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          About
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-10 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Building trust across a
          <br />distributed ecosystem
        </motion.h2>

        <div className="max-w-2xl space-y-5 text-muted-foreground leading-[1.8] text-[15px] mb-20">
          {[
            "I work across open-source education and governance awareness to support enterprise participation and contribution within the Ethereum ecosystem. My focus has been on helping diverse stakeholders understand complex roadmaps, align on priorities, and engage productively with open-source processes.",
            "As President of ECH Institute, a U.S.-based 501(c)(3) nonprofit, I lead cross-functional initiatives related to protocol upgrades, governance workflows, and stakeholder communication — acting as a neutral bridge between technical teams and non-technical decision makers.",
            "I also founded Avarch LLC, leading enterprise-facing initiatives including EtherWorld (education & media) and EIPsInsight (protocol governance analytics). Co-author of EIP-5069.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="bg-background p-8 text-center"
            >
              <div className="text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
