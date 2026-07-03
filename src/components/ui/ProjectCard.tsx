import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const statusConfig: Record<Project["status"], { label: string; color: string }> = {
  live: { label: "Live", color: "bg-accent-emerald/15 text-accent-emerald" },
  "in-progress": { label: "In Progress", color: "bg-accent-blue/15 text-accent-blue" },
  "hackathon-build": { label: "Hackathon Build", color: "bg-accent-violet/15 text-accent-violet" },
  "demo-down": { label: "Demo Down", color: "bg-white/10 text-white/60" },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative bg-surface border border-white/[0.06] rounded-2xl p-6 flex flex-col h-full hover:border-accent-blue/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
    >
      {/* Top bar */}
      <div className="flex items-start justify-between mb-3 gap-3">
        <h3 className="text-foreground font-semibold text-lg tracking-tight">{project.title}</h3>
        <span className={`shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full ${status.color}`}>
          {status.label}
        </span>
      </div>

      <p className="text-accent-blue/80 text-sm font-medium mb-2.5">{project.tagline}</p>
      <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">{project.problem}</p>

      {/* Role */}
      <div className="mb-4">
        <p className="text-white/30 text-[11px] font-semibold tracking-widest uppercase mb-1.5">My Role</p>
        <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{project.role}</p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2 py-1 rounded-md bg-background text-white/50 border border-white/[0.04]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <p className="text-white/40 text-sm italic leading-relaxed mb-5 flex-1">
        &ldquo;{project.outcome}&rdquo;
      </p>

      {/* Links */}
      <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/50 text-sm hover:text-white transition-colors group/link"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Code</span>
            <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/50 text-sm hover:text-white transition-colors group/link"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
            <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
