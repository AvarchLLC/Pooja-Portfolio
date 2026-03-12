import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Com",
    institution: "Institute of Management Education, India",
    period: "2003 – 2005",
  },
  {
    degree: "PGDM — Marketing & HR",
    institution: "Institute of Management Education, India",
    period: "2003 – 2005",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Magadh University",
    period: "1998 – 2001",
  },
  {
    degree: "Secondary Education",
    institution: "Kendriya Vidyalaya",
    period: "1985 – 1997",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px line-gradient" />
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

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-glass rounded-2xl p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:glow-warm transition-shadow duration-500">
                  <GraduationCap size={22} className="text-accent-warm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
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
