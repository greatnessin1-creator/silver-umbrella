import { useState } from 'react';
import { Copy, Check, Truck, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const PromoBar = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText('FIRSTORDER10');
      setCopied(true);
      toast.success('Promo code copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div
      data-testid="promo-bar"
      className="sticky top-0 z-50 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] border-b border-[hsl(var(--gold)/0.2)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2" data-testid="free-shipping-text">
            <Truck className="w-4 h-4 text-[hsl(var(--gold))]" strokeWidth={1.5} />
            <span className="font-body tracking-wide">FREE SHIPPING on all orders</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-1.5 text-[hsl(var(--gold))]">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">First order?</span>
            <span data-testid="promo-code-text" className="font-semibold tracking-wider text-[hsl(var(--gold))]">
              Save 10% with code FIRSTORDER10
            </span>
            <button
              data-testid="promo-code-copy-button"
              onClick={copyCode}
              className="ml-1 p-1 rounded-md hover:bg-white/10 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold)/0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--primary))]"
              aria-label="Copy promo code FIRSTORDER10"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
