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
    description: "Software product development and consultancy specializing in blockchain technology. Parent company of EtherWorld, BlockAction, and EIPsInsight—driving research, education, and ecosystem support since 2017.",
    url: "https://avarch.org/",
    tags: ["Research", "Education"],
    logo: logoAvarch,
  },
  {
    title: "EtherWorld",
    description: "Leading online media platform dedicated to Ethereum and blockchain technology. Covers protocol development, upgrades, ecosystem research, and technical insights as a trusted independent source.",
    url: "https://www.etherworld.co/",
    tags: ["Publishing", "Media"],
    logo: logoEtherworld,
  },
  {
    title: "ECH Institute",
    description: "A 501(c)(3) non-profit focused on education, community engagement, and diversity within Ethereum. Bridges knowledge gaps, supports governance transparency, and empowers diverse participation.",
    url: "https://www.ethereumcatherders.com/",
    tags: ["Protocol", "Coordination"],
    logo: logoEch,
  },
  {
    title: "BlockAction Explorer",
    description: "Blockchain wallet and transaction platform by Avarch. Provides secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
    url: "https://avarch.org/blockaction.html",
    tags: ["Product", "Wallet"],
    logo: logoBlockaction,
  },
  {
    title: "EIPsInsight",
    description: "The premier data analytics platform for tracking Ethereum Improvement Proposals. Offers comprehensive data on proposal statuses, author contributions, historical trends, and governance decisions.",
    url: "https://eipsinsight.com/",
    tags: ["Analytics", "Data"],
    logo: logoEipsinsight,
  },
  {
    title: "Women in Ethereum Protocol",
    description: "Initiative increasing diversity and participation of women in Ethereum protocol development through mentorship, awareness, and community building.",
    url: "https://x.com/wiepteam",
    tags: ["Community", "Diversity"],
    logo: logoWiep,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Projects & Initiatives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              {p.logo && (
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 bg-secondary flex items-center justify-center">
                  <img src={p.logo} alt={`${p.title} logo`} className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-xl font-bold text-foreground group-hover:text-accent transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.title}
                </h3>
                <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
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
