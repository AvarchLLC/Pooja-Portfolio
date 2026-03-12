import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Newspaper, Award, BookOpen, Mic, Quote, FileText, Users, Video } from "lucide-react";

const mediaFeatures = [
  { title: "The Merge: 10 Key People Behind Ethereum's Biggest Upgrade Yet", source: "The Block", url: "https://www.theblock.co/post/166999/the-merge-10-key-people-behind-ethereums-biggest-upgrade-yet" },
  { title: "Meet the 10 Women Who Are Shaping the Future of Ethereum", source: "Featured Article", url: "#" },
  { title: "London Hard Fork on Ethereum Now Live", source: "Media Coverage", url: "#" },
  { title: "Everything You Need to Know About the Ethereum Shapella", source: "The Block", url: "#" },
  { title: "How Code Changes Are Made to the World's Most Sprawling Blockchain", source: "Media", url: "#" },
  { title: "How the Ethereum Community Reacted to The Merge", source: "Media", url: "#" },
];

const speakingEvents = [
  { name: "EDCON 2025", url: "#" },
  { name: "Devcon 2024", url: "#" },
  { name: "Devconnect 2025", url: "#" },
  { name: "Eth Singapore 2024", url: "#" },
  { name: "EthDenver 2024", url: "#" },
  { name: "EthDenver 2023", url: "#" },
  { name: "EDCON 2023", url: "#" },
  { name: "Chainlink Panel 2021", url: "#" },
  { name: "EthNYC 2021", url: "#" },
  { name: "EthBoston 2023", url: "#" },
  { name: "Mainnet NYC", url: "#" },
  { name: "EEA 6th Anniversary", url: "#" },
];

const interviews = [
  { title: "Education and Organization for Ethereum — Unstoppable Domains", url: "#" },
  { title: "MolochDAO Interview with Pooja Ranjan of Ethereum Cat Herders", url: "#" },
  { title: "Meet The Herders: Pooja Ranjan", url: "#" },
];

const communityMentions = [
  { text: "Gratitude to women who have made huge contributions", url: "#" },
  { text: "An introduction to EIPs with Tim Beiko from the Ethereum Foundation", url: "#" },
  { text: "Ethereum Network Upgrades Part 1: The Process", url: "#" },
  { text: "The Ethereum Government", url: "#" },
  { text: "Hudson Jameson Steps Down from Ethereum Core Developers", url: "#" },
];

const references = [
  { title: "Yale Journal of Law & Technology", type: "Academic", url: "#" },
  { title: "Pectra Upgrade: What's New — Etherscan", type: "Technical", url: "#" },
  { title: "The MEV Letter #91", type: "Research", url: "#" },
  { title: "ConsenSys Academy: Understanding Ethereum Network Upgrades", type: "Educational", url: "https://courses.consensys.net/courses/understanding-ethereum-network-upgrades-dencun-december-2023-january-february-2024" },
];

const echResources = [
  { text: "Happy 10 Years of Community Building with Ethereum", url: "#" },
  { text: "Ethereum Cat Herders' Wrap for 2024", url: "#" },
  { text: "ProgPoW: The Ethereum Community Speaks", url: "#" },
  { text: "It's Pectra Time!", url: "#" },
];

const additionalMedia = [
  { text: "CNBC Feature", url: "#", icon: Video },
  { text: "Coindesk Short", url: "https://www.youtube.com/shorts/gpCc_NAtNn0", icon: Video },
  { text: "EthStakers Short", url: "https://www.youtube.com/shorts/tRIvDvcRhbU", icon: Video },
  { text: "ConsenSys Educational Series", url: "https://courses.consensys.net/courses/understanding-ethereum-network-upgrades-dencun-december-2023-january-february-2024", icon: FileText },
  { text: "Bankless DAO: Project Management Educational Series", url: "#", icon: Users },
];

const educationalSupport = [
  { text: "EEA Monthly Education Call: Ethereum's Transition to Proof of Stake", url: "#" },
  { text: "Understand EIPs with Pooja Ranjan | WiEP Cohort 3 Week 6", url: "#" },
  { text: "WiEP Cohort 4", url: "#" },
  { text: "EIPs Simplified: History and Process Explained | Devcon SEA", url: "#" },
  { text: "Empowering Women in Ethereum: WiEP Introduction | Devcon 2024", url: "#" },
];

const acdMentions = [
  { text: "Tim Beiko's Tweet inviting support to ECH for EIPIP", url: "#" },
  { text: "PEEPanEIP mention — AllCoreDevs Update 016", url: "#" },
  { text: "Benjamin Edgington's Tweet on governance process and documentation", url: "#" },
  { text: "Rhino Review and Tweet by EthStaker", url: "#" },
  { text: "Supporting All ERC Dev event — ERC @ Devconnect", url: "#" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

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
          Co-author of{" "}
          <a href="https://eips.ethereum.org/EIPS/eip-5069" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">EIP-5069</a>
          {" "}· Featured across leading blockchain media · Referenced in academic publications
        </motion.p>

        {/* Press Features */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {mediaFeatures.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-glass rounded-2xl p-6 flex items-start gap-4 hover:glow-accent transition-all duration-300"
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
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

        {/* Additional Media Appearances */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Video size={20} className="text-accent" />
            Media Appearances
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {additionalMedia.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-glass rounded-xl p-4 flex items-center gap-3 group hover:border-accent/30 border border-transparent transition-all"
                whileHover={{ x: 4 }}
              >
                <item.icon size={16} className="text-accent-cyan flex-shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                <ExternalLink size={12} className="text-muted-foreground/50 opacity-0 group-hover:opacity-100 ml-auto flex-shrink-0 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Speaking Events */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Mic size={20} className="text-accent-warm" />
            Speaking Engagements
          </h3>
          <div className="flex flex-wrap gap-2">
            {speakingEvents.map((event, i) => (
              <motion.a
                key={i}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.08, borderColor: "hsl(var(--accent))" }}
                className="text-xs px-4 py-2 rounded-full bg-secondary border border-border text-foreground font-medium hover:border-accent/40 transition-all cursor-pointer"
              >
                {event.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Educational Support */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users size={20} className="text-accent-cyan" />
            Educational & Community Support
          </h3>
          <div className="space-y-2">
            {educationalSupport.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-glass rounded-xl p-4 text-sm text-muted-foreground hover:text-foreground transition-all group"
                whileHover={{ x: 6 }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                  {item.text}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Interviews */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-accent-cyan" />
            Interviews
          </h3>
          <div className="space-y-3">
            {interviews.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-glass rounded-xl p-4 text-sm text-muted-foreground hover:text-foreground transition-all group"
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                whileHover={{ x: 6 }}
              >
                <span className="flex items-center gap-2">
                  {item.title}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Three-column grid: ECH Resources, ACD Mentions, References */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* ECH Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText size={18} className="text-accent" />
              ECH Resources
            </h3>
            <ul className="space-y-2">
              {echResources.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-start gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ACD Mentions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Award size={18} className="text-accent-warm" />
              ACD Mentions
            </h3>
            <ul className="space-y-2">
              {acdMentions.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Referenced In</h3>
            <div className="space-y-2">
              {references.map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="block bg-glass rounded-xl p-3 group hover:border-accent/20 border border-transparent transition-all">
                  <span className="text-sm text-foreground font-medium group-hover:text-accent transition-colors">{item.title}</span>
                  <span className="block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-1">{item.type}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Community Mentions */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Community Shoutouts</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {communityMentions.map((mention, i) => (
              <a key={i} href={mention.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground flex items-start gap-2 bg-glass rounded-xl p-4 hover:text-foreground transition-all group">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary flex-shrink-0 mt-1.5" />
                {mention.text}
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tim Beiko quote - enhanced */}
        <motion.blockquote
          className="bg-glass rounded-2xl p-8 md:p-10 border-l-4 border-accent relative overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          <motion.div
            className="absolute top-4 right-6 text-8xl text-accent/10 font-serif"
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Quote size={60} />
          </motion.div>
          <p className="text-foreground italic leading-relaxed mb-3 relative z-10 text-lg">
            "Pooja is great."
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative z-10">
            "Ethereum Cat Herders is a group that came together to do just better project management on Ethereum. They take all the notes for all these community calls and provide transcripts... hosting Q&As with some of the people working on changes to Ethereum, doing community sentiment gathering. They're kind of this independent group that's helping with project management."
          </p>
          <footer className="text-sm text-muted-foreground relative z-10">
            — <strong className="text-foreground">Tim Beiko</strong>, Ethereum Foundation Protocol Lead
          </footer>
          <p className="text-xs text-muted-foreground/60 mt-2 relative z-10 italic">
            "A huge thank you to all the folks who we talked to and whose research we leveraged along the way (Ethereum Foundation, Pooja Ranjan, Christine Kim, Tim Beiko, Hudson James, and many more)."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default MediaSection;
