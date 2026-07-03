import { motion } from "framer-motion";
import type { TimelineEntry } from "@/data/timeline";

export default function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-[3.5px] top-2 bottom-0 w-px bg-white/[0.06] last:hidden" />

      {/* Dot */}
      <span
        className={`absolute left-0 top-2 w-[9px] h-[9px] rounded-full border-2 ${
          entry.current
            ? "bg-background border-accent-emerald shadow-[0_0_12px_rgba(16,185,129,0.3)]"
            : "bg-background border-white/30"
        }`}
      />

      <p className="text-accent-blue/80 text-[11px] font-medium tracking-widest uppercase mb-1">
        {entry.period}
      </p>
      <h3 className="text-white font-semibold text-base">{entry.title}</h3>
      <p className="text-white/40 text-sm mb-2">{entry.org}</p>
      <p className="text-white/50 text-sm leading-relaxed">{entry.description}</p>
    </motion.div>
  );
}
