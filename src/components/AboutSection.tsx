import poojaPfp from "@/assets/pooja-pfp.png";

const stats = [
  { value: "9+", label: "Years in Ethereum" },
  { value: "6+", label: "Major Projects" },
  { value: "8+", label: "Network Upgrades" },
  { value: "100+", label: "EIP Contributions" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {s.value}
            </div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/3">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden">
            <img
              src={poojaPfp}
              alt="Pooja Ranjan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-2/3 space-y-5 text-muted-foreground leading-relaxed text-base">
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
    </div>
  </section>
);

export default AboutSection;
