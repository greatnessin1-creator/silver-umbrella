import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowUpRight } from 'lucide-react';

const highlights = [
  {
    tag: 'Daily Routine',
    title: 'Why consistency matters more than complexity',
    body: 'The best wellness routines are the ones you can actually stick with. Simplicity wins over doing too much at once.',
  },
  {
    tag: 'Evening Support',
    title: 'How to build a calmer nighttime routine',
    body: 'A consistent wind-down routine can help support relaxation and make evenings feel more structured and intentional.',
  },
];

export const BlogHighlights = () => {
  return (
    <section
      data-testid="blog-section"
      className="relative bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))] mb-4">
              Wellness Notes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))]">
              Simple Support for Better Daily Habits
            </h2>
            <div className="rose-line mt-6" />
          </div>

          <a
            href="https://puralivn.com/products/magnesium-glycinate-capsules-90-count-daily-supplement"
            className="font-body text-sm text-[hsl(var(--rose-primary))] animated-underline inline-flex items-center gap-1"
          >
            Shop now
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.18)] h-full">
                <CardContent className="p-6 sm:p-8">
                  <Badge className="bg-[hsl(var(--rose-soft))] text-[hsl(var(--plum))] border-none font-body text-xs font-medium px-3 py-1 mb-4">
                    {item.tag}
                  </Badge>
                  <h3 className="font-display text-2xl font-medium text-[hsl(var(--foreground))] mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {item.body}
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
