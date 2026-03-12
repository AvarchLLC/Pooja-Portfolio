import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 8, suffix: "+", label: "Years in Ethereum", icon: "⟠" },
  { value: 6, suffix: "+", label: "Major Projects", icon: "◆" },
  { value: 8, suffix: "+", label: "Network Upgrades", icon: "↗" },
  { value: 100, suffix: "+", label: "EIP Contributions", icon: "📋" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, value]);
  return <>{display}{suffix}</>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px line-gradient" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Bridging Enterprises &<br />
          <span className="text-gradient">Open-Source Protocol</span>
        </motion.h2>

        <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I work across open-source education and governance awareness to support enterprise participation and contribution. Over the past several years, I have worked closely with protocol developers, researchers, enterprises, nonprofits, and academic partners within the Ethereum ecosystem to improve coordination, clarity, and trust across a highly distributed environment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I currently serve as President of{" "}
            <a href="https://www.ethereumcatherders.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">ECH Institute</a>
            , a U.S.-based nonprofit supporting education, community coordination, and public-goods infrastructure around Ethereum. I am also the founder of{" "}
            <a href="https://avarch.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Avarch LLC</a>
            , where I lead enterprise-facing initiatives such as{" "}
            <a href="https://www.etherworld.co/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EtherWorld</a>
            {" "}and{" "}
            <a href="https://eipsinsight.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EIPsInsight</a>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            My current focus is enterprise relationship leadership: building long-term partnerships, creating structured feedback loops between enterprises and core contributors, and supporting adoption of open infrastructure in regulated and global environments.
          </motion.p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-glass rounded-2xl p-6 text-center group hover:glow-accent transition-shadow duration-500"
            >
              <motion.div
                className="text-2xl mb-2"
                animate={inView ? { rotateY: [0, 360] } : {}}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
              >
                {s.icon}
              </motion.div>
              <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">
                <AnimatedCounter value={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
