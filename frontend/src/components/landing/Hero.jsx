import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Shield, Truck, RefreshCcw } from 'lucide-react';

export const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section
      data-testid="hero-section"
      className="relative overflow-hidden bg-white"
    >
      {/* Decorative gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,hsl(var(--rose-soft)/0.4),transparent_55%),radial-gradient(900px_circle_at_80%_30%,hsl(var(--pink-accent)/0.2),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-6"
            >
              <motion.p
                custom={0}
                variants={fadeUp}
                className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))]"
              >
                Premium Body Care
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.1] text-[hsl(var(--foreground))]"
              >
                Empowering Confidence Through{' '}
                <span className="italic text-[hsl(var(--rose-primary))]">Self-Care</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="font-body text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-lg"
              >
                Discover our signature anti-cellulite massage oil — nourishing your skin,
                enhancing your natural beauty, and making you feel your best every single day.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  data-testid="hero-primary-cta"
                  asChild
                  className="bg-[hsl(var(--rose-medium))] text-white hover:bg-[hsl(var(--rose-medium)/0.9)] rounded-xl px-8 py-6 text-sm font-body font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
                >
                  <a
                    href="https://puralivn.com/products/anti-cellulite-massage-oil-240ml"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Shop our bestselling Anti Cellulite Massage Oil"
                  >
                    Shop Bestsellers
                    <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.75} />
                  </a>
                </Button>

                <Button
                  data-testid="hero-secondary-cta"
                  variant="outline"
                  className="border-[hsl(var(--rose-primary)/0.35)] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--rose-soft)/0.5)] rounded-xl px-8 py-6 text-sm font-body font-medium tracking-wide transition-all duration-200 active:scale-[0.98]"
                  onClick={() => {
                    document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn the Ritual
                </Button>
              </motion.div>

              {/* Trust row */}
              <motion.div
                custom={4}
                variants={fadeUp}
                className="flex flex-wrap gap-6 mt-6 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-body"
              >
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCcw className="w-4 h-4 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                  <span>30-Day Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                  <span>Secure Checkout</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(20,16,12,0.25)] border border-[hsl(var(--rose-primary)/0.12)]">
              <img
                src="https://puralivn.com/cdn/shop/files/ai-banner-heroImage-69b80a00569fc.webp?v=1773668867&width=1200"
                alt="Pura Livn Anti-Cellulite Massage Oil and body care products"
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
              />
              {/* Pink corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[hsl(var(--rose-primary)/0.12)] to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[hsl(var(--rose-primary)/0.08)] to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
