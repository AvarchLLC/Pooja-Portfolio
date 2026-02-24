import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Avarch LLC",
    description: "Founded in 2017, Avarch LLC focuses on blockchain awareness, research, education, and ecosystem support. Its initiatives include EtherWorld, BlockAction, and EIPsInsight.",
    url: "https://avarch.org/",
  },
  {
    title: "EtherWorld",
    description: "One of the leading blockchain publishing platforms covering Ethereum protocol development, upgrades, ecosystem research, and technical insights since 2017.",
    url: "https://www.etherworld.co/",
  },
  {
    title: "ECH Institute",
    description: "Decentralized project management group supporting Ethereum protocol development.",
    url: "https://www.ethereumcatherders.com/",
  },
  {
    title: "BlockAction Explorer",
    description: "Blockchain wallet and transaction platform developed by Avarch in association with BitsBeat. Provides secure wallet creation, real-time transaction tracking, and simplified crypto interactions.",
    url: "https://avarch.org/blockaction.html",
  },
  {
    title: "EIPsInsight",
    description: "Data analytics dashboard for Ethereum Improvement Proposals, offering statistics, historical insights, and monthly reporting.",
    url: "https://eipsinsight.com/",
  },
  {
    title: "Women in Ethereum Protocol",
    description: "Initiative focused on increasing diversity and participation of women in Ethereum protocol development through mentorship, awareness, and community building.",
    url: "https://x.com/wiepteam",
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
