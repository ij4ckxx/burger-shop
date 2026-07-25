"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    id: "r-1",
    name: "Marcus Vance",
    role: "Food Critic & Culinary Blogger",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The Royal Truffle Smash is hands down the best burger in the city. The crispy edges combined with white truffle aioli are purely sublime!",
    favoriteBurger: "The Royal Truffle Smash",
  },
  {
    id: "r-2",
    name: "Elena Rostova",
    role: "Verified Craver",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Piping hot delivery in literally 18 minutes! The Honey Chipotle Chicken sandwich was insanely crispy and juicy.",
    favoriteBurger: "Honey Chipotle Crispy Chicken",
  },
  {
    id: "r-3",
    name: "David Chen",
    role: "Tech Lead & Burger Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Firehouse Diablo Inferno lives up to its name. Perfectly balanced spice level, juicy meat, and top tier brioche buns.",
    favoriteBurger: "Firehouse Diablo Inferno",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <Badge variant="secondary" size="md">
            REAL CRAVER REVIEWS
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
            LOVED BY THOUSANDS
          </h2>
          <p className="text-sm text-foreground/70">
            Over 2,400 5-star ratings across delivery platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <Card
              key={rev.id}
              hoverEffect
              glow="red"
              className="flex flex-col justify-between p-8 bg-surface/70 border border-foreground/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-foreground/80 italic leading-relaxed">
                  "{rev.comment}"
                </p>

                <div className="text-xs text-primary font-bold">
                  Fav: <span className="text-foreground">{rev.favoriteBurger}</span>
                </div>
              </div>

              {/* Author */}
              <div className="pt-6 mt-4 border-t border-foreground/10 flex items-center gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-heading text-xl text-foreground flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 inline" />
                  </h4>
                  <span className="text-xs text-foreground/60">{rev.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
