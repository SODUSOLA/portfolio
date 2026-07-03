import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-blue/80 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8"
        >
          Backend-first, <span className="gradient-text">systems-minded</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 text-white/60 text-base sm:text-lg leading-relaxed"
        >
          <p>
            I&apos;m a fullstack software engineer based in Lagos, building production systems
            with Node.js, TypeScript, PostgreSQL, and Redis &mdash; currently deepening into
            Python and machine learning through a B.Sc. in Data Science at the University of
            Lagos.
          </p>
          <p>
            My focus is infrastructure that has to actually work under real conditions:
            payment systems that can&apos;t lose a transaction, auth flows that can&apos;t
            leak a session, queues that can&apos;t drop a job. I&apos;ve built fintech
            middleware for Nigeria&apos;s instant payment rails, subscription billing engines,
            and real-time incident systems handling concurrent multi-role traffic &mdash;
            usually as the sole backend developer on the team.
          </p>
          <p>
            I&apos;m not chasing polish for its own sake. I ship things that are documented,
            tested against edge cases, and deployed &mdash; not demos that only work on
            localhost. Right now I&apos;m building AEGIS, a subscription infrastructure layer
            for the Nomba ecosystem, while transitioning toward machine learning engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
