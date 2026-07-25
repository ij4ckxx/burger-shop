"use client";

import React, { useState } from "react";
import { FOOTER_SECTIONS, STORE_INFO } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Flame, MapPin, Phone, Mail, Clock, Send, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-surface border-t border-foreground/10 text-foreground pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-foreground/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-3xl tracking-wider text-foreground">
                BURGER<span className="text-primary">CRAFT</span>
              </span>
            </a>

            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
              Artisanal flame-grilled gourmet burgers crafted with 100% Black Angus beef, house-made sauces, and fresh locally sourced ingredients delivered in under 30 minutes.
            </p>

            <div className="space-y-2 text-xs text-foreground/80 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{STORE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{STORE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{STORE_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-heading text-xl tracking-wide text-foreground border-b border-foreground/10 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-foreground/70 font-medium">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        ›
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar & Newsletter */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-foreground/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} BURGER CRAFT. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-primary fill-current inline" />
            <span>for true burger lovers.</span>
          </div>

          {/* Payment / Quality Badges */}
          <div className="flex items-center gap-4 text-xs font-semibold text-foreground/40 uppercase tracking-widest">
            <span>100% ANGUS</span>
            <span>•</span>
            <span>FLAME-GRILLED</span>
            <span>•</span>
            <span>EXPRESS DELIVERY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
