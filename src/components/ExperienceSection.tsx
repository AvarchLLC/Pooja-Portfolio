import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experience = [
  {
    role: "President, Herder-in-Chief",
    org: "ECH Institute Inc.",
    url: "https://www.ethereumcatherders.com/",
    period: "Jul 2024 – Present",
    location: "United States",
    description: "A 501(c)(3) non-profit focused on education, community engagement, and diversity within the Ethereum ecosystem. Bridges knowledge gaps, supports governance transparency, and empowers diverse participation.",
    highlight: true,
  },
  {
    role: "Founder",
    org: "EtherWorld (Avarch LLC)",
    url: "https://www.etherworld.co/",
    period: "Aug 2017 – Present",
    location: "United States",
    description: "Leading online media and publishing platform dedicated to Ethereum. Trusted source for blockchain news, technical blogs, project updates, and industry events.",
  },
  {
    role: "Founder",
    org: "EIPsInsight",
    url: "https://eipsinsight.com/",
    period: "Jun 2022 – Present",
    description: "Premier data analytics platform tracking Ethereum Improvement Proposals — statuses, author contributions, historical trends, and governance decisions.",
  },
  {
    role: "Founder",
    org: "Avarch LLC",
    url: "https://avarch.org/",
    period: "Aug 2017 – Present",
    location: "United States",
    description: "Software product development and consultancy specializing in blockchain technology. Parent company of EtherWorld, BlockAction, and EIPsInsight.",
  },
  {
    role: "Herder-in-Chief",
    org: "Ethereum Cat Herders",
    url: "https://www.ethereumcatherders.com/",
    period: "Feb 2019 – Jul 2024",
    location: "United States",
    description: "Led coordination of Ethereum protocol development processes, EIP management, and community communication for 5+ years.",
  },
  {
    role: "Co-Founder",
    org: "BlockAction",
    url: "https://avarch.org/blockaction.html",
    period: "May 2020 – May 2022",
    description: "Blockchain wallet and transaction platform providing secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
  },
  {
    role: "Ops. Lead",
    org: "MarketingDAO",
    period: "Oct 2019 – Jul 2020",
    description: "Led operations for a decentralized marketing organization supporting Ethereum ecosystem growth.",
  },
  {
    role: "Senior Software Engineer",
    org: "Accenture",
    url: "https://www.accenture.com/",
    period: "Aug 2007 – Sep 2010",
    location: "Mumbai, India",
    description: "Enterprise software development and consulting at one of the world's largest professional services companies.",
  },
  {
    role: "Project Management Officer",
    org: "Magna Infotech (Quess Corp)",
    period: "Feb 2007 – Aug 2007",
    location: "Mumbai, India",
  },
  {
    role: "Asst. Manager, Business Development",
    org: "Moody International",
    period: "Jul 2005 – Jan 2007",
    location: "New Delhi, India",
  },
  {
    role: "Management Trainee",
    org: "Sharp Business Systems",
    period: "May 2005 – Jun 2005",
    location: "New Delhi, India",
  },
  {
    role: "Graduate Management Trainee",
    org: "Steel Authority of India Limited (SAIL)",
    period: "May 2001 – Jun 2001",
    location: "Bokaro, India",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Experience</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-20 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Dynamic scroll-driven timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border/30" />
          <motion.div
            className="absolute left-[15px] md:left-1/2 top-0 w-px bg-gradient-to-b from-accent via-accent-cyan to-accent-warm origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot with pulse */}
                <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 mt-6 md:mt-8 z-10">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-gradient-primary ring-4 ring-background"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06, type: "spring" }}
                  />
                  {exp.highlight && (
                    <motion.div
                      className="absolute inset-0 w-3 h-3 rounded-full bg-accent"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                <div className="hidden md:block md:w-1/2" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <motion.div
                    className={`bg-glass rounded-2xl p-6 relative overflow-hidden ${exp.highlight ? "border border-accent/20" : ""}`}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 25px 50px -15px hsl(280 80% 65% / 0.15)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Hover shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                      initial={false}
                    />
                    
                    <div className="flex items-start justify-between gap-2 mb-2 relative z-10">
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      {exp.highlight && (
                        <motion.span
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold flex-shrink-0"
                          animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 0px hsl(var(--accent) / 0)", "0 0 15px hsl(var(--accent) / 0.3)", "0 0 0px hsl(var(--accent) / 0)"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-accent text-sm font-medium mb-3 relative z-10">
                      <Briefcase size={13} />
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                          {exp.org}
                          <ExternalLink size={11} />
                        </a>
                      ) : exp.org}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3 relative z-10">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {exp.period}</span>
                      {exp.location && <span className="flex items-center gap-1"><MapPin size={11} /> {exp.location}</span>}
                    </div>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{exp.description}</p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
