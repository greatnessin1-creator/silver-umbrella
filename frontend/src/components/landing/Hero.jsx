import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Shield, Truck, Moon } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          <p className="text-xs uppercase tracking-widest text-rose-400">
            Magnesium Glycinate Capsules
          </p>

          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Struggling to Sleep, Relax, or Recover?
            <span className="block text-rose-500 italic mt-2">
              Fix It With One Daily Habit.
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            This highly absorbable magnesium formula is designed to support deep sleep,
            calm your nervous system, and help your body recover faster — without grogginess.
          </p>
<p className="text-2xl font-semibold text-gray-900 mt-4">
  $29.99
</p>
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              asChild
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 rounded-xl text-sm font-semibold"
            >
              <a href="https://puralivn.com/products/magnesium-glycinate-capsules-90-count-daily-supplement">
                Get Better Sleep Tonight
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* TRUST ROW */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-rose-400" />
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-rose-400" />
              Supports Deep Sleep
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-rose-400" />
              30-Day Guarantee
            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/magnesium-ad.png"
              alt="Magnesium Capsules"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
