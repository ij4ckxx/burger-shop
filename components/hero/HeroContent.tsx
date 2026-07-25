"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { HeroButtons } from "./HeroButtons";
import { Flame, Star, ShieldCheck, Clock } from "lucide-react";

export const HeroContent: React.FC = () => {
  return (
    <div className="hero-content flex flex-col gap-6 max-w-2xl">
      {/* Top Tagline Badge */}
      <div>
        <Badge variant="discount" size="md" className="py-1.5 px-4 shadow-lg shadow-primary/20 animate-pulse">
          <Flame className="w-4 h-4 mr-1 inline" /> #1 RATED GOURMET BURGER SHOP
        </Badge>
      </div>

      {/* Main Headline */}
      <h1 className="hero-title font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-foreground">
        FLAME-GRILLED <br />
        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-sm">
          PERFECTION.
        </span>
      </h1>

      {/* Subheading Description */}
      <p className="hero-desc text-base sm:text-lg text-foreground/80 font-body leading-relaxed max-w-xl">
        Bite into pure perfection. 100% Black Angus beef smashed & flame-grilled to order, melted artisanal cheddar, crisp farm-fresh toppings, and house-made truffle sauce.
      </p>

      {/* Hero Buttons */}
      <HeroButtons />

      {/* Trust & Stats Indicators */}
      <div className="hero-stats grid grid-cols-3 gap-4 pt-6 border-t border-foreground/10 text-xs sm:text-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-primary font-heading text-2xl sm:text-3xl">
            <span>15K+</span>
          </div>
          <span className="text-foreground/60 font-medium">Happy Cravers</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-amber-500 font-heading text-2xl sm:text-3xl">
            <Star className="w-5 h-5 fill-current" />
            <span>4.9 / 5</span>
          </div>
          <span className="text-foreground/60 font-medium">Over 2,400 Reviews</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-secondary font-heading text-2xl sm:text-3xl">
            <Clock className="w-5 h-5" />
            <span>20 MINS</span>
          </div>
          <span className="text-foreground/60 font-medium">Average Delivery</span>
        </div>
      </div>
    </div>
  );
};
