import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoAvarch from "@/assets/logo-avarch.png";
import logoEtherworld from "@/assets/logo-etherworld.png";
import logoEch from "@/assets/logo-ech.png";
import logoEipsinsight from "@/assets/logo-eipsinsight.png";
import logoWiep from "@/assets/logo-wiep.png";
import logoBlockaction from "@/assets/logo-blockaction.png";

const projects = [
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
    title: "ECH Institute",
    description: "501(c)(3) non-profit focused on education, community engagement, and diversity within Ethereum. Bridges knowledge gaps and supports governance transparency.",
    url: "https://www.ethereumcatherders.com/",
    tags: ["Non-Profit", "Governance"],
    logo: logoEch,
  },
  {
    title: "BlockAction",
    description: "Blockchain wallet and transaction platform providing secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
    url: "https://avarch.org/blockaction.html",
    tags: ["Product", "Wallet"],
    logo: logoBlockaction,
  },
  {
    title: "EIPsInsight",
    description: "Premier data analytics platform tracking Ethereum Improvement Proposals — statuses, author contributions, historical trends, and governance decisions.",
    url: "https://eipsinsight.com/",
    tags: ["Analytics", "Data"],
    logo: logoEipsinsight,
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

  return (
    <section id="projects" className="py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px line-gradient" />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-glass border border-border/50 hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 bg-secondary flex items-center justify-center ring-1 ring-border">
                <img src={p.logo} alt={`${p.title} logo`} className="w-full h-full object-contain" />
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all mt-1 flex-shrink-0" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-secondary text-muted-foreground font-semibold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
