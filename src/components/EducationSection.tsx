import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "M.Com",
    institution: "Institute of Management Education, India",
    period: "2003 – 2005",
    icon: "🎓",
  },
  {
    degree: "PGDM — Marketing & HR",
    institution: "Institute of Management Education, India",
    period: "2003 – 2005",
    icon: "📊",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Magadh University",
    period: "1998 – 2001",
    icon: "💻",
  },
  {
    degree: "Secondary Education",
    institution: "Kendriya Vidyalaya",
    period: "1985 – 1997",
    icon: "📚",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.div
            className="w-12 h-px line-gradient"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Education</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Academic <span className="text-gradient-warm">Background</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -15px hsl(35 95% 52% / 0.1)", transition: { duration: 0.25 } }}
              className="bg-glass rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Hover gradient */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="text-2xl"
                  animate={inView ? { rotateY: [0, 360] } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  {edu.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent-warm transition-colors">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground/60">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
