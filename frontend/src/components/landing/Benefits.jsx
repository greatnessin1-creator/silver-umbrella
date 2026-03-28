import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Hand, Droplets } from 'lucide-react';

const benefits = [
  {
    icon: Hand,
    title: 'Massage-Activated Results',
    description:
      'Pairs targeted massage with nourishing oil to help improve the appearance of uneven skin texture.',
  },
  {
    icon: Droplets,
    title: 'Collagen-Infused Hydration',
    description:
      'Deeply moisturizes skin to support a smoother, softer, more refreshed look.',
  },
  {
    icon: Sparkles,
    title: 'Boosts Circulation Feel',
    description:
      'Massage action helps stimulate the skin\'s surface for a revitalized, energized feel.',
  },
];

export const Benefits = () => {
  return (
    <section
      data-testid="benefits-section"
      className="relative bg-[hsl(var(--secondary))] noise-overlay"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))] mb-4">
            Why Pura Livn
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))]">
            The Science of Self-Care
          </h2>
          <div className="rose-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="group rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.2)] transition-all duration-300 hover:border-[hsl(var(--rose-primary)/0.35)] hover:shadow-[0_18px_50px_-26px_rgba(20,16,12,0.35)] h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[hsl(var(--rose-soft))] flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-[hsl(var(--rose-primary)/0.2)]">
                    <benefit.icon className="w-6 h-6 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-[hsl(var(--foreground))] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
