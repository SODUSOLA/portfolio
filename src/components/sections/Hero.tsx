import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";

const roles = [
  "Fullstack Software Engineer",
  "Data Science Student",
  "ML Engineer in Training",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-blue/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-violet/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-accent-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-white/50 text-xs font-medium tracking-wide">
            Lagos, Nigeria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Oluwasemilore</span>
          <span className="text-white block sm:inline"> Odusola</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-8 flex items-center justify-center mb-6"
        >
          <span className="text-lg sm:text-xl text-white/60 font-medium">
            {displayText}
            <span className="inline-block w-[2px] h-5 ml-0.5 bg-accent-blue animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          I build scalable systems that hold up under real conditions &mdash; payment
          middleware that can&apos;t lose a transaction, auth that can&apos;t leak a
          session, queues that can&apos;t drop a job.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-accent-blue/90 transition-all duration-300 glow"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-surface border border-white/[0.08] text-white/80 px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/[0.04] hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white/50 px-6 py-3 rounded-xl font-medium text-sm hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
