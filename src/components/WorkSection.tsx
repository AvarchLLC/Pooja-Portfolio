import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ExternalLink } from "lucide-react";

const mediaTalks = [
  { title: "Women in Blockchain Panel Discussion", url: "https://www.youtube.com/watch?v=f1j2FwKgk7Q" },
  { title: "EDCON 2021 Keynote | The Future of Ethereum with EIPs", url: "https://www.youtube.com/watch?v=5PmGt1B-SVc" },
  { title: "Opportunities in Web3 @ ETHWMN", url: "https://www.youtube.com/watch?v=AbCzQtQWlSE" },
  { title: "Founder, EtherWorld & Herder-in-Chief, ECH", url: "https://www.youtube.com/watch?v=GpeOMZQCiLI" },
  { title: "The Importance of Education & Diversity in Protocol Development | EDCON 2025", url: "https://www.youtube.com/watch?v=uVj7JyTbLbg" },
  { title: "Shaping Ethereum's Protocol Governance & Decision-Making | W3 Hub at Devcon 2024", url: "https://www.youtube.com/watch?v=U_UN8FRqi5c" },
  { title: "Elements of Protocol Governance | EDCON 2023", url: "https://www.youtube.com/watch?v=C1LMqQ10gSM" },
  { title: "Empowering Women in Ethereum: WiEP Introduction | Devcon 2024", url: "https://www.youtube.com/watch?v=XCOdX5UmtU4" },
  { title: "EIPs Simplified: History and Process Explained | Devcon SEA", url: "https://www.youtube.com/watch?v=wH76j1BDZkc" },
  { title: "Ethereum Governance Discussion", url: "https://www.youtube.com/watch?v=C_zkU-f4tto" },
  { title: "Ethereum Governance Talk", url: "https://www.youtube.com/watch?v=ZiLRcaZQ9ds" },
  { title: "Ethereum Protocol Governance Talk", url: "https://www.youtube.com/watch?v=LdAlzFPaJpQ" },
  { title: "Ethereum Governance Discussion", url: "https://youtu.be/WxtcBzv05zM" },
  { title: "Ethereum Governance Talk", url: "https://www.youtube.com/watch?v=equE9PjNtZ0" },
];

const peepanEIP = [
  { title: "PEEPanEIP #142 — EIP-7706 Separate Gas Type for Calldata (with Vitalik Buterin)", url: "https://www.youtube.com/watch?v=c3TV6OhjSfc" },
  { title: "PEEPanEIP #154 — EIP-7892 Blob Parameter Only Hardforks (with Mark Mackey)", url: "https://www.youtube.com/watch?v=Q58Wm5gtiJY" },
  { title: "PEEPanEIP #46 — Verkle Tries for Ethereum State (with Dankrad Feist)", url: "https://www.youtube.com/watch?v=RGJOQHzg3UQ" },
  { title: "PEEPanEIP #153 — EIP-7939 CLZ Opcode (with Vectorized)", url: "https://www.youtube.com/watch?v=MuBxmqDyw_c" },
];

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:v=|\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const VideoCard = ({ item, index, inView }: { item: { title: string; url: string }; index: number; inView: boolean }) => {
  const videoId = getYouTubeId(item.url);
  return (
    <motion.div
      className="space-y-3 group"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {videoId ? (
        <motion.div
          className="aspect-video rounded-2xl overflow-hidden border border-border bg-secondary relative"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 20px 60px -15px hsl(280 80% 65% / 0.3)",
            borderColor: "hsl(var(--accent) / 0.3)",
          }}
          transition={{ duration: 0.4 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>
      ) : (
        <motion.a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video rounded-2xl overflow-hidden border border-border bg-secondary relative flex items-center justify-center hover:border-accent/30 transition-all group/play"
          whileHover={{ scale: 1.04 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center"
            whileHover={{ scale: 1.2, backgroundColor: "hsl(var(--accent) / 0.2)" }}
          >
            <Play size={28} className="text-accent ml-1" />
          </motion.div>
        </motion.a>
      )}
      <div className="flex items-start gap-2">
        <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
          <Play size={14} className="text-accent mt-0.5 flex-shrink-0" />
        </motion.div>
        <p className="text-sm text-muted-foreground font-medium leading-snug group-hover:text-foreground transition-colors">{item.title}</p>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32" ref={ref}>
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Talks & Media</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Shaping the <span className="text-gradient">Ethereum Ecosystem</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="media" className="w-full mt-10">
            <TabsList className="bg-glass mb-10 p-1.5 rounded-full flex-wrap h-auto gap-1">
              <TabsTrigger value="media" className="rounded-full px-6 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all">
                Media & Talks
              </TabsTrigger>
              <TabsTrigger value="peepaneip" className="rounded-full px-6 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all">
                PEEPanEIP Series
              </TabsTrigger>
            </TabsList>
            <TabsContent value="media">
              <motion.p
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Presentations and discussions on Ethereum protocol development, blockchain education, and community coordination.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mediaTalks.map((item, i) => (
                  <VideoCard key={i} item={item} index={i} inView={inView} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="peepaneip">
              <motion.p
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Educational series explaining Ethereum Improvement Proposals — including a session with{" "}
                <span className="text-accent font-medium">Vitalik Buterin</span>.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {peepanEIP.map((item, i) => (
                  <VideoCard key={i} item={item} index={i} inView={inView} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
