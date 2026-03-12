import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import logoAvarch from "@/assets/logo-avarch.png";
import logoEtherworld from "@/assets/logo-etherworld.png";
import logoEch from "@/assets/logo-ech.png";
import logoEipsinsight from "@/assets/logo-eipsinsight.png";
import logoWiep from "@/assets/logo-wiep.png";
import logoBlockaction from "@/assets/logo-blockaction.png";

const projects = [
  {
    title: "ECH Institute",
    description: "501(c)(3) non-profit focused on education, community engagement, and diversity within Ethereum. Bridges knowledge gaps and supports governance transparency.",
    url: "https://www.ethereumcatherders.com/",
    tags: ["Non-Profit", "Governance", "Education"],
    logo: logoEch,
    featured: true,
  },
  {
    title: "Avarch LLC",
    description: "Software product development and consultancy specializing in blockchain technology. Parent company of EtherWorld, BlockAction, and EIPsInsight.",
    url: "https://avarch.org/",
    tags: ["Consultancy", "Blockchain"],
    logo: logoAvarch,
  },
  {
    title: "EtherWorld",
    description: "Leading online media platform dedicated to Ethereum. A trusted source for blockchain news, technical blogs, project updates, and industry events.",
    url: "https://www.etherworld.co/",
    tags: ["Media", "Education"],
    logo: logoEtherworld,
  },
  {
    title: "EIPsInsight",
    description: "Premier data analytics platform tracking Ethereum Improvement Proposals — statuses, author contributions, historical trends, and governance decisions.",
    url: "https://eipsinsight.com/",
    tags: ["Analytics", "Data"],
    logo: logoEipsinsight,
  },
  {
    title: "BlockAction",
    description: "Blockchain wallet and transaction platform providing secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
    url: "https://avarch.org/blockaction.html",
    tags: ["Product", "Wallet"],
    logo: logoBlockaction,
  },
  {
    title: "Women in Ethereum Protocol",
    description: "Initiative increasing diversity and participation of women in Ethereum protocol development through mentorship and community building.",
    url: "https://x.com/wiepteam",
    tags: ["Community", "Diversity"],
    logo: logoWiep,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Projects</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects & <span className="text-gradient">Initiatives</span>
        </motion.h2>

        {/* Featured project */}
        {projects.filter(p => p.featured).map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mb-10 p-8 md:p-10 rounded-3xl bg-glass border border-accent/10 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-accent-cyan/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              <motion.div
                className="w-16 h-16 rounded-2xl overflow-hidden bg-secondary flex items-center justify-center ring-1 ring-border flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <img src={p.logo} alt={`${p.title} logo`} className="w-full h-full object-contain" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                  <motion.div className="text-accent" whileHover={{ rotate: 45 }}>
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-glass border border-border/50 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated spotlight on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-cyan/5 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl overflow-hidden mb-5 bg-secondary flex items-center justify-center ring-1 ring-border"
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={p.logo} alt={`${p.title} logo`} className="w-full h-full object-contain" />
                </motion.div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                  <motion.div
                    className="text-accent opacity-0 group-hover:opacity-100 transition-all mt-1"
                    animate={hoveredIndex === i ? { rotate: 45, x: 2, y: -2 } : { rotate: 0 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-secondary text-muted-foreground font-semibold uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
