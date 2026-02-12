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
          Whether you want to collaborate on Ethereum protocol development, explore educational partnerships, or just say hello — feel free to reach out.
        </p>

        <div className="space-y-3 mb-8">
          <a
            href="mailto:pooja@echinstitute.org"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span>pooja@echinstitute.org</span>
          </a>
          <a
            href="mailto:pooja@avarch.org"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span>pooja@avarch.org</span>
          </a>
        </div>

        <SocialIcons />
      </div>
    </div>
  </section>
);

export default ContactSection;
