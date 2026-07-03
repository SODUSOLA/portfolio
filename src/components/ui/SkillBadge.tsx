import { motion } from "framer-motion";

export default function SkillBadge({ label, index = 0 }: { label: string; index?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.05, y: -1 }}
      className="inline-block px-3.5 py-1.5 rounded-lg bg-surface border border-white/[0.06] text-white/70 text-sm hover:border-accent-blue/40 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.06)] transition-all duration-300 cursor-default"
    >
      {label}
    </motion.span>
  );
}
