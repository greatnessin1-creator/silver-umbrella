import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export const SupportSection = () => {
  return (
    <section
      data-testid="support-section"
      className="relative bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden border border-[hsl(var(--rose-primary)/0.12)] shadow-[0_20px_60px_-20px_rgba(20,16,12,0.2)] bg-[linear-gradient(160deg,#fff_0%,#fdf5f8_55%,#f8e7ee_100%)] min-h-[420px] flex items-center justify-center p-8">
              <div className="max-w-md text-center">
                <h3 className="font-display text-3xl text-[hsl(var(--foreground))] mb-4">
                  Calm Support, Simple Routine
                </h3>
                <p className="font-body text-[hsl(var(--muted-foreground))] leading-relaxed">
                  A clean addition to your daily routine designed to support rest, recovery, and overall balance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))] mb-4">
              Daily Wellness Support
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))] mb-6 leading-tight">
              Designed to Support Calm, Rest, and Everyday Balance
            </h2>
            <div className="rose-line mb-8" />
            <p className="font-display italic text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              Magnesium Glycinate Capsules are formulated to support relaxation, muscle function,
              restful sleep, and daily wellness in one simple routine.
            </p>
            <Button
              data-testid="support-section-cta"
              asChild
              className="bg-[hsl(var(--rose-medium))] text-white hover:bg-[hsl(var(--rose-medium)/0.9)] rounded-xl px-8 py-6 text-sm font-body font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              <a
                href="https://puralivn.com/products/magnesium-glycinate-capsules-90-count-daily-supplement"
                aria-label="Get Magnesium Glycinate Capsules"
              >
                Get Yours Today
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.75} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
