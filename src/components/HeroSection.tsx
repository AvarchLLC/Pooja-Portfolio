import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] max-w-4xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Building Ethereum is hard.
        <br />
        Coordinating the{" "}
        <span className="text-accent italic">protocol</span>{" "}
        is harder.
        <br />
        That's what Pooja does.
      </h1>

      <a
        href="#work"
        className="inline-flex items-center gap-2 mt-10 px-6 py-3 border border-foreground rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
      >
        See contributions
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </section>
);

export default HeroSection;
