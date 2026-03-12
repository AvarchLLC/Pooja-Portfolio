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
    description: "Blockchain consultancy. Parent of EtherWorld, BlockAction & EIPsInsight.",
    url: "https://avarch.org/",
    logo: logoAvarch,
  },
  {
    title: "EtherWorld",
    description: "Ethereum media platform — news, technical blogs & protocol research.",
    url: "https://www.etherworld.co/",
    logo: logoEtherworld,
  },
  {
    title: "ECH Institute",
    description: "501(c)(3) non-profit for Ethereum education, diversity & governance.",
    url: "https://www.ethereumcatherders.com/",
    logo: logoEch,
  },
  {
    title: "BlockAction",
    description: "Blockchain wallet & transaction platform by Avarch.",
    url: "https://avarch.org/blockaction.html",
    logo: logoBlockaction,
  },
  {
    title: "EIPsInsight",
    description: "Analytics for tracking Ethereum Improvement Proposals.",
    url: "https://eipsinsight.com/",
    logo: logoEipsinsight,
  },
  {
    title: "Women in Ethereum Protocol",
    description: "Increasing diversity in Ethereum protocol development.",
    url: "https://x.com/wiepteam",
    logo: logoWiep,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Initiatives & ventures
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-background border border-border hover:border-accent/30 hover:glow-accent transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
                  <img src={p.logo} alt={`${p.title} logo`} className="w-full h-full object-contain" />
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
