import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experience = [
  {
    role: "President, Herder-in-Chief",
    org: "ECH Institute Inc.",
    period: "Jul 2024 – Present",
    location: "United States",
    description: "A 501(c)(3) non-profit organization focused on education, community engagement, and diversity within the Ethereum ecosystem. Bridges knowledge gaps, supports governance transparency, and empowers diverse participation in Ethereum's technical and governance processes.",
    highlight: true,
  },
  {
    role: "Founder",
    org: "EtherWorld (Avarch LLC)",
    period: "Aug 2017 – Present",
    location: "United States",
    description: "Leading online media and publishing platform dedicated to Ethereum and blockchain technology. A trusted source for blockchain news, technical blogs, project updates, and industry events.",
  },
  {
    role: "Founder",
    org: "EIPsInsight",
    period: "Jun 2022 – Present",
    location: "",
    description: "The premier data analytics platform for tracking and analyzing Ethereum Improvement Proposals. Offers comprehensive data on proposal statuses, author contributions, historical trends, and governance decisions.",
  },
  {
    role: "Founder",
    org: "Avarch LLC",
    period: "Aug 2017 – Present",
    location: "United States",
    description: "Software product development and consultancy specializing in blockchain technology. Parent company of EtherWorld, BlockAction, and EIPsInsight.",
  },
  {
    role: "Herder-in-Chief",
    org: "Ethereum Cat Herders",
    period: "Feb 2019 – Jul 2024",
    location: "United States",
    description: "Led coordination of Ethereum protocol development processes, EIP management, and community communication for 5+ years.",
  },
  {
    role: "Co-Founder",
    org: "BlockAction",
    period: "May 2020 – May 2022",
    location: "",
    description: "Blockchain wallet and transaction platform providing secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
  },
  {
    role: "Ops. Lead",
    org: "MarketingDAO",
    period: "Oct 2019 – Jul 2020",
    location: "",
    description: "Led operations for a decentralized marketing organization supporting Ethereum ecosystem growth.",
  },
  {
    role: "Senior Software Engineer",
    org: "Accenture",
    period: "Aug 2007 – Sep 2010",
    location: "Mumbai, India",
    description: "Enterprise software development and consulting at one of the world's largest professional services companies.",
  },
  {
    role: "Project Management Officer",
    org: "Magna Infotech (Quess Corp)",
    period: "Feb 2007 – Aug 2007",
    location: "Mumbai, India",
    description: "",
  },
  {
    role: "Asst. Manager, Business Development",
    org: "Moody International",
    period: "Jul 2005 – Jan 2007",
    location: "New Delhi, India",
    description: "",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px line-gradient" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Experience</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-primary z-10 mt-6 md:mt-8 ring-4 ring-background" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <motion.div
                    className={`bg-glass rounded-2xl p-6 ${exp.highlight ? "glow-accent border border-accent/20" : ""}`}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      {exp.highlight && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold flex-shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-accent text-sm font-medium mb-3">
                      <Briefcase size={13} />
                      {exp.org}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {exp.period}</span>
                      {exp.location && <span className="flex items-center gap-1"><MapPin size={11} /> {exp.location}</span>}
                    </div>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
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
