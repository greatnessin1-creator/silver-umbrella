import { motion } from 'framer-motion';
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Best Time to Use Body Oil for Maximum Results',
    excerpt:
      "If you're using body oil as part of your routine, timing can make a noticeable difference in your results. Want a simple daily routine? Check out our guide...",
    category: 'Skincare Tips',
    url: 'https://puralivn.com/blogs/news/best-time-to-use-body-oil-for-maximum-results',
    image:
      'https://puralivn.com/cdn/shop/articles/1aca2506-d84e-4e7b-a2fa-6051ba5e1b58.png?v=1774019746&width=600',
    alt: 'Best Time to Use Body Oil for Maximum Results - Pura Livn Blog',
  },
  {
    title: 'Body Oil vs Lotion: Which Is Better for Smooth Skin?',
    excerpt:
      'When it comes to improving the appearance of your skin, one common question is whether body oil or lotion is the better option. Both have benefits...',
    category: 'Body Care',
    url: 'https://puralivn.com/blogs/news/body-oil-vs-lotion-which-is-better-for-smooth-skin',
    image:
      'https://puralivn.com/cdn/shop/articles/S0bf0d340b6e94ae1b4376db6f850ec30O_5dd470ad-0793-4d37-af3b-0c8c341a50ef.webp?v=1774019900&width=600',
    alt: 'Body Oil vs Lotion: Which Is Better for Smooth Skin - Pura Livn Blog',
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
              From Our Blog
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))]">
              Self-Care Insights
            </h2>
            <div className="rose-line mt-6" />
          </div>
          <a
            href="https://puralivn.com/blogs/news"
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm text-[hsl(var(--rose-primary))] animated-underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            View all posts
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              data-testid="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                data-testid="blog-read-link"
                aria-label={`Read: ${post.title}`}
              >
                <Card className="group rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.2)] transition-all duration-300 hover:border-[hsl(var(--rose-primary)/0.35)] hover:shadow-[0_18px_50px_-26px_rgba(20,16,12,0.35)] overflow-hidden h-full">
                  <div className="overflow-hidden">
                    <div className="aspect-[16/9] bg-[hsl(var(--secondary))]">
                      <img
                        src={post.image}
                        alt={post.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <Badge className="bg-[hsl(var(--rose-soft))] text-[hsl(var(--plum))] border-none font-body text-xs font-medium px-3 py-1 mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-display text-xl font-medium text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--rose-primary))] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 font-body text-sm text-[hsl(var(--rose-primary))] animated-underline">
                      Read article
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
