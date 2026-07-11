const AnimatedBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-64 left-[8%] h-[520px] w-[520px] rounded-full bg-accent/[0.035] blur-[150px]" />
      <div className="absolute bottom-[5%] right-[2%] h-[460px] w-[460px] rounded-full bg-accent-cyan/[0.03] blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 0%, hsl(var(--background)) 78%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
