import { Mail, ArrowRight } from "lucide-react";
import SocialIcons from "./SocialIcons";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Have an interesting project?
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          For collaborations, speaking engagements, research initiatives, or protocol coordination discussions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:contact@etherworld.co"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity group"
          >
            <Mail size={16} />
            contact@etherworld.co
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:team@ethcatherders.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            <Mail size={16} />
            team@ethcatherders.com
          </a>
        </div>

        <SocialIcons className="justify-center" />
      </div>
    </div>
  </section>
);

export default ContactSection;
