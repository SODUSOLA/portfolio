import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-blue/80 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12"
        >
          How I got here
        </motion.h2>

        <div className="relative">
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
