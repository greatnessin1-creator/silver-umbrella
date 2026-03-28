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
      className="sticky top-0 z-50 bg-[hsl(var(--rose-medium))] text-white border-b border-white/10"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2" data-testid="free-shipping-text">
            <Truck className="w-4 h-4 text-white/90" strokeWidth={1.5} />
            <span className="font-body tracking-wide">FREE SHIPPING on all orders</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-1.5 text-white/60">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">First order?</span>
            <span data-testid="promo-code-text" className="font-semibold tracking-wider text-white">
              Save 10% with code FIRSTORDER10
            </span>
            <button
              data-testid="promo-code-copy-button"
              onClick={copyCode}
              className="ml-1 p-1 rounded-md hover:bg-white/15 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--rose-medium))]"
              aria-label="Copy promo code FIRSTORDER10"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-300" />
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
