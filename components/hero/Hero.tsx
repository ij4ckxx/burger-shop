"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
      })
        .from(
          ".hero-image-wrapper",
          {
            opacity: 0,
            scale: 0.85,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".hero-stats",
          {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};
