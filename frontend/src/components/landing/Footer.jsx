import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';

const shopLinks = [
  { label: 'Anti Cellulite Massage Oil', url: 'https://puralivn.com/products/anti-cellulite-massage-oil-240ml' },
  { label: 'Face Lifting Device', url: 'https://puralivn.com/products/microcurrent-face-lifting-device-sonic-skin-tightening-anti-aging' },
  { label: 'Cellulite Massager Roller', url: 'https://puralivn.com/products/manual-cellulite-massager-roller-2-in-1-muscle-leg-massager' },
  { label: 'Sculpting Kit', url: 'https://puralivn.com/products/anti-cellulite-sculpting-oil-massager-kit' },
  { label: 'All Products', url: 'https://puralivn.com/collections/all' },
];

const companyLinks = [
  { label: 'About Us', url: '#mission-section' },
  { label: 'Blog', url: 'https://puralivn.com/blogs/news', external: true },
  { label: 'Contact', url: '#contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-medium mb-4 text-[hsl(var(--gold))]">
              Pura Livn
            </h3>
            <p className="font-body text-sm text-[hsl(var(--primary-foreground)/0.7)] leading-relaxed">
              Empowering confidence through self-care. Premium body care products for your daily beauty ritual.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-[hsl(var(--gold))] mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-sm text-[hsl(var(--primary-foreground)/0.7)] hover:text-[hsl(var(--gold))] transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--gold)/0.4)] flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-[hsl(var(--gold))] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="font-body text-sm text-[hsl(var(--primary-foreground)/0.7)] hover:text-[hsl(var(--gold))] transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--gold)/0.4)] flex-shrink-0" />
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3 ml-0.5" strokeWidth={1.5} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Newsletter CTA */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-[hsl(var(--gold))] mb-5">
              Stay Connected
            </h4>
            <p className="font-body text-sm text-[hsl(var(--primary-foreground)/0.7)] leading-relaxed mb-4">
              Follow us for skincare tips, exclusive offers, and self-care inspiration.
            </p>
            <div className="flex gap-3">
              <a
                href="https://puralivn.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[hsl(var(--gold)/0.3)] flex items-center justify-center hover:bg-[hsl(var(--gold)/0.15)] transition-colors duration-200"
                aria-label="Visit Pura Livn website"
              >
                <ExternalLink className="w-4 h-4 text-[hsl(var(--gold))]" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-[hsl(var(--primary-foreground)/0.1)]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[hsl(var(--primary-foreground)/0.5)]">
          <p>&copy; {currentYear} Pura Livn LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://puralivn.com/policies/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[hsl(var(--gold))] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://puralivn.com/policies/terms-of-service"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[hsl(var(--gold))] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://puralivn.com/policies/refund-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[hsl(var(--gold))] transition-colors"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
