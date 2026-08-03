"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flame, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";

export const AuthBranding: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Floating animation for decorative badge elements
      gsap.to(".floating-element-1", {
        y: -12,
        rotation: 4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-element-2", {
        y: 10,
        rotation: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".floating-element-3", {
        scale: 1.08,
        opacity: 0.9,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] lg:min-h-[580px] rounded-3xl p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-burger-brown-700 via-burger-brown-600 to-black text-white flex flex-col justify-between shadow-2xl"
    >
      {/* Background Ambient Glow & Abstract Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[320px] h-[320px] rounded-full bg-primary/30 blur-[90px] pointer-events-none floating-element-3" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[300px] h-[300px] rounded-full bg-secondary/25 blur-[85px] pointer-events-none floating-element-3" />
      <div className="absolute top-[40%] right-[15%] w-[180px] h-[180px] rounded-full bg-accent/20 blur-[60px] pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider uppercase text-secondary">
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Gourmet Club Membership</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-xs text-white/70">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-bold text-white">4.9/5</span> Rating
        </div>
      </div>

      {/* Center Layered Decorative Burger-Inspired Art (Gradient Placeholders) */}
      <div className="relative z-10 my-8 lg:my-auto flex flex-col items-center justify-center">
        <div className="relative w-64 h-56 flex items-center justify-center">
          {/* Bun Top Representation */}
          <div className="absolute top-0 w-48 h-16 rounded-t-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg border border-amber-300/30 flex items-center justify-center">
            <div className="flex gap-4 opacity-50">
              <span className="w-1.5 h-1 bg-white rounded-full rotate-45" />
              <span className="w-1.5 h-1 bg-white rounded-full -rotate-12" />
              <span className="w-1.5 h-1 bg-white rounded-full rotate-30" />
            </div>
          </div>

          {/* Cheese Layer */}
          <div className="absolute top-12 w-52 h-4 bg-gradient-to-r from-yellow-400 via-secondary to-yellow-500 rounded-sm transform rotate-[-2deg] shadow-md border-t border-yellow-200/40" />

          {/* Patty Layer */}
          <div className="absolute top-15 w-44 h-10 bg-gradient-to-r from-burger-brown-600 via-burger-brown-500 to-burger-brown-700 rounded-2xl shadow-md border border-burger-brown-400/30 flex items-center justify-center">
            <div className="w-full h-1 bg-burger-brown-400/40 my-auto" />
          </div>

          {/* Lettuce Layer */}
          <div className="absolute top-24 w-50 h-3 bg-gradient-to-r from-burger-green-400 via-burger-green-500 to-burger-green-600 rounded-full transform rotate-[1.5deg] shadow-xs" />

          {/* Bun Bottom Representation */}
          <div className="absolute top-26 w-48 h-10 rounded-b-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 shadow-xl border border-amber-400/20" />

          {/* Floating Floating Badges */}
          <div className="floating-element-1 absolute -top-4 -left-6 px-3.5 py-2 rounded-2xl bg-surface/90 backdrop-blur-xl border border-white/20 text-foreground shadow-2xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <Flame className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-foreground/50 leading-none">Flavour</p>
              <p className="text-xs font-bold text-foreground leading-tight">100% Angus</p>
            </div>
          </div>

          <div className="floating-element-2 absolute -bottom-2 -right-6 px-3.5 py-2 rounded-2xl bg-surface/90 backdrop-blur-xl border border-white/20 text-foreground shadow-2xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-foreground/50 leading-none">Express</p>
              <p className="text-xs font-bold text-foreground leading-tight">20 Min Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copy Details */}
      <div className="relative z-10 space-y-3">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-wide leading-none text-white drop-shadow-md">
          Fresh Burgers, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-300 to-accent">
            Delivered Fast
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-white/80 max-w-md font-normal leading-relaxed">
          Join Burger Craft to unlock secret menu items, earn sizzling loyalty rewards, and track your artisan flame-grilled orders live.
        </p>

        {/* Perks list */}
        <div className="pt-2 flex items-center gap-4 text-xs font-medium text-white/90">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>Secure Access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Exclusive Deals</span>
          </div>
        </div>
      </div>
    </div>
  );
};
