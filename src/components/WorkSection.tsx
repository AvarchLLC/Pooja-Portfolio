import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const mediaTalks = [
  { title: "Women in Blockchain Panel Discussion", url: "https://www.youtube.com/watch?v=f1j2FwKgk7Q" },
  { title: "EDCON 2021 Keynote | The Future of Ethereum with EIPs", url: "https://www.youtube.com/watch?v=5PmGt1B-SVc" },
  { title: "Opportunities in Web3 @ ETHWMN", url: "https://www.youtube.com/watch?v=AbCzQtQWlSE" },
  { title: "Founder, EtherWorld & Herder-in-Chief, Ethereum Cat Herders", url: "https://www.youtube.com/watch?v=GpeOMZQCiLI" },
  { title: "The Importance of Education & Diversity in Protocol Development | EDCON 2025", url: "https://www.youtube.com/watch?v=uVj7JyTbLbg" },
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

const VideoGrid = ({ items }: { items: { title: string; url: string }[] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, i) => {
        const videoId = getYouTubeId(item.url);
        return (
          <motion.div
            key={i}
            className="space-y-3 group"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="aspect-video rounded-2xl overflow-hidden border border-border bg-secondary relative"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 40px -12px hsl(280 80% 65% / 0.2)" }}
              transition={{ duration: 0.3 }}
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
            <div className="flex items-start gap-2">
              <Play size={14} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-medium leading-snug">{item.title}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px line-gradient" />
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
            <TabsList className="bg-secondary/50 mb-10 p-1 rounded-full flex-wrap h-auto gap-1 border border-border">
              <TabsTrigger value="media" className="rounded-full px-6 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Media & Talks</TabsTrigger>
              <TabsTrigger value="peepaneip" className="rounded-full px-6 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">PEEPanEIP Series</TabsTrigger>
            </TabsList>
            <TabsContent value="media">
              <p className="text-muted-foreground mb-8">
                Presentations and discussions on Ethereum protocol development, blockchain education, and community coordination.
              </p>
              <VideoGrid items={mediaTalks} />
            </TabsContent>
            <TabsContent value="peepaneip">
              <p className="text-muted-foreground mb-8">
                Educational series explaining Ethereum Improvement Proposals and their real-world protocol impact.
              </p>
              <VideoGrid items={peepanEIP} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
