import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const products = [
  {
    name: 'Anti Cellulite Massage Oil',
    subtitle: 'Smooth, Firm-Looking Skin',
    price: '$24.99',
    badge: 'Bestseller',
    image: 'https://puralivn.com/cdn/shop/files/aca4686f-8772-4e1d-9fe4-f39d7c32350b_27f45b90-1589-476c-8ba8-f2d03b8c29ca.png?v=1774386503&width=600',
    url: 'https://puralivn.com/products/anti-cellulite-massage-oil-240ml',
    alt: 'Anti Cellulite Massage Oil for Smooth, Firm-Looking Skin by Pura Livn',
  },
  {
    name: 'Microcurrent Face Lifting Device',
    subtitle: 'Sonic Skin Tightening',
    price: '$39.99',
    badge: 'New',
    image: 'https://puralivn.com/cdn/shop/files/S233ef6114b4b41ce9789fdf25d34267dt.webp?v=1773522612&width=600',
    url: 'https://puralivn.com/products/microcurrent-face-lifting-device-sonic-skin-tightening-anti-aging',
    alt: 'Microcurrent Face Lifting Device for Anti-Aging by Pura Livn',
  },
  {
    name: '2-in-1 Cellulite Massager Roller',
    subtitle: 'Deep Tissue Massage',
    price: '$39.99',
    badge: null,
    image: 'https://puralivn.com/cdn/shop/files/S6ffd7b7f2c8740be9561a5aa89c22b8eG.webp?v=1773852180&width=600',
    url: 'https://puralivn.com/products/manual-cellulite-massager-roller-2-in-1-muscle-leg-massager',
    alt: '2-in-1 Cellulite Massager Roller by Pura Livn',
  },
  {
    name: 'Sculpting Oil + Massager Kit',
    subtitle: 'Complete Ritual Set',
    price: 'View Price',
    badge: 'Bundle',
    image: 'https://puralivn.com/cdn/shop/files/c23bba7e-60fe-4748-96cb-5ef09da10468.png?v=1774386390&width=600',
    url: 'https://puralivn.com/products/anti-cellulite-sculpting-oil-massager-kit',
    alt: 'Anti Cellulite Sculpting Oil and Massager Kit by Pura Livn',
  },
];

export const FeaturedProducts = () => {
  return (
    <section
      id="featured-products"
      data-testid="featured-products-section"
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
            Our Collection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))]">
            Featured Products
          </h2>
          <div className="rose-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              data-testid="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.2)] transition-all duration-300 hover:border-[hsl(var(--rose-primary)/0.35)] hover:shadow-[0_18px_50px_-26px_rgba(20,16,12,0.35)] h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="aspect-[4/5] bg-[hsl(var(--secondary))]">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-[hsl(var(--rose-soft))] text-[hsl(var(--plum))] border-none font-body text-xs font-medium px-3 py-1">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-medium text-[hsl(var(--foreground))] mb-1 leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))] mb-3">
                    {product.subtitle}
                  </p>
                  <p className="font-body text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
                    {product.price}
                  </p>
                  <div className="mt-auto">
                    <Button
                      data-testid="product-card-shop-link"
                      asChild
                      className="w-full bg-[hsl(var(--rose-medium))] text-white hover:bg-[hsl(var(--rose-medium)/0.9)] rounded-xl py-5 text-sm font-body font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Shop ${product.name} on Pura Livn`}
                      >
                        Shop Now
                        <ExternalLink className="w-3.5 h-3.5 ml-2" strokeWidth={1.75} />
                      </a>
                    </Button>
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
