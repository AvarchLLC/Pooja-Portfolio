import { motion } from "framer-motion";

const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Animated gradient orbs */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px]"
      animate={{
        x: ["-10%", "10%", "-5%"],
        y: ["-10%", "15%", "-10%"],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      style={{ top: "10%", left: "20%" }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full bg-accent-cyan/[0.03] blur-[100px]"
      animate={{
        x: ["10%", "-15%", "10%"],
        y: ["10%", "-10%", "10%"],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      style={{ top: "50%", right: "10%" }}
    />
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full bg-accent-warm/[0.02] blur-[100px]"
      animate={{
        x: ["5%", "-10%", "5%"],
        y: ["-5%", "10%", "-5%"],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ bottom: "20%", left: "40%" }}
    />

    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);

export default AnimatedBackground;
