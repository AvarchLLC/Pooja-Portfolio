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
            Building Ethereum since 2016
          </h2>
        </div>

        {/* Right */}
        <div className="lg:w-3/5 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Pooja Ranjan has been an active contributor to the Ethereum ecosystem since 2016. She is the founder of Avarch LLC and EtherWorld, and currently serves as the President of ECH Institute Inc.
          </p>
          <p>
            Her work focuses on protocol coordination, community education, and making Ethereum's technical governance more accessible. She has contributed to over 100 EIPs and played a key role in coordinating multiple network upgrades.
          </p>
          <p>
            Through initiatives like EIPsInsight and Women in Ethereum Protocol, she advocates for transparency, inclusivity, and broader participation in Ethereum's development process.
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
