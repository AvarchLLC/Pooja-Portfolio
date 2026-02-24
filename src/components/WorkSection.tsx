import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const acdHighlights = [
  { title: "AllCoreDevs Call Highlights & Summaries", url: "#" },
];

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:v=|\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const VideoGrid = ({ items }: { items: { title: string; url: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item, i) => {
      const videoId = getYouTubeId(item.url);
      return (
        <div key={i} className="space-y-2">
          <div className="aspect-video rounded-lg overflow-hidden border border-border bg-card">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-muted-foreground">{item.title}</p>
        </div>
      );
    })}
  </div>
);

const WorkSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
  <section id="work" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Shaping the Ethereum Ecosystem
      </h2>

      <Tabs defaultValue="media" className="w-full mt-8">
        <TabsList className="bg-secondary mb-8">
          <TabsTrigger value="media">Media & Talks</TabsTrigger>
          <TabsTrigger value="peepaneip">PEEPanEIP Series</TabsTrigger>
          <TabsTrigger value="acd">AllCoreDevs Highlights</TabsTrigger>
        </TabsList>
        <TabsContent value="media">
          <p className="text-muted-foreground mb-6 text-sm">
            Presentations and discussions on Ethereum protocol development, blockchain education, and community coordination.
          </p>
          <VideoGrid items={mediaTalks} />
        </TabsContent>
        <TabsContent value="peepaneip">
          <p className="text-muted-foreground mb-6 text-sm">
            Educational series explaining Ethereum Improvement Proposals and their real-world protocol impact.
          </p>
          <VideoGrid items={peepanEIP} />
        </TabsContent>
        <TabsContent value="acd">
          <p className="text-muted-foreground mb-6 text-sm">
            Publishing highlights and summaries from Ethereum All Core Developers calls, supporting transparency in protocol discussions and upgrade coordination.
          </p>
          <div className="max-w-xl">
            <blockquote className="twitter-tweet" data-theme="dark">
              <a href="https://x.com/poojaranjan19/status/1958529528927515092">Loading tweet...</a>
            </blockquote>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
  );
};

export default WorkSection;
