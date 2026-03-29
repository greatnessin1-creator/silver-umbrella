import { motion } from 'framer-motion';

export const Mission = () => {
  return (
    <section
      id="mission-section"
      data-testid="mission-section"
      className="relative bg-white"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))] mb-4"
        >
          Why Pura Livn
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))] mb-6"
        >
          Simple Wellness You Can Actually Stick With
        </motion.h2>

        <div className="rose-line mx-auto mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="font-body text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-3xl mx-auto"
        >
          We believe daily routines should feel simple, supportive, and realistic. Our magnesium formula
          is designed to fit easily into your day while supporting rest, recovery, and everyday balance.
        </motion.p>
      </div>
    </section>
  );
};
