import { Button } from "@/components/ui/button";
import SocialIcons from "./SocialIcons";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16">
    <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
      {/* Profile photo */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary flex-shrink-0 overflow-hidden border-2 border-border">
        <img
          src="https://pbs.twimg.com/profile_images/1590379858498662400/i3Ie19xE_400x400.jpg"
          alt="Pooja Ranjan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Pooja Ranjan
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          President at ECH Institute Inc. — Protocol Coordinator — Blockchain Educator
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#contact">Get in Touch</a>
          </Button>
          <SocialIcons />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
