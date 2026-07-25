"use client";

import React, { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/Badge";
import { Flame, Sparkles, Award } from "lucide-react";

export const HeroImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const burgerImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      if (burgerImageRef.current) {
        burgerImageRef.current.style.transform = `scale(1.05) translate(${x * 25}px, ${y * 25}px) rotate(${x * 5}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (burgerImageRef.current) {
        burgerImageRef.current.style.transform = "scale(1) translate(0px, 0px) rotate(0deg)";
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-image-wrapper relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center cursor-pointer select-none"
    >
      {/* Background Radial Fire Glow Ring */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-[80%] h-[80%] border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[95%] h-[95%] border border-dashed border-secondary/30 rounded-full animate-[spin_35s_linear_infinite_reverse]" />

      {/* Floating Main Gourmet Burger Image */}
      <img
        ref={burgerImageRef}
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=90"
        alt="The Royal Truffle Smash Burger"
        className="relative z-10 w-[90%] h-[90%] object-contain drop-shadow-[0_25px_40px_rgba(214,40,40,0.35)] transition-transform duration-300 ease-out animate-float"
      />

      {/* Floating Badge 1 - Top Left */}
      <div className="absolute top-6 left-2 z-20 glass-panel px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 animate-bounce">
        <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center">
          <Flame className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-foreground">FLAME-GRILLED</span>
          <span className="text-[10px] text-foreground/60">Seared at 500°F</span>
        </div>
      </div>

      {/* Floating Badge 2 - Bottom Right */}
      <div className="absolute bottom-8 right-2 z-20 glass-panel px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-500 text-burger-gray-900 flex items-center justify-center font-bold">
          <Award className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-foreground">100% BLACK ANGUS</span>
          <span className="text-[10px] text-emerald-500 font-semibold">Never Frozen Beef</span>
        </div>
      </div>

      {/* Floating Badge 3 - Top Right Price Tag */}
      <div className="absolute top-12 right-4 z-20 bg-secondary text-burger-gray-900 font-heading text-2xl px-4 py-1.5 rounded-2xl shadow-lg rotate-6 hover:rotate-0 transition-transform">
        $15.99
      </div>
    </div>
  );
};
