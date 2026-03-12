import poojaPfp from "@/assets/pooja-pfp.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "9+", label: "Years in Ethereum" },
  { value: "6+", label: "Major Projects" },
  { value: "8+", label: "Network Upgrades" },
  { value: "100+", label: "EIP Contributions" },
];

const experience = [
  { role: "President, Herder-in-Chief", org: "ECH Institute Inc.", period: "Jul 2024 – Present" },
  { role: "Herder-in-Chief", org: "Ethereum Cat Herders", period: "Feb 2019 – Jul 2024" },
  { role: "Founder", org: "Avarch LLC / EtherWorld", period: "Aug 2017 – Present" },
  { role: "Founder", org: "EIPsInsight", period: "Jun 2022 – Present" },
  { role: "Co-Founder", org: "BlockAction", period: "May 2020 – May 2022" },
  { role: "Senior Software Engineer", org: "Accenture", period: "Aug 2007 – Sep 2010" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={poojaPfp}
                alt="Pooja Ranjan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="lg:w-2/3 space-y-5 text-muted-foreground leading-relaxed text-base">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I work across open-source education and governance awareness to support enterprise participation and contribution within the Ethereum ecosystem.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              As President at ECH Institute Inc. and Founder of Avarch LLC, I have dedicated my career to supporting Ethereum protocol development—helping diverse stakeholders understand complex roadmaps, align on priorities, and engage productively with open-source processes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              My current focus is enterprise relationship leadership: building long-term partnerships, creating structured feedback loops between enterprises and core contributors, and supporting adoption of open infrastructure in regulated and global environments.
            </motion.p>
          </div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-2xl font-bold text-foreground mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className="flex gap-5 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                >
                  <div className="w-[15px] h-[15px] rounded-full bg-accent border-2 border-background flex-shrink-0 mt-1 relative z-10" />
                  <div>
                    <div className="font-medium text-foreground text-sm">{exp.role}</div>
                    <div className="text-sm text-muted-foreground">{exp.org}</div>
                    <div className="text-xs text-muted-foreground/70 mt-0.5">{exp.period}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
