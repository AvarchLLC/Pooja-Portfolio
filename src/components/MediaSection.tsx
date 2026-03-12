import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const mediaFeatures = [
  { title: "The Merge: 10 Key People Behind Ethereum's Biggest Upgrade", source: "The Block", url: "https://www.theblock.co/post/166999/the-merge-10-key-people-behind-ethereums-biggest-upgrade-yet" },
  { title: "Meet the 10 Women Shaping the Future of Ethereum", source: "Featured", url: "#" },
  { title: "London Hard Fork on Ethereum Now Live", source: "Media", url: "#" },
  { title: "Everything You Need to Know About Ethereum Shapella", source: "The Block", url: "#" },
];

const speakingEvents = [
  { name: "EDCON 2025", url: "https://www.youtube.com/watch?v=uVj7JyTbLbg" },
  { name: "Devcon 2024", url: "#" },
  { name: "Devconnect 2025", url: "#" },
  { name: "Eth Singapore 2024", url: "#" },
  { name: "EthDenver 2024", url: "#" },
  { name: "EthDenver 2023", url: "#" },
  { name: "EDCON 2023", url: "#" },
  { name: "EthBoston 2023", url: "#" },
  { name: "Chainlink Panel 2021", url: "#" },
  { name: "EthNYC 2021", url: "#" },
  { name: "Mainnet NYC", url: "#" },
  { name: "EEA 6th Anniversary", url: "#" },
];

const interviews = [
  { title: "Education and Organization for Ethereum — Unstoppable Domains", url: "#" },
  { title: "MolochDAO Interview with Pooja Ranjan", url: "#" },
  { title: "Meet The Herders: Pooja Ranjan", url: "#" },
  { title: "CNBC Feature", url: "#" },
  { title: "Coindesk Short", url: "https://www.youtube.com/shorts/gpCc_NAtNn0" },
  { title: "EthStakers Feature", url: "https://www.youtube.com/shorts/tRIvDvcRhbU" },
];

const communityMentions = [
  { text: "An introduction to EIPs — Tim Beiko, Ethereum Foundation", url: "#" },
  { text: "Ethereum Network Upgrades Part 1: The Process", url: "#" },
  { text: "The Ethereum Government", url: "#" },
  { text: "How Code Changes Are Made to the World's Most Sprawling Blockchain", url: "#" },
  { text: "How the Ethereum community reacted to The Merge", url: "#" },
  { text: "Hudson Jameson Steps Down from Ethereum Core Developers", url: "#" },
  { text: "Gratitude to women who have made huge contributions", url: "#" },
];

const references = [
  { title: "Yale Journal of Law & Technology", type: "Academic", url: "#" },
  { title: "Pectra Upgrade Tracking — Etherscan", type: "Technical", url: "#" },
  { title: "The MEV Letter #91", type: "Research", url: "#" },
  { title: "ConsenSys Academy: Ethereum Network Upgrades", type: "Course", url: "https://courses.consensys.net/courses/understanding-ethereum-network-upgrades-dencun-december-2023-january-february-2024" },
  { title: "Bankless DAO: Project Management Series", type: "Educational", url: "#" },
];

const echResources = [
  { title: "Happy 10 Years of Community Building with Ethereum", url: "#" },
  { title: "Ethereum Cat Herders' Wrap for 2024", url: "#" },
  { title: "ProgPoW: The Ethereum Community Speaks", url: "#" },
  { title: "It's Pectra Time!", url: "#" },
  { title: "EIPs Simplified: History and Process Explained | Devcon SEA", url: "#" },
  { title: "Empowering Women in Ethereum: WiEP Introduction | W3 Hub | Devcon 2024", url: "#" },
];

const MediaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="media" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          Recognition
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Media & mentions
        </motion.h2>

        {/* Quote */}
        <motion.blockquote
          className="mb-20 border-l-2 border-accent pl-6 py-2"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xl text-foreground italic font-medium mb-2">"Pooja is great."</p>
          <footer className="text-sm text-muted-foreground">
            — Tim Beiko, Ethereum Foundation Protocol Lead
          </footer>
        </motion.blockquote>

        {/* Press */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Press</h3>
          <div className="space-y-0">
            {mediaFeatures.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:bg-secondary/50 -mx-3 px-3 rounded-lg transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
              >
                <div>
                  <span className="text-sm text-foreground group-hover:text-accent transition-colors">{item.title}</span>
                  <span className="text-xs text-muted-foreground ml-3">{item.source}</span>
                </div>
                <ExternalLink size={13} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Speaking */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Speaking</h3>
          <div className="flex flex-wrap gap-2">
            {speakingEvents.map((event, i) => (
              <motion.a
                key={i}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-4 py-2 rounded-full border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
              >
                {event.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Interviews */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Interviews</h3>
          <div className="space-y-0">
            {interviews.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-border hover:bg-secondary/50 -mx-3 px-3 rounded-lg transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.title}</span>
                <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ECH Resources */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Ethereum Cat Herders Resources</h3>
          <div className="space-y-0">
            {echResources.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-border hover:bg-secondary/50 -mx-3 px-3 rounded-lg transition-colors"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.title}</span>
                <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Community Mentions & References */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Community Mentions</h3>
            <ul className="space-y-3">
              {communityMentions.map((m, i) => (
                <li key={i}>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="group-hover:text-accent transition-colors">{m.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Referenced In</h3>
            <div className="space-y-0">
              {references.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-border hover:bg-secondary/50 -mx-3 px-3 rounded-lg transition-colors"
                >
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{r.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">{r.type}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
