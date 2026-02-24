import { ArrowUpRight } from "lucide-react";
import logoAvarch from "@/assets/logo-avarch.png";
import logoEtherworld from "@/assets/logo-etherworld.png";
import logoEch from "@/assets/logo-ech.png";
import logoEipsinsight from "@/assets/logo-eipsinsight.png";
import logoWiep from "@/assets/logo-wiep.png";

const projects = [
  {
    title: "Avarch LLC",
    description: "Founded in 2017, Avarch LLC focuses on blockchain awareness, research, education, and ecosystem support. Its initiatives include EtherWorld, BlockAction, and EIPsInsight.",
    url: "https://avarch.org/",
    tags: ["Research", "Education"],
    logo: logoAvarch,
  },
  {
    title: "EtherWorld",
    description: "One of the leading blockchain publishing platforms covering Ethereum protocol development, upgrades, ecosystem research, and technical insights since 2017.",
    url: "https://www.etherworld.co/",
    tags: ["Publishing", "Media"],
    logo: logoEtherworld,
  },
  {
    title: "ECH Institute",
    description: "Decentralized project management group supporting Ethereum protocol development.",
    url: "https://www.ethereumcatherders.com/",
    tags: ["Protocol", "Coordination"],
    logo: logoEch,
  },
  {
    title: "BlockAction Explorer",
    description: "Blockchain wallet and transaction platform developed by Avarch in association with BitsBeat. Provides secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
    url: "https://avarch.org/blockaction.html",
    tags: ["Product", "Wallet"],
    logo: null,
  },
  {
    title: "EIPsInsight",
    description: "Data analytics dashboard for Ethereum Improvement Proposals, offering statistics, historical insights, and monthly reporting.",
    url: "https://eipsinsight.com/",
    tags: ["Analytics", "Data"],
    logo: logoEipsinsight,
  },
  {
    title: "Women in Ethereum Protocol",
    description: "Initiative focused on increasing diversity and participation of women in Ethereum protocol development through mentorship, awareness, and community building.",
    url: "https://x.com/wiepteam",
    tags: ["Community", "Diversity"],
    logo: logoWiep,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex items-end justify-between mb-12">
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Projects & Initiatives
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-7 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300"
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
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
