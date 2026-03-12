import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  { degree: "M.Com", institution: "Institute of Management Education, India", period: "2003 – 2005" },
  { degree: "PGDM — Marketing & HR", institution: "Institute of Management Education, India", period: "2003 – 2005" },
  { degree: "B.Sc Computer Science", institution: "Magadh University", period: "1998 – 2001" },
  { degree: "Secondary Education", institution: "Kendriya Vidyalaya", period: "1985 – 1997" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          Education
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Academic background
        </motion.h2>

        <div className="space-y-0">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 py-5 border-b border-border last:border-b-0"
            >
              <div className="md:w-32 flex-shrink-0 text-xs text-muted-foreground font-medium">{edu.period}</div>
              <div>
                <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
