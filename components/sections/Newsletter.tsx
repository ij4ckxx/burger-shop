"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Mail, Send, CheckCircle } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-surface via-surface/90 to-surface border border-foreground/15 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <Badge variant="discount" size="md" className="mx-auto">
              GET 20% OFF YOUR FIRST ORDER
            </Badge>

            <h2 className="font-heading text-4xl sm:text-6xl tracking-wide text-foreground">
              JOIN THE CRAFT CLUB
            </h2>

            <p className="text-sm sm:text-base text-foreground/70">
              Subscribe to get secret menu items, flash promo codes, and 20% off your first flame-grilled delivery.
            </p>

            {isSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold text-sm">
                  WELCOME TO THE CRAFT CLUB! Check your inbox for your 20% coupon.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-2"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="w-4 h-4 text-foreground/50" />}
                  required
                />
                <Button
                  type="submit"
                  variant="glow"
                  size="md"
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto shrink-0"
                >
                  SUBSCRIBE
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
