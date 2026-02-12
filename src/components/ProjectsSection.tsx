import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Avarch LLC",
    description: "A blockchain research and consulting firm focused on Ethereum protocol development and community engagement.",
    url: "https://avarch.org",
  },
  {
    title: "EtherWorld",
    description: "An information portal covering Ethereum ecosystem news, EIPs, and protocol upgrades.",
    url: "https://etherworld.co",
  },
  {
    title: "ECH Institute",
    description: "A nonprofit organization dedicated to Ethereum protocol education and community coordination.",
    url: "https://echinstitute.org",
  },
  {
    title: "BlockAction Explorer",
    description: "A blockchain explorer tool providing insights into Ethereum network activity and transactions.",
    url: "https://blockaction.io",
  },
  {
    title: "EIPsInsight",
    description: "A comprehensive dashboard tracking the progress and status of Ethereum Improvement Proposals.",
    url: "https://eipsinsight.com",
  },
  {
    title: "Women in Ethereum Protocol",
    description: "An initiative promoting diversity and inclusion in Ethereum's technical governance and development.",
    url: "https://womeninethereumprotocol.com",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
        Projects & Initiatives
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
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
