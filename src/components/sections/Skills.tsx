import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-surface/30 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-blue/80 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12"
        >
          What I work with
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-surface border border-white/[0.04] rounded-2xl p-5"
            >
              <p className="text-white/30 text-[10px] font-semibold tracking-[0.15em] uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <SkillBadge key={skill} label={skill} index={j} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
