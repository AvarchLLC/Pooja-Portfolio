import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mediaTalks = [
  { title: "Women in Blockchain Panel Discussion", url: "https://www.youtube.com/watch?v=f1j2FwKgk7Q" },
  { title: "EDCON 2021 Keynote | The Future of Ethereum with EIPs", url: "https://www.youtube.com/watch?v=5PmGt1B-SVc" },
  { title: "Opportunities in Web3 @ ETHWMN", url: "https://www.youtube.com/watch?v=AbCzQtQWlSE" },
  { title: "Founder, EtherWorld & Herder-in-Chief, ECH", url: "https://www.youtube.com/watch?v=GpeOMZQCiLI" },
  { title: "Education & Diversity in Protocol Development | EDCON 2025", url: "https://www.youtube.com/watch?v=uVj7JyTbLbg" },
];

const peepanEIP = [
  { title: "PEEPanEIP #142 — EIP-7706 with Vitalik Buterin", url: "https://www.youtube.com/watch?v=c3TV6OhjSfc" },
  { title: "PEEPanEIP #154 — EIP-7892 with Mark Mackey", url: "https://www.youtube.com/watch?v=Q58Wm5gtiJY" },
  { title: "PEEPanEIP #46 — Verkle Tries with Dankrad Feist", url: "https://www.youtube.com/watch?v=RGJOQHzg3UQ" },
  { title: "PEEPanEIP #153 — EIP-7939 with Vectorized", url: "https://www.youtube.com/watch?v=MuBxmqDyw_c" },
];

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:v=|\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const VideoGrid = ({ items }: { items: { title: string; url: string }[] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, i) => {
        const videoId = getYouTubeId(item.url);
        return (
          <motion.div
            key={i}
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden border border-border bg-secondary">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-snug">{item.title}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          Talks & Media
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Shaping the ecosystem
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Tabs defaultValue="media" className="w-full mt-10">
            <TabsList className="bg-secondary mb-10 p-1 rounded-full flex-wrap h-auto gap-1">
              <TabsTrigger value="media" className="rounded-full px-5 text-sm">Media & Talks</TabsTrigger>
              <TabsTrigger value="peepaneip" className="rounded-full px-5 text-sm">PEEPanEIP</TabsTrigger>
            </TabsList>
            <TabsContent value="media">
              <VideoGrid items={mediaTalks} />
            </TabsContent>
            <TabsContent value="peepaneip">
              <VideoGrid items={peepanEIP} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
