import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica K.',
    headline: 'This changed how I feel about my body.',
    quote:
      'The oil plus the massager together make such a difference. My skin looks more even, and I feel so much more confident wearing shorts again.',
  },
  {
    name: 'Maria G.',
    headline: 'Worth every single penny.',
    quote:
      "It feels like a spa treatment at home. After a few weeks, my skin looks healthier and smoother\u2014and it's such a relaxing part of my day now.",
  },
  {
    name: 'Melissa R.',
    headline: 'I finally feel confident again.',
    quote:
      "I didn't expect to love this as much as I do. My skin looks smoother, feels firmer, and this has become my favorite self-care ritual. I actually look forward to using it.",
  },
];

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 star-filled"
        strokeWidth={0}
        fill="currentColor"
      />
    ))}
  </div>
);

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      data-testid="testimonials-section"
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
            Real Results
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))]">
            Real People, Real Confidence
          </h2>
          <div className="rose-line mx-auto mt-6" />
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              data-testid="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.2)] transition-all duration-300 hover:border-[hsl(var(--rose-primary)/0.35)] h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-[hsl(var(--rose-primary)/0.3)] mb-4" strokeWidth={1} />
                  <StarRating />
                  <h3 className="font-display text-lg font-medium text-[hsl(var(--foreground))] mt-4 mb-3">
                    "{t.headline}"
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]">
                    <p className="font-body text-sm font-semibold text-[hsl(var(--foreground))]">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-[hsl(var(--rose-primary))]">
                      Verified Customer
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              data-testid="testimonial-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.2)]">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[hsl(var(--rose-primary)/0.3)] mb-4" strokeWidth={1} />
                  <StarRating />
                  <h3 className="font-display text-lg font-medium text-[hsl(var(--foreground))] mt-4 mb-3">
                    "{testimonials[current].headline}"
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]">
                    <p className="font-body text-sm font-semibold text-[hsl(var(--foreground))]">
                      {testimonials[current].name}
                    </p>
                    <p className="font-body text-xs text-[hsl(var(--rose-primary))]">
                      Verified Customer
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--rose-primary)/0.35)] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    i === current
                      ? 'bg-[hsl(var(--rose-primary))]'
                      : 'bg-[hsl(var(--border))]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--rose-primary)/0.35)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
