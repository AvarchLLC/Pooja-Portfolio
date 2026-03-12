import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      {/* Glow effect under the bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[8px] bg-gradient-primary z-[99] origin-left blur-[6px]"
        style={{ scaleX, opacity: glowOpacity }}
      />
    </>
  );
};

export default ScrollProgress;
