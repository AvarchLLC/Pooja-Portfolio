import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const mediaTalks = [
  { title: "Women in Blockchain Panel Discussion", url: "#" },
  { title: "EDCON 2021 Keynote | The Future of Ethereum with EIPs", url: "#" },
  { title: "Opportunities in Web3 @ ETHWMN", url: "#" },
  { title: "Founder, EtherWorld & Herder-in-Chief, Ethereum Cat Herders", url: "#" },
  { title: "The Importance of Education & Diversity in Protocol Development | EDCON 2025", url: "#" },
];

const peepanEIP = [
  { title: "PEEPanEIP #142 — EIP-7706 Separate Gas Type for Calldata (with Vitalik Buterin)", url: "#" },
  { title: "PEEPanEIP #154 — EIP-7892 Blob Parameter Only Hardforks (with Mark Mackey)", url: "#" },
  { title: "PEEPanEIP #46 — Verkle Tries for Ethereum State (with Dankrad Feist)", url: "#" },
  { title: "PEEPanEIP #153 — EIP-7939 CLZ Opcode (with Vectorized)", url: "#" },
];

const acdHighlights = [
  { title: "AllCoreDevs Call Highlights & Summaries", url: "#" },
];

const LinkList = ({ items }: { items: { title: string; url: string }[] }) => (
  <div className="space-y-3">
    {items.map((item, i) => (
      <a
        key={i}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300"
      >
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          {item.title}
        </span>
        <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-3" />
      </a>
    ))}
  </div>
);

const WorkSection = () => (
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
          <LinkList items={mediaTalks} />
        </TabsContent>
        <TabsContent value="peepaneip">
          <p className="text-muted-foreground mb-6 text-sm">
            Educational series explaining Ethereum Improvement Proposals and their real-world protocol impact.
          </p>
          <LinkList items={peepanEIP} />
        </TabsContent>
        <TabsContent value="acd">
          <p className="text-muted-foreground mb-6 text-sm">
            Publishing highlights and summaries from Ethereum All Core Developers calls, supporting transparency in protocol discussions and upgrade coordination.
          </p>
          <LinkList items={acdHighlights} />
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default WorkSection;
