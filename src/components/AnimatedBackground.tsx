import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const generateParticles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

const AnimatedBackground = () => {
  const [particles] = useState(() => generateParticles(40));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[150px]"
        animate={{
          x: ["-15%", "15%", "-10%", "5%"],
          y: ["-10%", "20%", "-5%", "15%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "5%", left: "15%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent-cyan/[0.04] blur-[130px]"
        animate={{
          x: ["10%", "-20%", "15%", "-5%"],
          y: ["15%", "-15%", "10%", "-10%"],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "45%", right: "5%" }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-accent-warm/[0.03] blur-[120px]"
        animate={{
          x: ["5%", "-15%", "10%"],
          y: ["-8%", "12%", "-8%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", left: "35%" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [0, 0.6, 0.3, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(var(--background)) 75%)`,
          opacity: 0.4,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
