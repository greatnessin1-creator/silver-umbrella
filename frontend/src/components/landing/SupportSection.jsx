import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const SupportSection = () => {
  return (
    <section
      data-testid="support-section"
      className="relative bg-[hsl(var(--background))]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden border border-[hsl(var(--gold)/0.15)] shadow-[0_20px_60px_-20px_rgba(20,16,12,0.25)]">
              <img
                src="https://puralivn.com/cdn/shop/files/ai-banner-aboutUsImage-69b80a0056a02.webp?v=1773668867&width=1000"
                alt="Woman enjoying Pura Livn self-care ritual with massage oil"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--gold))] mb-4">
              Your Ritual Awaits
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))] mb-6 leading-tight">
              Designed to Support Real Health & Fitness Goals
            </h2>
            <div className="gold-line mb-8" />
            <p className="font-display italic text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              The massage oil deeply hydrates and nourishes skin, while the sculpting massager
              enhances absorption and stimulates the skin's surface — working together to help
              skin look smoother, firmer, and more refreshed with consistent use.
            </p>
            <Button
              data-testid="support-section-cta"
              asChild
              className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.92)] rounded-xl px-8 py-6 text-sm font-body font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              <a
                href="https://puralivn.com/products/anti-cellulite-sculpting-oil-massager-kit"
                target="_blank"
                rel="noreferrer"
                aria-label="Get the Sculpting Oil and Massager Kit"
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
