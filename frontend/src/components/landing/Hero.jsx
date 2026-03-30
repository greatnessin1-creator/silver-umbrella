import { Button } from '../ui/button';
import { ArrowRight, Shield, Truck, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,207,232,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">

            <p className="text-xs uppercase tracking-[0.25em] text-rose-400">
              Pura Livn Wellness & Beauty
            </p>

            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Feel Better in Your Body,
              <span className="block text-rose-500 italic mt-2">
                Every Day.
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Simple wellness and beauty essentials designed to support calm,
              confidence, and everyday self-care — so your routine feels as good
              as it looks.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 rounded-xl text-sm font-semibold"
              >
                <a href="https://puralivn.com/products/magnesium-glycinate-capsules-90-count-daily-supplement">
                  Shop Best Sellers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-rose-200 text-gray-900 hover:bg-rose-50 px-8 py-6 rounded-xl text-sm font-semibold"
              >
                <a href="https://puralivn.com/products/magnesium-glycinate-capsules-90-count-daily-supplement">
                  Explore Wellness
                </a>
              </Button>
            </div>

            {/* TRUST ROW */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-rose-400" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-400" />
                Premium Wellness Essentials
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-rose-400" />
                Secure Checkout
              </div>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-rose-100 bg-white">

              <img
                src="/hero-wellness.jpg"
                alt="Pura Livn wellness lifestyle"
                className="w-full h-[520px] object-cover brightness-105 contrast-95"
                loading="eager"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
