import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf } from 'lucide-react';

export const Mission = () => {
  return (
    <section
      id="mission-section"
      data-testid="mission-section"
      className="relative bg-[hsl(var(--sand))] noise-overlay"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Title + Mission */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--gold))] mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))] mb-6 leading-tight">
              Beauty Starts with Skincare
            </h2>
            <div className="gold-line mb-8" />
            <p className="font-display italic text-lg sm:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
              At PuraLivn, our mission is to empower confidence through self-care — creating
              products that nourish your skin, enhance your natural beauty, and make you feel
              your best every single day.
            </p>
          </motion.div>

          {/* Gold vertical rule */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
          </div>

          {/* Right: Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.35)] transition-colors duration-200 hover:border-[hsl(var(--gold)/0.35)]">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--gold-soft))] flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[hsl(var(--gold))]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-[hsl(var(--foreground))] mb-2">
                        Our Promise
                      </h3>
                      <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        Every product is crafted with intention — designed to support your self-care
                        ritual and help you feel radiant, confident, and deeply nourished.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.35)] transition-colors duration-200 hover:border-[hsl(var(--gold)/0.35)]">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--gold-soft))] flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-[hsl(var(--gold))]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-[hsl(var(--foreground))] mb-2">
                        Ingredients & Ritual
                      </h3>
                      <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        Collagen-infused, deeply moisturizing formulas paired with targeted massage
                        techniques for smoother, firmer, more refreshed skin.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
