const stats = [
  { value: "9+", label: "Years in Ethereum" },
  { value: "6+", label: "Major Projects" },
  { value: "8+", label: "Network Upgrades" },
  { value: "100+", label: "EIP Contributions" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left */}
        <div className="lg:w-2/5">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Building Ethereum Since 2016
          </h2>
        </div>

        {/* Right */}
        <div className="lg:w-3/5 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Pooja became part of the blockchain community in 2016 when she began learning about the Ethereum blockchain.
          </p>
          <p>
            As President at ECH Institute Inc. and Founder of Avarch LLC, she has dedicated her career to supporting Ethereum protocol development and advancing blockchain awareness globally.
          </p>
          <p>
            She founded Avarch LLC in 2017, with EtherWorld as its first initiative. Through technical publishing, ecosystem updates, and protocol coverage, EtherWorld has grown into one of the leading independent blockchain media platforms.
          </p>
          <p>
            Pooja actively contributes to the Ethereum Improvement Proposal Improvement Process (EIPIP) and EIP analytics, publishing monthly EIP statistics reports. Through EIPsInsight and multiple coordination efforts, she continues supporting Ethereum network upgrades and protocol governance initiatives.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
