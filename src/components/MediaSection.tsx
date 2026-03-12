import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Newspaper, Award, BookOpen } from "lucide-react";

const mediaFeatures = [
  { title: "The Merge: 10 Key People Behind Ethereum's Biggest Upgrade Yet", source: "The Block", url: "https://www.theblock.co/post/166999/the-merge-10-key-people-behind-ethereums-biggest-upgrade-yet" },
  { title: "Meet the 10 Women Who Are Shaping the Future of Ethereum", source: "Featured Article", url: "#" },
  { title: "London Hard Fork on Ethereum Now Live", source: "Media Coverage", url: "#" },
  { title: "Everything You Need to Know About the Ethereum Shapella", source: "The Block", url: "#" },
];

const communityMentions = [
  "Gratitude to women who have made huge contributions",
  "An introduction to EIPs with Tim Beiko from the Ethereum Foundation",
  "Ethereum Network Upgrades Part 1: The Process",
  "The Ethereum Government",
  "How Code Changes Are Made to the World's Most Sprawling Blockchain",
  "How the Ethereum community reacted to The Merge",
  "Hudson Jameson Steps Down from Ethereum Core Developers",
];

const references = [
  { title: "Yale Journal of Law & Technology", type: "Academic" },
  { title: "Pectra Upgrade: What's New and How to Track It on Etherscan", type: "Technical" },
  { title: "The MEV Letter #91", type: "Research" },
  { title: "ConsenSys Academy: Understanding Ethereum Network Upgrades", type: "Educational" },
];

const speakingEvents = [
  "EDCON 2025", "Devcon 2024", "Devconnect 2025", "Eth Singapore 2024",
  "EthDenver 2024", "EthDenver 2023", "EDCON 2023", "Chainlink Panel 2021",
  "EthNYC 2021", "EthBoston 2023", "Mainnet NYC",
];

const interviews = [
  "Education and Organization for Ethereum — Unstoppable Domains",
  "MolochDAO Interview with Pooja Ranjan of Ethereum Cat Herders",
  "Meet The Herders: Pooja Ranjan",
];

const MediaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="media" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px line-gradient" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Recognition</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Media & <span className="text-gradient">Recognition</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Co-author of EIP-5069 · Featured across leading blockchain media · Referenced in academic publications
        </motion.p>

        {/* Media Features */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {mediaFeatures.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-glass rounded-2xl p-6 flex items-start gap-4 hover:glow-accent transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Newspaper size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-1">{item.title}</h3>
                <span className="text-xs text-muted-foreground">{item.source}</span>
              </div>
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

        {/* Speaking Events */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award size={20} className="text-accent-warm" />
            Speaking Engagements
          </h3>
          <div className="flex flex-wrap gap-2">
            {speakingEvents.map((event, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                className="text-xs px-4 py-2 rounded-full bg-secondary border border-border text-foreground font-medium hover:border-accent/40 transition-colors cursor-default"
              >
                {event}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Interviews */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-accent-cyan" />
            Interviews
          </h3>
          <div className="space-y-3">
            {interviews.map((item, i) => (
              <motion.div
                key={i}
                className="bg-glass rounded-xl p-4 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.75 + i * 0.08 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community mentions & references */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Community Mentions</h3>
            <ul className="space-y-3">
              {communityMentions.map((mention, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary flex-shrink-0 mt-1.5" />
                  {mention}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Referenced In</h3>
            <div className="space-y-3">
              {references.map((ref, i) => (
                <div key={i} className="bg-glass rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">{ref.title}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-semibold uppercase tracking-wider">{ref.type}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tim Beiko quote */}
        <motion.blockquote
          className="mt-16 bg-glass rounded-2xl p-8 border-l-4 border-accent relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="absolute top-4 right-6 text-6xl text-accent/10 font-serif">"</div>
          <p className="text-foreground italic leading-relaxed mb-4 relative z-10">
            "Pooja is great."
          </p>
          <footer className="text-sm text-muted-foreground">
            — <strong className="text-foreground">Tim Beiko</strong>, Ethereum Foundation Protocol Lead
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default MediaSection;
