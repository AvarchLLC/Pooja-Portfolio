import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 8, suffix: "+", label: "Years in Ethereum", icon: "⟠" },
  { value: 6, suffix: "+", label: "Major Projects", icon: "◆" },
  { value: 8, suffix: "+", label: "Network Upgrades", icon: "↗" },
  { value: 100, suffix: "+", label: "EIP Contributions", icon: "📋" },
];

const highlights = [
  { label: "ECH Institute", desc: "501(c)(3) non-profit", color: "accent" },
  { label: "Avarch LLC", desc: "Blockchain consultancy", color: "accent-cyan" },
  { label: "EIP-5069", desc: "Co-authored standard", color: "accent-warm" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, value, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, value]);
  return <>{display}{suffix}</>;
};

const TextReveal = ({ children, delay = 0, inView }: { children: string; delay?: number; inView: boolean }) => (
  <span className="inline-block overflow-hidden">
    <motion.span
      className="inline-block"
      initial={{ y: "110%" }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Parallax decorative element */}
      <motion.div
        className="absolute -right-20 top-20 w-72 h-72 rounded-full bg-accent/[0.03] blur-[100px]"
        style={{ y: backgroundY }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.div
            className="w-12 h-px line-gradient"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left column - Main text */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <TextReveal inView={inView}>Bridging Enterprises &</TextReveal>
              <br />
              <span className="text-gradient">
                <TextReveal delay={0.15} inView={inView}>Open-Source Protocol</TextReveal>
              </span>
            </motion.h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I work across open-source education and governance awareness to support enterprise participation and contribution. Over the past several years, I have worked closely with protocol developers, researchers, enterprises, nonprofits, and academic partners within the Ethereum ecosystem.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                I currently serve as President of{" "}
                <a href="https://www.ethereumcatherders.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">ECH Institute</a>
                , a U.S.-based nonprofit supporting education, community coordination, and public-goods infrastructure. I am also the founder of{" "}
                <a href="https://avarch.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Avarch LLC</a>
                , where I lead enterprise-facing initiatives such as{" "}
                <a href="https://www.etherworld.co/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EtherWorld</a>
                {" "}and{" "}
                <a href="https://eipsinsight.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EIPsInsight</a>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                My current focus is enterprise relationship leadership: building long-term partnerships, creating structured feedback loops between enterprises and core contributors, and supporting adoption of open infrastructure.
              </motion.p>
            </div>

            {/* Highlight chips */}
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="bg-glass rounded-xl px-5 py-3 group cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="text-sm font-bold text-foreground">{h.label}</div>
                  <div className="text-[11px] text-muted-foreground">{h.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sticky top-28">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.25 } }}
                  className="bg-glass rounded-2xl p-6 text-center group hover:glow-accent transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    className="text-2xl mb-3 relative z-10"
                    animate={inView ? { rotateY: [0, 360] } : {}}
                    transition={{ duration: 1, delay: 0.6 + i * 0.15 }}
                  >
                    {s.icon}
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1 relative z-10">
                    <AnimatedCounter value={s.value} suffix={s.suffix} inView={inView} />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider relative z-10">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
