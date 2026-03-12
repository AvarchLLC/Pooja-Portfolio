import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Newspaper, Award, BookOpen, Mic, Quote, FileText, Users, Video, ChevronDown, ChevronUp } from "lucide-react";

const mediaFeatures = [
  { title: "The Merge: 10 Key People Behind Ethereum's Biggest Upgrade Yet", source: "The Block", url: "https://www.theblock.co/post/166999/the-merge-10-key-people-behind-ethereums-bigge" },
  { title: "Meet the 10 Women Who Are Shaping the Future of Ethereum", source: "EtherWorld", url: "https://etherworld.co/2025/03/08/meet-the-10-women-who-are-shaping-the-future-of-eth" },
  { title: "London Hard Fork on Ethereum Now Live", source: "Decrypt", url: "https://decrypt.co/77746/london-hard-fork-ethereum-live" },
  { title: "Everything You Need to Know About the Ethereum Shapella", source: "The Block", url: "https://www.theblock.co/post/225655/ethereum-shapella" },
  { title: "How the Ethereum Community Reacted to The Merge", source: "The Block", url: "https://www.theblock.co/post/170334/an-incredible-feat-how-the-ethereum-community-re" },
  { title: "Hudson Jameson Steps Down from Ethereum Core Developers", source: "Decrypt", url: "https://decrypt.co/52240/hudson-jameson-steps-down-from-ethereum-core-developers" },
];

const speakingEvents = [
  "EDCON 2025", "Devcon 2024", "Devconnect 2025", "Eth Singapore 2024",
  "EthDenver 2024", "EthDenver 2023", "EDCON 2023", "Chainlink Panel 2021",
  "EthNYC 2021", "EthBoston 2023", "Mainnet NYC", "EEA 6th Anniversary",
];

const interviews = [
  { title: "Education and Organization for Ethereum — Unstoppable Domains", url: "#" },
  { title: "MolochDAO Interview with Pooja Ranjan of Ethereum Cat Herders", url: "#" },
  { title: "Meet The Herders: Pooja Ranjan", url: "#" },
];

const additionalMedia = [
  { text: "CNBC Feature", url: "#", icon: Video },
  { text: "Coindesk Short", url: "https://www.youtube.com/shorts/gpCc_NAtNn0", icon: Video },
  { text: "EthStakers Short", url: "https://www.youtube.com/shorts/tRIvDvcRhbU", icon: Video },
  { text: "ConsenSys Educational Series", url: "https://courses.consensys.net/courses/understanding-ethereum-network-upgrades-dencun-december-2023-january-february-2024", icon: FileText },
  { text: "Bankless DAO: Project Management Educational Series", url: "#", icon: Users },
  { text: "The Daily Free Press — EthBoston 2023", url: "#", icon: Newspaper },
  { text: "GM Bus Radio Interview", url: "#", icon: Mic },
];

const communityMentions = [
  "Gratitude to women who have made huge contributions",
  "An introduction to EIPs with Tim Beiko from the Ethereum Foundation",
  "Ethereum Network Upgrades Part 1: The Process",
  "The Ethereum Government",
  "Hudson Jameson Steps Down from Ethereum Core Developers",
];

const references = [
  { title: "Yale Journal of Law & Technology", type: "Academic", url: "#" },
  { title: "Pectra Upgrade: What's New — Etherscan", type: "Technical", url: "#" },
  { title: "The MEV Letter #91", type: "Research", url: "#" },
  { title: "ConsenSys Academy: Understanding Ethereum Network Upgrades", type: "Educational", url: "https://courses.consensys.net/courses/understanding-ethereum-network-upgrades-dencun-december-2023-january-february-2024" },
];

const echResources = [
  "Happy 10 Years of Community Building with Ethereum",
  "Ethereum Cat Herders' Wrap for 2024",
  "ProgPoW: The Ethereum Community Speaks",
  "It's Pectra Time!",
];

const educationalSupport = [
  "EEA Monthly Education Call: Ethereum's Transition to Proof of Stake",
  "Understand EIPs with Pooja Ranjan | WiEP Cohort 3 Week 6",
  "WiEP Cohort 4",
  "EIPs Simplified: History and Process Explained | Devcon SEA",
  "Empowering Women in Ethereum: WiEP Introduction | Devcon 2024",
];

const acdMentions = [
  "Tim Beiko's Tweet inviting support to ECH for EIPIP",
  "PEEPanEIP mention — AllCoreDevs Update 016",
  "Benjamin Edgington's Tweet on governance process and documentation",
  "Rhino Review and Tweet by EthStaker",
  "Supporting All ERC Dev event — ERC @ Devconnect",
];

const SectionBlock = ({ title, icon: Icon, iconColor, children, delay }: { title: string; icon: any; iconColor: string; children: React.ReactNode; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
        <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring" }}>
          <Icon size={20} className={iconColor} />
        </motion.div>
        {title}
      </h3>
      {children}
    </motion.div>
  );
};

const MediaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAllEvents, setShowAllEvents] = useState(false);

  return (
    <section id="media" className="py-32 relative" ref={ref}>
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
          className="text-muted-foreground mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Co-author of{" "}
          <a href="https://eips.ethereum.org/EIPS/eip-5069" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EIP-5069</a>
          {" "}· Featured across leading blockchain media · Referenced in academic publications
        </motion.p>

        {/* Press Features - Bento grid style */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {mediaFeatures.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-glass rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -5, scale: 1.01, boxShadow: "0 20px 50px -15px hsl(280 80% 65% / 0.15)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 relative z-10"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Newspaper size={18} className="text-accent" />
              </motion.div>
              <div className="flex-1 min-w-0 relative z-10">
                <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-1">{item.title}</h3>
                <span className="text-xs text-muted-foreground">{item.source}</span>
              </div>
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1 relative z-10" />
            </motion.a>
          ))}
        </div>

        {/* Two-column layout for related sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Media Appearances */}
          <SectionBlock title="Media Appearances" icon={Video} iconColor="text-accent" delay={0.1}>
            <div className="space-y-2">
              {additionalMedia.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-glass group hover:border-accent/20 border border-transparent transition-all"
                  whileHover={{ x: 6, backgroundColor: "hsl(var(--accent) / 0.03)" }}
                >
                  <item.icon size={15} className="text-accent-cyan flex-shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">{item.text}</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-muted-foreground/50" />
                </motion.a>
              ))}
            </div>
          </SectionBlock>

          {/* Interviews */}
          <SectionBlock title="Interviews" icon={BookOpen} iconColor="text-accent-cyan" delay={0.15}>
            <div className="space-y-2 mb-8">
              {interviews.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-glass group border border-transparent hover:border-accent/20 transition-all"
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">{item.title}</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-muted-foreground/50" />
                </motion.a>
              ))}
            </div>

            {/* Educational Support nested here */}
            <SectionBlock title="Educational & Community" icon={Users} iconColor="text-accent-warm" delay={0.2}>
              <div className="space-y-1.5">
                {educationalSupport.map((text, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
                    {text}
                  </motion.div>
                ))}
              </div>
            </SectionBlock>
          </SectionBlock>
        </div>

        {/* Speaking Events - pill cloud */}
        <SectionBlock title="Speaking Engagements" icon={Mic} iconColor="text-accent-warm" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-16">
            {speakingEvents.map((event, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.03, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.12, borderColor: "hsl(var(--accent))", y: -3 }}
                className="text-xs px-4 py-2 rounded-full bg-secondary border border-border text-foreground font-medium hover:bg-accent/10 transition-all cursor-default"
              >
                {event}
              </motion.span>
            ))}
          </div>
        </SectionBlock>

        {/* Three-column: ECH Resources, ACD, References */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <SectionBlock title="ECH Resources" icon={FileText} iconColor="text-accent" delay={0.1}>
            <ul className="space-y-2">
              {echResources.map((text, i) => (
                <motion.li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2 hover:text-foreground transition-colors cursor-default"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="ACD Mentions" icon={Award} iconColor="text-accent-warm" delay={0.15}>
            <ul className="space-y-2">
              {acdMentions.map((text, i) => (
                <motion.li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2 hover:text-foreground transition-colors cursor-default"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1 h-1 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Referenced In" icon={BookOpen} iconColor="text-accent-cyan" delay={0.2}>
            <div className="space-y-2">
              {references.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-glass rounded-xl p-3 group hover:border-accent/20 border border-transparent transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <span className="text-sm text-foreground font-medium group-hover:text-accent transition-colors">{item.title}</span>
                  <span className="block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-1">{item.type}</span>
                </motion.a>
              ))}
            </div>
          </SectionBlock>
        </div>

        {/* Community Shoutouts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-5">Community Shoutouts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {communityMentions.map((text, i) => (
              <motion.div
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2 bg-glass rounded-xl p-4 hover:text-foreground transition-all group"
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-gradient-primary flex-shrink-0 mt-1.5"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tim Beiko quote - full width cinematic */}
        <motion.blockquote
          className="bg-glass rounded-3xl p-8 md:p-12 border-l-4 border-accent relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ boxShadow: "0 30px 60px -20px hsl(280 80% 65% / 0.15)" }}
        >
          {/* Animated quote mark */}
          <motion.div
            className="absolute top-6 right-8"
            animate={{ rotate: [0, 5, -5, 0], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Quote size={80} className="text-accent" />
          </motion.div>
          
          {/* Subtle gradient shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 5 }}
          />

          <p className="text-foreground italic leading-relaxed mb-4 relative z-10 text-xl md:text-2xl font-medium">
            "Pooja is great."
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 relative z-10 max-w-3xl">
            "Ethereum Cat Herders is a group that came together to do just better project management on Ethereum. They take all the notes for all these community calls and provide transcripts... hosting Q&As with some of the people working on changes to Ethereum, doing community sentiment gathering. They're kind of this independent group that's helping with project management."
          </p>
          <footer className="text-sm text-muted-foreground relative z-10 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              TB
            </motion.div>
            <div>
              <strong className="text-foreground block">Tim Beiko</strong>
              <span className="text-xs">Ethereum Foundation Protocol Lead</span>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default MediaSection;
