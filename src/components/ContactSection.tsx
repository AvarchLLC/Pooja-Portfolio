import { Mail } from "lucide-react";
import SocialIcons from "./SocialIcons";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's Connect
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          For collaborations, speaking engagements, research initiatives, or protocol coordination discussions:
        </p>

        <div className="space-y-3 mb-8">
          <a
            href="mailto:contact@etherworld.co"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span>contact@etherworld.co</span>
          </a>
          <a
            href="mailto:team@ethcatherders.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span>team@ethcatherders.com</span>
          </a>
        </div>

        <SocialIcons />
      </div>
    </div>
  </section>
);

export default ContactSection;
