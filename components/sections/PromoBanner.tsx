"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Flame, Clock, Sparkles, ShoppingBag, Copy, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { BURGERS } from "@/constants/burgers";

export const PromoBanner: React.FC = () => {
  const { addItem } = useCartStore();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("MIDNIGHT30");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaimCombo = () => {
    if (BURGERS.length > 0) {
      addItem(BURGERS[0], 1);
    }
  };

  return (
    <section id="offers" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-burger-red-700 via-primary to-accent text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-white/20">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-96 h-96 bg-black/40 rounded-full blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Deal Offer Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="discount" className="bg-amber-400 text-burger-gray-900 text-sm px-4 py-1">
                  🔥 LIMITED TIME SPECIAL OFFER
                </Badge>
                <span className="text-xs text-white/80 font-bold uppercase tracking-wider">
                  Ends Tonight!
                </span>
              </div>

              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
                MIDNIGHT SMASH <br />
                <span className="text-secondary drop-shadow-md">COMBO 30% OFF</span>
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-lg">
                Includes Double Royal Truffle Smash Burger, Hand-Cut Truffle Parmesan Fries, House Special Spicy Mayo, and Craft Beverage of your choice.
              </p>

              {/* Countdown Timer Boxes */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <span className="font-heading text-2xl text-secondary">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-white/70 uppercase">HOURS</span>
                </div>
                <span className="text-xl font-bold text-secondary">:</span>
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <span className="font-heading text-2xl text-secondary">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-white/70 uppercase">MINS</span>
                </div>
                <span className="text-xl font-bold text-secondary">:</span>
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <span className="font-heading text-2xl text-secondary">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-white/70 uppercase">SECS</span>
                </div>
              </div>

              {/* Promo Code & Action */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<ShoppingBag className="w-5 h-5" />}
                  onClick={handleClaimCombo}
                  className="shadow-xl hover:scale-105"
                >
                  CLAIM COMBO FOR $19.99
                </Button>

                {/* Copy Coupon Code Badge */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 px-4 py-3 rounded-full bg-black/30 border border-white/20 hover:bg-black/50 transition-colors text-xs font-mono font-bold tracking-wider cursor-pointer"
                >
                  <span>CODE: MIDNIGHT30</span>
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/70" />
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image Showcase */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-radial from-secondary/40 to-transparent rounded-full blur-2xl animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80"
                  alt="Midnight Smash Combo Deal"
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
