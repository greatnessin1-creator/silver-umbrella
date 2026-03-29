import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    quote: 'Part of my nightly routine now.',
    body: 'I wanted something simple I could actually stay consistent with. This has been easy to take and fits my evening routine really well.',
    name: 'Amanda L.',
  },
  {
    quote: 'Exactly the kind of support I was looking for.',
    body: 'I was looking for a magnesium product that felt straightforward and easy to use. This one has been a great fit for me.',
    name: 'Jessica R.',
  },
  {
    quote: 'Simple, clean, easy routine.',
    body: 'I like that it doesn’t overcomplicate things. Just a simple daily supplement that supports my overall wellness goals.',
    name: 'Melissa T.',
  },
];

export const Testimonials = () => {
  return (
    <section
      data-testid="testimonials-section"
      className="relative bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))] mb-4">
            Customer Feedback
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))]">
            Real Routines, Real Consistency
          </h2>
          <div className="rose-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.18)] h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="text-[hsl(var(--rose-primary))] text-2xl mb-4">★★★★★</div>
                  <h3 className="font-display text-xl font-medium text-[hsl(var(--foreground))] mb-3">
                    “{item.quote}”
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6 flex-1">
                    {item.body}
                  </p>
                  <div className="border-t border-[hsl(var(--border))] pt-4">
                    <p className="font-body text-sm font-semibold text-[hsl(var(--foreground))]">{item.name}</p>
                    <p className="font-body text-xs text-[hsl(var(--rose-primary))]">Verified Customer</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
