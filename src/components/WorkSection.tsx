import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const videos = {
  media: [
    { id: "dQw4w9WgXcQ", title: "Ethereum All Core Devs Update" },
    { id: "9bZkp7q19f0", title: "PEEPanEIP Session" },
    { id: "kJQP7kiw5Fk", title: "EIP Process Explained" },
    { id: "JGwWNGJdvx8", title: "Network Upgrade Overview" },
    { id: "RgKAFK5djSk", title: "Ethereum Governance Talk" },
    { id: "YQHsXMglC9A", title: "Protocol Coordination Deep Dive" },
    { id: "fJ9rUzIMcZQ", title: "Community Call Highlights" },
    { id: "OPf0YbXqDm0", title: "Ethereum Ecosystem Update" },
  ],
  educational: [
    { id: "dQw4w9WgXcQ", title: "Blockchain 101 Workshop" },
    { id: "9bZkp7q19f0", title: "Understanding EIPs" },
    { id: "kJQP7kiw5Fk", title: "Smart Contract Basics" },
    { id: "JGwWNGJdvx8", title: "Ethereum for Beginners" },
  ],
  coordination: [
    { id: "RgKAFK5djSk", title: "ACD Coordination Call" },
    { id: "YQHsXMglC9A", title: "Hard Fork Planning" },
    { id: "fJ9rUzIMcZQ", title: "EIP Editors Meeting" },
    { id: "OPf0YbXqDm0", title: "Upgrade Retrospective" },
  ],
};

const VideoGrid = ({ items }: { items: typeof videos.media }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
    {items.map((v, i) => (
      <a
        key={`${v.id}-${i}`}
        href={`https://www.youtube.com/watch?v=${v.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-72 group"
      >
        <div className="rounded-lg overflow-hidden bg-secondary aspect-video">
          <img
            src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
            alt={v.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
          {v.title}
        </p>
      </a>
    ))}
  </div>
);

const WorkSection = () => (
  <section id="work" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
        Shaping the Ethereum Ecosystem
      </h2>

      <Tabs defaultValue="media" className="w-full">
        <TabsList className="bg-secondary mb-8">
          <TabsTrigger value="media">Media & Talks</TabsTrigger>
          <TabsTrigger value="educational">Educational</TabsTrigger>
          <TabsTrigger value="coordination">Protocol Coordination</TabsTrigger>
        </TabsList>
        <TabsContent value="media">
          <VideoGrid items={videos.media} />
        </TabsContent>
        <TabsContent value="educational">
          <VideoGrid items={videos.educational} />
        </TabsContent>
        <TabsContent value="coordination">
          <VideoGrid items={videos.coordination} />
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default WorkSection;
