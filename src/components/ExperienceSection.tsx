import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    role: "President, Herder-in-Chief",
    org: "ECH Institute Inc.",
    period: "Jul 2024 – Present",
    location: "United States",
    url: "https://www.ethereumcatherders.com/",
    description: "501(c)(3) non-profit focused on education, community engagement, and diversity within Ethereum. Bridging knowledge gaps and empowering governance transparency.",
    current: true,
  },
  {
    role: "Founder",
    org: "EtherWorld — Avarch LLC",
    period: "Aug 2017 – Present",
    location: "United States",
    url: "https://www.etherworld.co/",
    description: "Leading online media platform for Ethereum — blockchain news, technical blogs, project updates, and protocol research.",
  },
  {
    role: "Founder",
    org: "EIPsInsight",
    period: "Jun 2022 – Present",
    url: "https://eipsinsight.com/",
    description: "Premier analytics platform tracking Ethereum Improvement Proposals — statuses, author contributions, trends, and governance data.",
  },
  {
    role: "Founder",
    org: "Avarch LLC",
    period: "Aug 2017 – Present",
    location: "United States",
    url: "https://avarch.org/",
    description: "Software product development and consultancy in blockchain. Parent of EtherWorld, BlockAction, and EIPsInsight.",
  },
  {
    role: "Herder-in-Chief",
    org: "Ethereum Cat Herders",
    period: "Feb 2019 – Jul 2024",
    location: "United States",
    url: "https://www.ethereumcatherders.com/",
    description: "Coordinated Ethereum protocol development, EIP management, and community communication for 5+ years.",
  },
  {
    role: "Co-Founder",
    org: "BlockAction",
    period: "May 2020 – May 2022",
    url: "https://avarch.org/blockaction.html",
    description: "Blockchain wallet and transaction platform — secure wallet creation and real-time tracking.",
  },
  {
    role: "Ops. Lead",
    org: "MarketingDAO",
    period: "Oct 2019 – Jul 2020",
    description: "Operations for a decentralized marketing organization supporting Ethereum ecosystem growth.",
  },
  {
    role: "Senior Software Engineer",
    org: "Accenture",
    period: "Aug 2007 – Sep 2010",
    location: "Mumbai, India",
    url: "https://www.accenture.com/",
    description: "Enterprise software development and consulting.",
  },
  {
    role: "Project Management Officer",
    org: "Magna Infotech (Quess Corp)",
    period: "Feb 2007 – Aug 2007",
    location: "Mumbai, India",
  },
  {
    role: "Asst. Manager, Business Dev.",
    org: "Moody International",
    period: "Jul 2005 – Jan 2007",
    location: "New Delhi, India",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-32 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          Experience
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional journey
        </motion.h2>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group border-b border-border py-7 first:pt-0 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <div className="md:w-44 flex-shrink-0 text-xs text-muted-foreground font-medium pt-1">
                  {exp.period}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold">Now</span>
                    )}
                  </div>
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                      {exp.org} ↗
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{exp.org}</p>
                  )}
                  {exp.location && <p className="text-xs text-muted-foreground/60 mt-0.5">{exp.location}</p>}
                  {exp.description && (
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg">{exp.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
